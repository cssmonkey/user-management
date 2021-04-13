import React from "react";
import { screen, render } from "@testing-library/react";

import ContentCard from "./ContentCard";

describe("ContentCard", () => {
  it("renders", () => {
    render(
      <ContentCard>
        <p>Child element</p>
      </ContentCard>
    );

    const childElement = screen.getByText("Child element");
    expect(childElement).toBeInTheDocument();
  });
});
