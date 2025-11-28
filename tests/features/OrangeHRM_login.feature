Feature: Login Functionality of Automation website
 
  @smoke
  Scenario: Valid login to Automation Practice site
    Given user launches the OrangeHRM login page
    When user enters username "student" and password "Password123"
    And user clicks the login button
    Then user should be navigated to the dashboard