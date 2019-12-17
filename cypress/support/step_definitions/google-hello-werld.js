import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given("I open the Google home page", () => {
  cy.visit("https://google.com")
})

When('I type {string} into the search and hit enter', inputText => {
  cy.get('input[title="Search"]')
    .type(inputText, { delay: 100 })
    .type("{enter}", { delay: 100 })
})

Then('I should see that the results are for {string}.', expected => {
  cy.get("span:contains(Showing results for)")
    .next()
    .should("have.text", expected)
})
