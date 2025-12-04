// Generated from: tests\features\Concepts.feature
import { test } from "playwright-bdd";

test.describe('Different Concepts Functionality of Automation website', () => {

  test('Verify static webtable in Automation Practice site', { tag: ['@smoke', '@staticwebtable'] }, async ({ Given, When, Then, page }) => { 
    await Given('user launches the Test Automation Practise login page', null, { page }); 
    await When('user scrolls to static webtable'); 
    await Then('user verify the appearance of static webtable'); 
    await Then('user get all the rows and columns of static webtable'); 
  });

  test('Verify dynamic webtable in Automation Practice site', { tag: ['@smoke', '@dynamicwebtable'] }, async ({ Given, When, Then, page }) => { 
    await Given('user launches the Test Automation Practise login page', null, { page }); 
    await When('user scrolls to dynamic webtable'); 
    await Then('user verify the appearance of dynamic webtable'); 
    await Then('user get all the rows and columns of dynamic webtable'); 
  });

  test('Verify drag and drop functionality in Automation Practice site', { tag: ['@smoke', '@draganddrop'] }, async ({ Given, When, page }) => { 
    await Given('user launches the Test Automation Practise login page', null, { page }); 
    await When('user scrolls to drag and drop', null, { page }); 
    await When('user performs drag and drop action', null, { page }); 
  });

  test.describe('Validate the Tabs functionality in Automation Practice site', () => {

    test('Example #1', { tag: ['@smoke', '@Tabs'] }, async ({ Given, When, Then, page }) => { 
      await Given('user launches the Test Automation Practise login page', null, { page }); 
      await When('user verify appearance of Tabs section', null, { page }); 
      await When('user searches for "Tamil Nadu"', null, { page }); 
      await Then('user selects search result "Tamil Nadu Premier League"', null, { page }); 
      await Then('user verifies new tab title contains "Tamil Nadu Premier League"'); 
    });

  });

  test('Validate the Popup functionality in Automation Practice site', { tag: ['@smoke', '@popupwindow'] }, async ({ Given, When, Then, page }) => { 
    await Given('user launches the Test Automation Practise login page', null, { page }); 
    await When('user verify appearance of Popup section', null, { page }); 
    await Then('user clicks on Popup section and moves to popup window', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\Concepts.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@smoke","@staticwebtable"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user launches the Test Automation Practise login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When user scrolls to static webtable","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then user verify the appearance of static webtable","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then user get all the rows and columns of static webtable","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":13,"tags":["@smoke","@dynamicwebtable"],"steps":[{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given user launches the Test Automation Practise login page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When user scrolls to dynamic webtable","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then user verify the appearance of dynamic webtable","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then user get all the rows and columns of dynamic webtable","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":21,"tags":["@smoke","@draganddrop"],"steps":[{"pwStepLine":21,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given user launches the Test Automation Practise login page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When user scrolls to drag and drop","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When user performs drag and drop action","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":40,"tags":["@smoke","@Tabs"],"steps":[{"pwStepLine":29,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given user launches the Test Automation Practise login page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When user verify appearance of Tabs section","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When user searches for \"Tamil Nadu\"","stepMatchArguments":[{"group":{"start":18,"value":"\"Tamil Nadu\"","children":[{"start":19,"value":"Tamil Nadu","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then user selects search result \"Tamil Nadu Premier League\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Tamil Nadu Premier League\"","children":[{"start":28,"value":"Tamil Nadu Premier League","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then user verifies new tab title contains \"Tamil Nadu Premier League\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Tamil Nadu Premier League\"","children":[{"start":38,"value":"Tamil Nadu Premier League","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":38,"pickleLine":47,"tags":["@smoke","@popupwindow"],"steps":[{"pwStepLine":39,"gherkinStepLine":48,"keywordType":"Context","textWithKeyword":"Given user launches the Test Automation Practise login page","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"When user verify appearance of Popup section","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then user clicks on Popup section and moves to popup window","stepMatchArguments":[]}]},
]; // bdd-data-end