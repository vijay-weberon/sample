import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import MenuTemplate from "../components/MenuTemplate";
import "@testing-library/jest-dom";
import { getReadablePhoneNumber } from "../components/utilities";

describe("MenuTemplate component - To check if it renders 47 menuitem", () => {
  it("renders correct number of menu items", () => {
    render(
      <MenuTemplate
        email="praveen@weberealty.com"
        contactNumber="+19254527483"
      />
    );
    const menuItems = screen.getAllByRole("menuitem");
    expect(menuItems).toHaveLength(47);
  });
});

describe("MenuTemplate Component for props", () => {
  const defaultProps = {
    contactNumber: "+19254527483",
    email: "praveen@weberealty.com",
  };
  const DEFAULT_EMAIL = "praveen@weberealty.com";
  const DEFAULT_CONTACT_NUMBER = "+19254527483";
  it("renders with default contactNumber and email when no props are provided", () => {
    render(<MenuTemplate contactNumber="" email="" />);
    const emailLink = screen.getByRole("link", { name: /Email/i });
    expect(emailLink).toHaveAttribute("href", `mailto:${DEFAULT_EMAIL}`);
    const phoneLink = screen.getByRole("link", { name: "(+1) 925-452-7483" });
    expect(phoneLink).toHaveAttribute("href", `tel:${DEFAULT_CONTACT_NUMBER}`);
    if (phoneLink) {
      expect(phoneLink).toMatchSnapshot();
    }
    if (emailLink) {
      expect(emailLink).toMatchSnapshot();
    }
  });

  it("renders with custom contactNumber and email when provided through props", () => {
    const customProps = {
      contactNumber: "+19254527483",
      email: "praveen@weberealty.com",
    };
    render(<MenuTemplate {...customProps} />);
    const emailLink = screen.getByRole("link", { name: /Email/i });
    expect(emailLink).toHaveAttribute("href", `mailto:${customProps.email}`);
    const phoneLink = screen.getByRole("link", { name: "(+1) 925-452-7483" });
    expect(phoneLink).toHaveAttribute(
      "href",
      `tel:${customProps.contactNumber}`
    );
  });

  it("renders readable phone number in the menu", () => {
    const customProps = {
      contactNumber: "+19254527483",
      email: "praveen@weberealty.com",
    };
    render(<MenuTemplate {...customProps} />);
    const phoneNumberText = screen.getByText(
      getReadablePhoneNumber(customProps.contactNumber)
    );
    expect(phoneNumberText).toBeInTheDocument();
  });

  it("calls the provided contactNumber when clicking the Call button", () => {
    const customProps = {
      contactNumber: "+19254527483",
      email: "praveen@weberealty.com",
    };
    render(<MenuTemplate {...customProps} />);
    const callButton = screen.getByRole("link", { name: "(+1) 925-452-7483" });
    userEvent.click(callButton);
  });

  it("checks if the number and email passed through props are the same", () => {
    const propsWithSameContact = {
      contactNumber: "(+1) 925-452-7483",
      email: "praveen@weberealty.com",
    };
    render(
      <MenuTemplate
        email="praveen@weberealty.com"
        contactNumber="+19254527483"
      />
    );
    const callButton = screen.getByRole("link", { name: "(+1) 925-452-7483" });
    const emailLink = screen.getByRole("link", { name: /Email/i });

    const callHref = callButton.getAttribute("href");
    const emailHref = emailLink.getAttribute("href");

    const callNumber = getReadablePhoneNumber(callHref.substring(4));
    const emailContact = emailHref.substring(7);
    expect(callNumber).toBe(propsWithSameContact.contactNumber);
    expect(emailContact).toBe(propsWithSameContact.email);
  });
});
