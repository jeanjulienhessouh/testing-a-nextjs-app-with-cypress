describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("checks if the h1 contains the expected text", () => {
    cy.get('[data-test="hero-heading"]')
      .should("exist")
      .contains("Testing Next.js Applications with Cypress")
  })

  it("the features listed on the homepage are correct", () => {
    cy.get("dt").eq(0).contains("4 Courses")
    cy.get("dt").eq(1).contains("25+ Lessons")
    cy.get("dt").eq(2).contains("Free and Open Source")
  })
})
