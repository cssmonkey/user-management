import React from "react";
import { screen, render } from "@testing-library/react";

import LandingPage from "./LandingPage";

describe("LandingPage", () => {
  it("renders", () => {
    render(<LandingPage />);

    const heading = screen.getByText("Landing page");
    expect(heading).toBeInTheDocument();
  });
});
