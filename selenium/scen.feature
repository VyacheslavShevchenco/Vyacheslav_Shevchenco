Feature:
  Background:
    Given user login
    When user input username and password
    And select button login
    Then go to homepage

  Scenario: add new job
    Given user on Job Titles page
    When user select 'Add'
    And input'jobTitle' 'description' 'note'
    And select 'save'
    Then the user receives new data on the page

    When user choose <jobTitle>
    And select 'edit'
    And formatting <description>
    And select 'save'
    Then the user receives changes on Job Titles page

    When user designate <jobTitle>
    And click Remove button
    And confirm deleted
    Then the user receives deleted line on Job Titles page
