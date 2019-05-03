import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import MineVarianceTable from "./MineVarianceTable";
import MineVarianceApplicationTable from "./MineVarianceApplicationTable";
import * as ModalContent from "@/constants/modalContent";
import { modalConfig } from "@/components/modalContent/config";
import * as Permission from "@/constants/permissions";
import * as Strings from "@/constants/strings";
import CustomPropTypes from "@/customPropTypes";
import AddButton from "@/components/common/AddButton";
import AuthorizationWrapper from "@/components/common/wrappers/AuthorizationWrapper";
import NullScreen from "@/components/common/NullScreen";

const propTypes = {
  mine: CustomPropTypes.mine.isRequired,
  approvedVariances: PropTypes.arrayOf(CustomPropTypes.variance).isRequired,
  varianceApplications: PropTypes.arrayOf(CustomPropTypes.variance).isRequired,
  createVariance: PropTypes.func.isRequired,
  addDocumentToVariance: PropTypes.func.isRequired,
  complianceCodes: CustomPropTypes.options.isRequired,
  complianceCodesHash: PropTypes.objectOf(PropTypes.string).isRequired,
  fetchVariancesByMine: PropTypes.func.isRequired,
  coreUsers: CustomPropTypes.options.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  varianceStatusOptions: CustomPropTypes.options.isRequired,
  updateVariance: PropTypes.func.isRequired,
  varianceStatusOptionsHash: PropTypes.objectOf(PropTypes.string).isRequired,
};

export class MineVariance extends Component {
  handleAddVariances = (files, isApplication) => (values) => {
    const variance_application_status_code = isApplication
      ? Strings.VARIANCE_APPLICATION_CODE
      : Strings.VARIANCE_APPROVED_CODE;
    const received_date = values.received_date
      ? values.received_date
      : moment().format("YYYY-MM-DD");
    const newValues = { received_date, variance_application_status_code, ...values };
    return this.props
      .createVariance({ mineGuid: this.props.mine.mine_guid }, newValues)
      .then(async ({ data: { variance_id } }) => {
        await Promise.all(
          Object.entries(files).map(([document_manager_guid, document_name]) =>
            this.props.addDocumentToVariance(
              { mineGuid: this.props.mine.mine_guid, varianceId: variance_id },
              {
                document_manager_guid,
                document_name,
              }
            )
          )
        );
        this.props.closeModal();
        this.props.fetchVariancesByMine({ mineGuid: this.props.mine.mine_guid });
      });
  };

  handleUpdateVariance = (files, variance, isApproved) => (values) => {
    // if the application isApproved, set issue_date to today and set expiry_date 5 years from today,
    // unless the user set a custom expiry.
    const issue_date = isApproved ? moment().format("YYYY-MM-DD") : null;
    let expiry_date;
    if (isApproved) {
      expiry_date = values.expiry_date
        ? values.expiry_date
        : moment(issue_date, "YYYY-MM-DD").add(5, "years");
    }
    const newValues = { ...values, issue_date, expiry_date };
    const mineGuid = this.props.mine.mine_guid;
    const varianceId = variance.variance_id;
    const codeLabel = this.props.complianceCodesHash[variance.compliance_article_id];
    this.props.updateVariance({ mineGuid, varianceId, codeLabel }, newValues).then(async () => {
      await Promise.all(
        Object.entries(files).map(([document_manager_guid, document_name]) =>
          this.props.addDocumentToVariance(
            { mineGuid: this.props.mine.mine_guid, varianceId },
            {
              document_manager_guid,
              document_name,
            }
          )
        )
      );
      this.props.closeModal();
      this.props.fetchVariancesByMine({ mineGuid: this.props.mine.mine_guid });
    });
  };

  openEditVarianceModal = (event, variance) => {
    event.preventDefault();
    this.props.openModal({
      props: {
        onSubmit: this.handleUpdateVariance,
        title: this.props.complianceCodesHash[variance.compliance_article_id],
        mineGuid: this.props.mine.mine_guid,
        mineName: this.props.mine.mine_name,
        variance,
        coreUsers: this.props.coreUsers,
        varianceStatusOptions: this.props.varianceStatusOptions,
        initialValues: variance,
      },
      content: modalConfig.EDIT_VARIANCE,
    });
  };

  openViewVarianceModal = (event, variance) => {
    event.preventDefault();
    this.props.openModal({
      props: {
        variance,
        title: this.props.complianceCodesHash[variance.compliance_article_id],
        mineName: this.props.mine.mine_name,
      },
      content: modalConfig.VIEW_VARIANCE,
    });
  };

  openVarianceModal(event) {
    event.preventDefault();
    this.props.openModal({
      props: {
        onSubmit: this.handleAddVariances,
        title: ModalContent.ADD_VARIANCE(this.props.mine.mine_name),
        mineGuid: this.props.mine.mine_guid,
        complianceCodes: this.props.complianceCodes,
        coreUsers: this.props.coreUsers,
      },
      content: modalConfig.ADD_VARIANCE,
    });
  }

  renderVarianceTables = () =>
    this.props.varianceApplications.length > 0 || this.props.approvedVariances.length > 0 ? (
      <div>
        <br />
        <h4 className="uppercase">Variance Applications</h4>
        <br />
        <MineVarianceApplicationTable
          openModal={this.openEditVarianceModal}
          variances={this.props.varianceApplications}
          complianceCodesHash={this.props.complianceCodesHash}
          mine={this.props.mine}
          varianceStatusOptionsHash={this.props.varianceStatusOptionsHash}
        />
        <br />
        <h4 className="uppercase">Approved Variances</h4>
        <br />
        <MineVarianceTable
          openModal={this.openViewVarianceModal}
          variances={this.props.approvedVariances}
          complianceCodesHash={this.props.complianceCodesHash}
          mine={this.props.mine}
        />
      </div>
    ) : (
      <NullScreen type="variance" />
    );

  render() {
    return (
      <div>
        <div className="inline-flex flex-end">
          <AuthorizationWrapper permission={Permission.CREATE}>
            <AddButton onClick={(event) => this.openVarianceModal(event)}>
              Add variance application
            </AddButton>
          </AuthorizationWrapper>
        </div>
        {this.renderVarianceTables()}
      </div>
    );
  }
}

MineVariance.propTypes = propTypes;

export default MineVariance;
