Feature: Showing Results Instead
  Scenario: Mispelling hello world As hello welrd
    Given I open the Google home page
    When I type "hello werld" into the search and hit enter
    Then I should see that the results are for "hello world".