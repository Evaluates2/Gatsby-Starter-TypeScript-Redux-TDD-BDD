import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('the page is refreshed', _buttonLabel => {
    cy.reload()
})

Then('I should see my userId displayed', () => {
    cy.verifyUserIdVisabilityIs(true)
})

Then('the {string} button should be hidden', buttonLabel => {
    cy.get(`button:contains(${buttonLabel})`).should('not.visible')
})

Then('the {string} button should be displayed', buttonLabel => {
    cy.get(`button:contains(${buttonLabel})`).should('be.visible')
})

Then('my userId should be hidden', _buttonLabel => {
    cy.verifyUserIdVisabilityIs(false)
})

Then('my userId should still be displayed', _buttonLabel => {
    cy.verifyNewUserIdEqualsPreviousUserId()
})
