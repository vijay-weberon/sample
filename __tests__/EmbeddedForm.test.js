import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import EmbeddedForm from "../components/EmbeddedForm";

test("Call 844-265-9508 Ext 5004 renders successfully", () => {
  render(<EmbeddedForm />);
  const element = screen.getByText(/Call 844-265-9508 Ext 5004/i);
  expect(element).toBeInTheDocument();
  if (element) {
    expect(element).toMatchSnapshot();
  }
});
