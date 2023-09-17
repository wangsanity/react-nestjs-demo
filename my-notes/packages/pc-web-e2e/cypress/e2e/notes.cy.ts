import note from "../fixtures/note.json";

describe("note page", () => {
  before(() => {
    cy.request({
      method: "post",
      url: "http://localhost:3011/api/note",
      body: note,
    });
  });

  beforeEach(() => {
    cy.login();
    cy.visit("/notes");
  });

  it("Display correct note title and detail", () => {
    cy.contains("Test note title").should("be.visible");
    cy.contains("Test note detail").should("be.visible");
  });
});
