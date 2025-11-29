Feature: Login Functionality of Automation website
 
  @smoke
  Scenario: Valid login to Automation Practice site
    Given user launches the Automation Practise login page
    When user enters username "student" and password "Password123"
    And user clicks the login button
    Then user should be navigated to the dashboard


    
  @datadriven
  Scenario Outline: Login with multiple credentials
   Given user launches the Automation Practise login page
    When user enters username "<username>" and password "<password>" via examples
    And user clicks the login button
    Then user should be navigated to the dashboard

    Examples:
      | username | password      |
      | student  | Password123   |
   

  @configLogin
  Scenario: Login using credentials from config file
   Given user launches the Automation Practise login page
    When user enters config credentials
    And user clicks the login button
    Then user should be navigated to the dashboard