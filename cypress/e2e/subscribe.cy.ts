import { beforeEach } from "mocha"

describe("subscribe to newsletter", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows to subscribe to newsletter", () => {
    cy.getByData("email-input").type("you@me.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message")
      .should("be.visible")
      // verify that success message includes a specific text
      .should("include.text", "has been successfully subscribed")
      /* verify that success message includes "Success"
      too much assertion I should delete one of them */
      .invoke("text")
      .should("match", /^Success/)
  })

  it("returns an error when the input field is blank", () => {
    cy.getByData("submit-button").click()
    // verify the form displays an error message when things go wrong
    cy.getByData("error-message")
      .should("be.visible")
      .contains("Email is required")
  })

  it("returns an error when the user enters a bad email)", () => {
    // user enters a bad email
    cy.getByData("email-input").type("this is not an email")
    cy.getByData("submit-button").click()
    // TODO improve this assertion
    cy.getByData("success-message").should("not.exist")
  })
})
