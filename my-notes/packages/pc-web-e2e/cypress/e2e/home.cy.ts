import { HomePage } from "cypress/page-objects";

const homePage = new HomePage();

describe("home page", () => {
  before(() => {});
  beforeEach(() => {
    cy.login();
    cy.visit("/home");
  });

  it("Display correct elements", () => {
    homePage.homeText().should("be.visible");
    homePage.notesLink().should("be.visible");
  });
});
