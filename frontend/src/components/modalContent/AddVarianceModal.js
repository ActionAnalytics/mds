import React from "react";
import PropTypes from "prop-types";
import CustomPropTypes from "@/customPropTypes";
import AddVarianceForm from "@/components/Forms/variances/AddVarianceForm";

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  mineGuid: PropTypes.string.isRequired,
  complianceCodes: PropTypes.arrayOf(CustomPropTypes.dropdownListItem).isRequired,
  inspectors: CustomPropTypes.options.isRequired,
};

export const AddVarianceModal = (props) => (
  <div>
    <AddVarianceForm
      onSubmit={props.onSubmit}
      closeModal={props.closeModal}
      mineGuid={props.mineGuid}
      complianceCodes={props.complianceCodes}
      inspectors={props.inspectors}
    />
  </div>
);

AddVarianceModal.propTypes = propTypes;

export default AddVarianceModal;
