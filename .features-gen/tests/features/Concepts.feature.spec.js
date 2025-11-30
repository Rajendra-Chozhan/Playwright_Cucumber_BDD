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
]; // bdd-data-end