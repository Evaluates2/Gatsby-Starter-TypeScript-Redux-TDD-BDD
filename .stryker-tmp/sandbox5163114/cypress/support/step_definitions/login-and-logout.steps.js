import { Given, When } from 'cypress-cucumber-preprocessor/steps'

Given("I'm a logged-out user on the home page", () => {
  cy.visit('http://localhost:8000/')
  cy.ensureUserIs('LoggedOut')
})

Given("I'm a logged-in user on the home page", () => {
  cy.visit('http://localhost:8000/')
  cy.ensureUserIs('LoggedIn')
})

When('I click the {string} button', buttonLabel => {
  cy.get(`button:contains(${buttonLabel})`).click()
})
