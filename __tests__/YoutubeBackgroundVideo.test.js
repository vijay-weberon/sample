import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import YoutubeBackgroundVideo from "../components/YoutubeBackgroundVideo";

test("Play Sound renders successfully", () => {
  render(<YoutubeBackgroundVideo />);
  const element = screen.getByText(/Play Sound/i);
  expect(element).toBeInTheDocument();
  if (element) {
    expect(element).toMatchSnapshot();
  }
});
