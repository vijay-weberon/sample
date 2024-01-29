import React from "react";
import config from "../config.json";
import { getReadablePhoneNumber } from "./utilities";
import PropTypes from "prop-types";

const CtaSection = (props) => {
  return (
    <div
      id="cta"
      className="container"
      style={{ paddingTop: "20px", paddingBottom: "20px" }}
    >
      <div className="row">
        <p className="cta">
          <a
            className="button"
            href={`tel:${props.contactNumber || config.DEFAULT_CONTACT_NUMBER}`}
          >
            Call{" "}
            {getReadablePhoneNumber(
              props.contactNumber || config.DEFAULT_CONTACT_NUMBER
            )}
            <i className="fa fa-phone icon"></i>
          </a>
        </p>
      </div>
      <div className="row">
        <div className="col-12">
          <p className="cta_or">OR</p>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
CtaSection.propTypes = {
  contactNumber: PropTypes.string.isRequired,
};
