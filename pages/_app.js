import React from "react";
import ResourceContext from "../components/ResourceContext";
import PropTypes from "prop-types";

function MyApp({ Component, pageProps }) {
  function logResourceLoadError(target) {
    let err = "Error loading: '" + (target.src || ref.href) + "'";
    if (window.Rollbar) {
      Rollbar.error(err);
    } else {
      console.log(err);
    }
    return false;
  }

  return (
    <ResourceContext.Provider value={{ logResourceLoadError }}>
      <Component {...pageProps} />
    </ResourceContext.Provider>
  );
}

export default MyApp;
MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};
