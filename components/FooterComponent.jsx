import React from "react";
import PropTypes from "prop-types";
import config from "../config.json";
import { getReadablePhoneNumber } from "./utilities";

const FooterComponent = (props) => {
  return (
    <div className="footer-container">
      <footer className="wrapper">
        <div id="contactinfo">
          <div id="disclosure">
            <center>
              Praveen Kumar, CA BRE Lic#: 01928307
              <br /> 12935 Alcosta Blvd. #3681, San Ramon, California, 94583
              {/* The 'noopener' attribute prevents the new page from being able to access the window.opener property, which can protect against certain types of attacks. The noreferrer attribute additionally prevents the Referer header from being sent to the new page. */}
              {props.email && (
                <>
                  <br></br>
                  <a
                    href={`mailto:${props.email || config.DEFAULT_EMAIL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {props.email || config.DEFAULT_EMAIL}
                  </a>
                </>
              )}
              <br />
              {props.contactNumber &&
                getReadablePhoneNumber(
                  props.contactNumber || config.DEFAULT_CONTACT_NUMBER
                )}
            </center>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;

FooterComponent.propTypes = {
  contactNumber: PropTypes.string,
  email: PropTypes.string,
};
