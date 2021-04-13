import React from "react";
import { screen } from "@testing-library/react";
import renderConnected from "utilities/test/renderConnected";

import UserAvatar from "./UserAvatar";

const setup = (initialState = {}) =>
  renderConnected({
    ui: <UserAvatar />,
    initialState,
  });

describe("UserAvatar", () => {
  it("should display username", () => {
    setup({
      userProfile: {
        username: "Steve",
      },
    });
    const userAvatarText = screen.getByText("Logged in as Steve");
    expect(userAvatarText).toBeInTheDocument();
  });
});
