describe("Creating a message", () => {
  it("Displays the message in the list", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="pollText"]').type("New poll");

    cy.get('[data-testid="sendButton"]').click();

    cy.get('[data-testid="pollText"]').should("have.value", "");

    cy.contains("New poll");
  });
});
