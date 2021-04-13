import React from "react";
import { screen } from "@testing-library/react";
import renderConnected from "utilities/test/renderConnected";

import UserHeader from "./UserHeader";

const setup = (initialState = {}) =>
  renderConnected({
    ui: <UserHeader />,
    initialState,
  });

describe("UserHeader", () => {
  it("should display username", () => {
    setup({
      userProfile: {
        username: "Steve",
      },
    });
    const userHeaderText = screen.getByText("Logged in as Steve");
    expect(userHeaderText).toBeInTheDocument();
  });
});
