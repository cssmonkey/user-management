import React from "react";
import { screen } from "@testing-library/react";
import renderConnected from "utilities/test/renderConnected";

import SiteHeader from "./SiteHeader";

const setup = () =>
  renderConnected({
    ui: <SiteHeader />,
    initialState: {
      userProfile: {
        username: "Steve",
      },
    },
  });

describe("SiteHeader", () => {
  it("should display logo", () => {
    setup();
    const logoImg = screen.getByAltText("Company name");
    expect(logoImg).toBeInTheDocument();
  });
});
