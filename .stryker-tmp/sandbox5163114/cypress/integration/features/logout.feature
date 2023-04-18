Feature: Logout

  Scenario: User should be able to logout
    As a Logged-In User
    I want to be able to logout
    Because I want be no longer logged in.

    Given I'm a logged-in user on the home page
    When I click the "Logout" button
    Then my userId should be hidden
    And the "Logout" button should be hidden
    And the "Login" button should be displayed

