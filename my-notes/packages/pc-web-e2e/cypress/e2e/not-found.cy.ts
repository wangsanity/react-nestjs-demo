import { NotFoundPage } from "cypress/page-objects";

const notFoundPage = new NotFoundPage();

describe("not found page", () => {
  before(() => {});
  beforeEach(() => {
    cy.login();
    cy.visit("/404");
  });

  it("Display correct element", () => {
    notFoundPage.notFoundText().should("be.visible");
  });
});
