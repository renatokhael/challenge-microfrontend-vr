describe("Check Applications", () => {
  it("visit the app central", () => {
    cy.visit("http://localhost:3000");
    cy.get(":nth-child(1) > .sc-gsFSjX > .sc-imWZod").click();
    cy.get(".sc-eqUzNf > img").click();
  });
});
