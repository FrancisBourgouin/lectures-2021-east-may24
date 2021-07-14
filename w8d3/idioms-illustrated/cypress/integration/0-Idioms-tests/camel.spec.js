

describe("Integration tests for the camel idiom", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("should show the camel when we visit the direct link", () => {
    cy.visit("/#/camel")

    cy.get('h1').should('have.text', "The straw that broke the camel's back")
  })
  it("should show the camel when we click on the camel link", () => {
    cy.get('[href="#/camel"]').click()

    cy.get('h1').should('have.text', "The straw that broke the camel's back")

  })
  it("should add a straw on top of the camel everytime we click, up to a max of 10", () => {
    cy.get('[href="#/camel"]').click()

    cy.get('.straw').should("not.exist")

    cy.get('.CamelBack').click()

    cy.get('.straw').should("have.length", 1)

    for (let i = 0; i < 9; i++) {
      cy.get('.CamelBack').click()
    }

    cy.get('.straw').should("have.length", 10)

    cy.get('.CamelBack').click()

    cy.get('.straw').should("not.exist")
  })
  xit("should show the camel breaking when hitting the threshold of 10", () => {

  })
})