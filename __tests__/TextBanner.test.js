import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import TextBannerComponent from "../components/TextBannerComponent";

describe("TextBannerComponent Component", () => {
  it("renders with props", () => {
    render(
      <TextBannerComponent bannerText="Thank you for responding to our Letter!" />
    );
    const props = screen.getByText("Thank you for responding to our Letter!");
    expect(props).toBeInTheDocument();

    if (props) {
      expect(props).toMatchSnapshot();
    }
  });
});
