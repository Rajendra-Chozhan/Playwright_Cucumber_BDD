export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = 'input[id="username"]';
    this.passwordInput = 'input[id="password"]';
    this.loginBtn = 'button[id="submit"]';
    this.dashboardHeader = '//h1[normalize-space()="Logged In Successfully"]';
  }

  async launch() {
    await this.page.goto("https://practicetestautomation.com/practice-test-login/");
  }

  async login(username, password) {
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
  }

  async clickLogin() {
    await this.page.locator(this.loginBtn).click();
  }

  async verifyDashboard() {
    const header = this.page.locator(this.dashboardHeader);
    await header.waitFor();
    return header;
  }
}
