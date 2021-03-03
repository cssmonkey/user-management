import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

const setup = () => render(<App />);

describe("App", () => {
  it("renders app", () => {
    const { container } = setup();
    const app = container.querySelector(".app");
    expect(app).toBeInTheDocument();
  });
});
