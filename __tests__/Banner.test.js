import { render, screen } from "@testing-library/react";
import React from "react";
import Banner from "../components/Banner";
import "@testing-library/jest-dom";
import ResourceContext from "../components/ResourceContext";
test("Banner component renders with same props", async () => {
  const logResourceLoadError = (target) => {
    console.log(`Resource Not Found for ${target}`);
  };

  render(
    <ResourceContext.Provider value={{ logResourceLoadError }}>
      <Banner
        url="/vip_buyer"
        header="Beat out other buyers to Hot New Listing"
        ImgAlt="You can become a VIP Buyer and Beat Other Buyers to Hot New Listings Image"
      />
    </ResourceContext.Provider>
  );

  // checks if props are rendered exactly as they are provided
  expect(screen.getByRole("heading")).toHaveTextContent(
    "Beat out other buyers to Hot New Listing"
  );

  const ImgAlt =
    "You can become a VIP Buyer and Beat Other Buyers to Hot New Listings Image";
  const imageElement = screen.getByRole("img", { name: ImgAlt });
  expect(imageElement).toBeInTheDocument();
});
