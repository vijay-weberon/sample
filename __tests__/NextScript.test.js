import React from "react";
import "@testing-library/jest-dom";
import ResourceContext from "../components/ResourceContext";
import NextScript from "../components/NextScript";
import { render } from "@testing-library/react";

test("NextScript - Checking for logResourceLoadError", () => {
  const logResourceLoadError = (target) => {
    console.log(`Resource Not Found for ${target}`);
  };

  render(
    <ResourceContext.Provider value={{ logResourceLoadError }}>
      <NextScript url="/vip_buyer" src="/js/scripts.js" />
    </ResourceContext.Provider>
  );
  logResourceLoadError("NextScript");
});
