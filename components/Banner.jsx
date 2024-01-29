import React from "react";
import PropTypes from "prop-types";
import { useResourceContext } from "./ResourceContext";

const Banner = (props) => {
  const context = useResourceContext();
  const { logResourceLoadError } = context || {};
  return (
    <>
      <header className="header-container">
        <div id="butterBarContainer"></div>
        <header id="banner_header" className="wrapper clearfix bgclr8">
          <div
            id="praveen-img"
            style={{
              height: "270px",
              position: "absolute",
              display: "flex",
              alignItems: "center",
              width: "100%",
              zIndex: 1,
            }}
          >
            <div id="pp">
              <img
                src="images/sw/banners/new/praveen.png"
                width="100%"
                alt="praveen image"
                onError={(e) => logResourceLoadError(e.target)}
              />
            </div>

            <div
              style={{
                width: "auto",
                flex: "1 1 auto",
                textAlign: "center",
              }}
            >
              <h1 id="usp">
                <div
                  style={{
                    color: "#ffff00",
                    filter: "drop-shadow(0 0 15px rgba(0,0,0,1.5))",
                  }}
                >
                  {props.header}
                </div>
              </h1>
            </div>
          </div>

          <img
            id="banner"
            src="images/sw/banners/new/default_banner.jpg"
            width="100%"
            alt={props.ImgAlt}
            onError={(e) => logResourceLoadError(e.target)}
          />
        </header>
      </header>{" "}
    </>
  );
};

export default Banner;

Banner.propTypes = {
  header: PropTypes.string.isRequired,
  ImgAlt: PropTypes.string.isRequired,
};
