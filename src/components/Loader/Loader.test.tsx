import React from "react";
import { screen, render } from "@testing-library/react";

import Loader from "./Loader";

const setup = () => render(<Loader />);

describe("Loader", () => {
  it("should display loading message", () => {
    setup();
    const loadingText = screen.getByText("Loading...");
    expect(loadingText).toBeInTheDocument();
  });
});
