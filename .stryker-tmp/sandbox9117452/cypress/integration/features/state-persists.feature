Feature: State Persists

Scenario: Logged-In State Persists After Page Refresh
    As a Logged-In User
    I want to be able to refresh the page and stayed logged in
    Because it is very frustrating / bad UX for users to login after every page refresh. 

    Given I'm a logged-in user on the home page
    And I should see my userId displayed
    And the "Logout" button should be displayed
    When the page is refreshed
    Then my userId should still be displayed
    And the "Login" button should be hidden
    And the "Logout" button should be displayed