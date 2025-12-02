Feature: Different Concepts Functionality of Automation website
 
  @smoke @staticwebtable
  Scenario: Verify static webtable in Automation Practice site
    Given user launches the Test Automation Practise login page
    When user scrolls to static webtable
    Then user verify the appearance of static webtable
    Then user get all the rows and columns of static webtable
   


     @smoke @dynamicwebtable
  Scenario: Verify dynamic webtable in Automation Practice site
    Given user launches the Test Automation Practise login page
    When user scrolls to dynamic webtable
    Then user verify the appearance of dynamic webtable
    Then user get all the rows and columns of dynamic webtable


  @smoke @draganddrop
  Scenario: Verify drag and drop functionality in Automation Practice site
    Given user launches the Test Automation Practise login page
    When user scrolls to drag and drop
    When user performs drag and drop action
   
   
   