import React from "react";
import { screen, render } from "@testing-library/react";

import PageContainer from "./PageContainer";

describe("PageContainer", () => {
  it("renders", () => {
    render(
      <PageContainer>
        <p>Child element</p>
      </PageContainer>
    );

    const childElement = screen.getByText("Child element");
    expect(childElement).toBeInTheDocument();
  });
});
