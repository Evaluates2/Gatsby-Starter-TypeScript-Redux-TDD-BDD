Feature: Login

  Scenario: User should be able to login
    As a Non-Logged-In User
    I want to be able to login
    Because I want to know my userId.

    Given I'm a logged-out user on the home page
    When I click the "Login" button
    Then I should see my userId displayed
    And the "Login" button should be hidden
    And the "Logout" button should be displayed
