class LoginPage {

  get username() {
    return $('//input[@id="user-name"]');
  }
  get password() {
    return $('//input[@id="password"]');
  }
  get loginButton() {
    return $('//input[@id="login-button"]');
  }
  get errorMessage() {
    return $('//h3[@data-test="error"]');
  }
  get title() {
    return $('//span[@class="title"]');
  }

  
  async open() {
    await browser.url("https://www.saucedemo.com/");
  }

  async login(user, pass) {
    await this.username.setValue(user);
    await this.password.setValue(pass);
    await this.loginButton.click();
  }

  async clearInputs() {
    await this.username.clearValue();
    await this.password.clearValue();
  }
}

module.exports = new LoginPage();
