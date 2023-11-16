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
      .should("include.text", "has been successfully subscribed")
      .invoke("text")
      .should("match", /^Success/)
  })

  it("returns an error when the input field is blank", () => {
    cy.getByData("submit-button").click()
    cy.getByData("error-message")
      .should("be.visible")
      .contains("Email is required")
  })

  it("returns an error when the user enters a bad email", () => {
    cy.getByData("email-input").type("this is not an email")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })

  it("should not allow an already subscribed user to subscribe again", () => {
    // TODO
  })
})
