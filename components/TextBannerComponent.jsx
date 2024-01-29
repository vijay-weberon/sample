import React from "react";
import PropTypes from "prop-types";

const TextBannerComponent = (props) => {
  return (
    <div
      id="banner"
      style={{
        backgroundColor: "#FFFFFF",
        height: "25vh",
        maxHeight: "60px",
      }}
      className="banner"
    >
      <div
        style={{
          height: "25vh",
          maxHeight: "60px",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          width: "100%",
          background: "black",
        }}
      >
        <div style={{ width: "auto", flex: "1 1 auto", textAlign: "center" }}>
          <h1 id="usp" style={{ margin: "0px" }}>
            <div
              style={{
                color: "#ffff00",
                fontSize: "0.4em",
                fontWeight: "600",
              }}
            >
              {props.bannerText}
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TextBannerComponent;

TextBannerComponent.propTypes = {
  bannerText: PropTypes.string.isRequired,
};
