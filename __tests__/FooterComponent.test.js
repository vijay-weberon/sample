import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";
import FooterComponent from "../components/FooterComponent";

describe("FooterComponent", () => {
  it("renders content with props", () => {
    render(
      <FooterComponent email="praveen@weberealty.com" contactNumber="925-452-7483" />
    );
    const contentInfoElement = screen.getByRole("contentinfo");
    expect(contentInfoElement).toBeInTheDocument();
    if (contentInfoElement) {
      expect(contentInfoElement).toHaveTextContent("(+1) 925-452-7483");
      expect(contentInfoElement).toHaveTextContent("praveen@weberealty.com");
      expect(contentInfoElement).toMatchSnapshot();
    }
  });
});
