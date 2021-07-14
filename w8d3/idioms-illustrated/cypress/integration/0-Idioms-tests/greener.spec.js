
describe("Greener idiom behavior", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should show the greener idiom when using direct link", () => {
    cy.visit("/#/greener")

    // cy.get("h1 span").should('exist')
    cy.get("h1 span").should('have.text', "It's always greener on the other side")
  })
  it("should show the greener idiom when clicking the link", () => {

    cy.get('[href="#/greener"]').click()

    cy.get("h1 span").should('have.text', "It's always greener on the other side")
  })
  it("should show the person on the left side initially and move side on click", () => {
    cy.get('[href="#/greener"]').click()

    // cy.get('main section:first-of-type article:last-of-type img').should('exist')
    cy.get('section[data-testid="left"] #person').should('exist')
    cy.get('section[data-testid="right"] #person').should('not.exist')

    // cy.get('main section article:last-of-type img').click()
    cy.get('#person').click()

    // cy.get('main section:last-of-type article:last-of-type img').should('exist')
    cy.get('section[data-testid="left"] #person').should('not.exist')
    cy.get('section[data-testid="right"] #person').should('exist')
  })
})