from datetime import datetime
from flask import current_app
from werkzeug.exceptions import InternalServerError
from sqlalchemy.exc import SQLAlchemyError

from app.extensions import db
from .include.user_info import User


class UserBoundQuery(db.Query):
    _user_bound = True

    # for use when intentionally needing to make an unsafe query
    def unbound_unsafe(self):
        rv = self._clone()
        rv._user_bound = False
        return rv


# add listener for the before_compile event on UserBoundQuery
@db.event.listens_for(UserBoundQuery, 'before_compile', retval=True)
def ensure_constrained(query):
    from ... import auth

    if not query._user_bound or not auth.apply_security:
        return query

    mzero = query._mapper_zero()
    if mzero is not None:
        user_security = auth.get_current_user_security()

        if user_security.is_restricted():
            # use reflection to get current model
            cls = mzero.class_

            # if model includes mine_guid, apply filter on mine_guid.
            if hasattr(cls, 'mine_guid') and query._user_bound:
                query = query.enable_assertions(False).filter(
                    cls.mine_guid.in_(user_security.mine_ids))

    return query


class Base(db.Model):
    __abstract__ = True

    # Set default query_class on base class.
    query_class = UserBoundQuery

    def save(self, commit=True):
        db.session.add(self)
        if commit:
            try:
                db.session.commit()
            # This is done in this way because flask global error handlers cannot catch SQLAlchemy exceptions. More research needs to be done to know
            # if they can be caught and if not then a better strategy on when to actually catch the SQLAlchemy exceptions and let them pass should be used.
            except SQLAlchemyError as e:
                current_app.logger.error(
                    f'When trying to save {self} an exception was thrown by the database {e}')
                db.session.rollback()
                raise InternalServerError(f'Could not save {self.__class__.__name__}')


class AuditMixin(object):
    create_user = db.Column(db.String(60), nullable=False, default=User().get_user_username)
    create_timestamp = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    update_user = db.Column(
        db.String(60),
        nullable=False,
        default=User().get_user_username,
        onupdate=User().get_user_username)
    update_timestamp = db.Column(
        db.DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)
