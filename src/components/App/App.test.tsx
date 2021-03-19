import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import store from "../../state/store";

import App from "./App";

const setup = () => {
  const container = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  return container;
};

describe("App", () => {
  it("renders app", () => {
    const { container } = setup();

    const app = container.querySelector(".app");
    expect(app).toBeInTheDocument();
  });
});
