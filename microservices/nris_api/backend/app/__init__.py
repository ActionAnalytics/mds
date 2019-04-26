import sys
import json
import os

from flask import Flask, current_app
from flask_cors import CORS
from flask_restplus import Resource, apidoc
from flask_compress import Compress
from flask_migrate import MigrateCommand

from flask_jwt_oidc.exceptions import AuthError

from app.commands import register_commands
from app.extensions import db, jwt, api, sched, apm, migrate
from app.config import Config


def create_app(test_config=None):
    """Create and configure an instance of the Flask application."""
    app = Flask(__name__)

    app.config.from_object(Config)

    register_extensions(app)
    register_commands(app)

    return app


def register_extensions(app):

    api.app = app
    # Overriding swaggerUI base path to serve content under a prefix
    apidoc.apidoc.static_url_path = f'{Config.BASE_PATH}/swaggerui'
    api.init_app(app)

    db.init_app(app)
    jwt.init_app(app)
    migrate.init_app(app, db)
    #apm.init_app(app) if app.config['ELASTIC_ENABLED'] == '1' else None
    sched.init_app(app)

    CORS(app)
    Compress(app)

    return None