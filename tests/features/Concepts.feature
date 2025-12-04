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



    
  @smoke @Tabs
  Scenario: Validate the Tabs functionality in Automation Practice site
    Given user launches the Test Automation Practise login page
    When user verify appearance of Tabs section
    When user searches for "<searchTerm>"
   Then user selects search result "<resultKeyword>"
     Then user verifies new tab title contains "<resultKeyword>"
      
   
   Examples:
  | searchTerm          | resultKeyword                      |
  | Tamil Nadu          | Tamil Nadu Premier League          |



  
    
  @smoke @popupwindow
  Scenario: Validate the Popup functionality in Automation Practice site
    Given user launches the Test Automation Practise login page
    When user verify appearance of Popup section
    Then user clicks on Popup section and moves to popup window

  