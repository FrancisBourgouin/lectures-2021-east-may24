describe("super random tests", () => {

  it("should be able to go visit google !", () => {
    cy.visit("https://google.com")

    cy.get('.gLFyf').type("Einstein-Rosen Bridges{enter}")

    cy.get('[href="https://en.wikipedia.org/wiki/Wormhole"] > .LC20lb').should('exist')
  })
})