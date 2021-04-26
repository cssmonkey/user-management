import React from "react";
import renderConnected from "utilities/test/renderConnected";

import App from "./App";

const setup = (initialState = {}) =>
  renderConnected({
    ui: <App />,
    initialState,
  });

describe("App", () => {
  it("renders Loader when userProfile not loaded", () => {
    const { container } = setup({
      userProfile: {},
    });
    const app = container.querySelector(".loader");
    expect(app).toBeInTheDocument();
  });
  it("renders App when userProfile loaded", () => {
    const { container } = setup({
      userProfile: {
        username: "Steve",
      },
    });
    const app = container.querySelector(".app");
    expect(app).toBeInTheDocument();
  });
});
