import React from "react";
import { AppContainer } from "./AppContainer";
import { render, screen } from "@testing-library/react";
import { RootWithStore } from "../../test-utils";
import { texts } from "../../texts/texts";
import { BrowserRouter } from "react-router-dom";

const { short } = texts();

describe("AppContainer", () => {
  it("renders without crashing", () => {
    render(
      <RootWithStore>
        <BrowserRouter>
          <AppContainer>
            <div>routes here</div>
          </AppContainer>
        </BrowserRouter>
      </RootWithStore>
    );
  });

  it("shows correct elements", () => {
    render(
      <RootWithStore>
        <BrowserRouter>
          <AppContainer>
            <div>children</div>
          </AppContainer>
        </BrowserRouter>
      </RootWithStore>
    );
    expect(screen.getByText(short.logout)).toBeInTheDocument();
    expect(screen.getByText("Header")).toBeInTheDocument();
  });
});
