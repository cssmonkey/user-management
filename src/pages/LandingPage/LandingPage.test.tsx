import React from "react";
import { screen } from "@testing-library/react";
import renderConnected from "utilities/test/renderConnected";

import LandingPage from "./LandingPage";

const setup = (initialState = {}) =>
  renderConnected({
    ui: <LandingPage />,
    initialState,
  });

describe("LandingPage", () => {
  it("renders", () => {
    setup();

    const heading = screen.getByText("Landing page");
    expect(heading).toBeInTheDocument();
  });
});
