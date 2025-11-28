// Generated from: tests\features\OrangeHRM_login.feature
import { test } from "playwright-bdd";

test.describe('Login Functionality of Automation website', () => {

  test('Valid login to Automation Practice site', { tag: ['@smoke'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('user launches the OrangeHRM login page', null, { page }); 
    await When('user enters username "student" and password "Password123"'); 
    await And('user clicks the login button'); 
    await Then('user should be navigated to the dashboard'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\OrangeHRM_login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user launches the OrangeHRM login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When user enters username \"student\" and password \"Password123\"","stepMatchArguments":[{"group":{"start":21,"value":"\"student\"","children":[{"start":22,"value":"student","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":44,"value":"\"Password123\"","children":[{"start":45,"value":"Password123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And user clicks the login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then user should be navigated to the dashboard","stepMatchArguments":[]}]},
]; // bdd-data-end