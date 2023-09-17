import { LoginPage, HomePage } from "cypress/page-objects";

const loginPage = new LoginPage();
const homePage = new HomePage();

describe("login page", () => {
  before(() => {});
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Display correct element", () => {
    loginPage.loginButton().should("be.visible");
    loginPage.userNameInput().should("be.visible");
  });

  it("Go to home page after login", () => {
    loginPage.userNameInput().type("admin");
    loginPage.clickLoginButton();
    homePage.homeText().should("be.visible");
  });

  it("Display according login user after login", () => {
    loginPage.userNameInput().type("admin");
    loginPage.clickLoginButton();
    cy.contains("admin").should("be.visible");
  });
});
