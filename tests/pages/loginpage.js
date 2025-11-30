// tests/pages/loginpage.js
import CommonUtils from '../../utils/CommonUtils.js';

export class LoginPage {
  constructor(page) {
    this.page = page;

    // Prefer keeping locators, not just strings
    this.staticWebHeading = page.getByRole('heading', { name: 'Static Web Table' });
    this.dynamicWebHeading = page.getByRole('heading', { name: 'Dynamic Web Table' });
    this.staticWebTable   = page.locator('//table[@name="BookTable"]');
      this.dynamicWebTable   = page.locator('//table[@id="taskTable"]');

    this.usernameInput   = page.locator('input[id="username"]');
    this.passwordInput   = page.locator('input[id="password"]');
    this.loginBtn        = page.locator('button[id="submit"]');
    this.dashboardHeader = page.locator('//h1[normalize-space()="Logged In Successfully"]');
  }

  async launch() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async launch_test_automation_site() {
    await this.page.goto('https://testautomationpractice.blogspot.com/');
  }

  async scroll_to_static_table() {
    // use this.page and a Locator
    await CommonUtils.scrollToElement(this.page, this.staticWebHeading);
  }

  async verify_static_table() {
    await this.staticWebTable.waitFor();
    return this.staticWebTable;
  }


    async scroll_to_dynamic_table() {
    // use this.page and a Locator
    await CommonUtils.scrollToElement(this.page, this.dynamicWebHeading);
  }

  async verify_dynamic_table() {
    await this.dynamicWebTable.waitFor();
    return this.dynamicWebTable;
  }

async get_static_table_data() {
  // All rows (header + data)
  const allRows = this.staticWebTable.locator('tr');
  const totalRows = await allRows.count(); // header + data rows
  console.log('Total Rows (including header):', totalRows);

  // Header row and columns
  const headerRow = allRows.first();
  const headerCells = headerRow.locator('th');
  const colCount = await headerCells.count();
  console.log('Total Columns:', colCount);

  // Print header row
  const headerTexts = [];
  for (let c = 0; c < colCount; c++) {
    headerTexts.push(await headerCells.nth(c).innerText());
  }
  console.log('Header:', headerTexts.join(' | '));

  // Data rows start from index 1 (since 0 is header)
  const dataRowCount = totalRows - 1;
  console.log('Data Rows:', dataRowCount);

  // 🔹 Print each row’s data
  for (let r = 1; r < totalRows; r++) {
    const row = allRows.nth(r);
    const cells = row.locator('td');

    const rowData = [];
    for (let c = 0; c < colCount; c++) {
      const text = await cells.nth(c).innerText();
      rowData.push(text);
      console.log(`Row ${r} Col ${c + 1} (${headerTexts[c]}): ${text}`);
    }
    console.log(`Row ${r} Data: ${rowData.join(' | ')}`);
  }

  // 🔹 Print each column’s values (by column)
  for (let c = 0; c < colCount; c++) {
    const colValues = [];
    for (let r = 1; r < totalRows; r++) {
      const cellText = await allRows
        .nth(r)
        .locator('td')
        .nth(c)
        .innerText();
      colValues.push(cellText);
    }
    console.log(
      `Column ${c + 1} (${headerTexts[c]}): ${colValues.join(' | ')}`
    );
  }
}


  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginBtn.click();
  }

  async verifyDashboard() {
    await this.dashboardHeader.waitFor();
    return this.dashboardHeader;
  }
async get_dynamic_table_data() {


  const table = this.dynamicWebTable;
  const allRows = table.locator('tr');
  const totalRows = await allRows.count();
  console.log('Total Rows (including header):', totalRows);

  // Get headers from 1st row <th> cells
  const headerRow = allRows.first();
  const headers = headerRow.locator('th');
  const colCount = await headers.count();
  console.log('Total Columns:', colCount);

  const headerTexts = [];
  for (let c = 0; c < colCount; c++) {
    headerTexts.push(await headers.nth(c).innerText());
  }
  console.log('Headers:', headerTexts.join(' | '));

  // Print each row data
  for (let r = 1; r < totalRows; r++) {
    const row = allRows.nth(r);
    const cells = row.locator('td');

    const rowData = [];
    for (let c = 0; c < colCount; c++) {
      rowData.push(await cells.nth(c).innerText());
    }
    console.log(`Row ${r}:`, rowData.join(' | '));
  }

  // Print each column data separately
  for (let c = 0; c < colCount; c++) {
    const colValues = [];
    for (let r = 1; r < totalRows; r++) {
      colValues.push(await allRows.nth(r).locator('td').nth(c).innerText());
    }
    console.log(`Column ${c+1} (${headerTexts[c]}):`, colValues.join(' | '));
  }
}


async getHighestAndLowest() {
  const table = this.dynamicWebTable;
  const rows = table.locator('tr');
  const rowCount = await rows.count();
  if (rowCount < 2) throw new Error('No data rows found');

  // Get headers from first row
  const headers = await rows.first().locator('th').allTextContents();
  const colCount = headers.length;

  let highest = {};
  let lowest = {};

  // Initialize storage
  for (let c = 1; c < colCount; c++) {
    highest[headers[c]] = { name: '', value: -Infinity };
    lowest[headers[c]] = { name: '', value: Infinity };
  }

  // Iterate data rows
  for (let r = 1; r < rowCount; r++) {
    const row = rows.nth(r);
    const name = await row.locator('td').first().innerText();
    const cells = row.locator('td');

    for (let c = 1; c < colCount; c++) {
      const text = await cells.nth(c).innerText();
      const num = parseFloat(text.replace(/[^\d.]/g, ''));

      // Highest check
      if (num > highest[headers[c]].value) {
        highest[headers[c]] = { name, value: num };
      }

      // Lowest check
      if (num < lowest[headers[c]].value) {
        lowest[headers[c]] = { name, value: num };
      }
    }
  }

  // Print results
  for (let c = 1; c < colCount; c++) {
    console.log(`Highest ${headers[c]}: ${highest[headers[c]].name} (${highest[headers[c]].value})`);
    console.log(`Lowest ${headers[c]}: ${lowest[headers[c]].name} (${lowest[headers[c]].value})`);
    console.log('---');
  }
}


}
