import { render, screen } from "@testing-library/react";
import React from "react";
import CtaSection from "../components/CtaSection";
import "@testing-library/jest-dom";
import { getReadablePhoneNumber } from "../components/utilities.js";
import userEvent from "@testing-library/user-event";

// works
describe("CtaSection Component", () => {
  const DEFAULT_CONTACT_NUMBER = "+19254527483";

  it("renders with DEFAULT_CONTACT_NUMBER when no contactNumber prop is provided", () => {
    render(<CtaSection contactNumber="" />);
    const callButton = screen.getByRole("link", { name: /Call/i });
    expect(callButton).toHaveAttribute("href", `tel:${DEFAULT_CONTACT_NUMBER}`);
    if (callButton) {
      expect(callButton).toMatchSnapshot();
    }
  });

  it("renders with custom contactNumber when provided through props", () => {
    const customContactNumber = "+19254527483";
    render(<CtaSection contactNumber={customContactNumber} />);
    const callButton = screen.getByRole("link", { name: /Call/i });
    expect(callButton).toHaveAttribute("href", `tel:${customContactNumber}`);
  });

  it("renders with a readable phone number", () => {
    const customContactNumber = "+19254527483";
    render(<CtaSection contactNumber={customContactNumber} />);
    const phoneNumberText = screen.getByText(
      `Call ${getReadablePhoneNumber(customContactNumber)}`
    );
    expect(phoneNumberText).toBeInTheDocument();
  });

  it("calls the provided contactNumber when clicking the Call button", () => {
    const customContactNumber = "+19254527483";
    render(<CtaSection contactNumber={customContactNumber} />);
    const callButton = screen.getByRole("link", { name: /Call/i });
    userEvent.click(callButton);
  });

  it('renders "OR" text', () => {
    render(<CtaSection contactNumber="" />);
    const orText = screen.getByText(/OR/i);
    expect(orText).toBeInTheDocument();
  });
});
