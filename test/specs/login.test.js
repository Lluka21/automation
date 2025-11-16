const LoginPage = require("../pageobjects/login.page");
const creds = require("../testdata/credentials");

describe("SauceDemo Login Tests", () => {
  beforeEach(async () => {
    await LoginPage.open();
  });


  it("UC-1: should show error for empty credentials", async () => {
    await LoginPage.username.setValue("anyuser");
    await LoginPage.password.setValue("anypass");
    await LoginPage.clearInputs();
    await LoginPage.loginButton.click();
    await expect(LoginPage.errorMessage).toHaveText("Username is required");
    console.log("UC-1 passed");
  });

  it("UC-2: should show error for missing password", async () => {
    await LoginPage.username.setValue("standard_user");
    await LoginPage.password.setValue("somepass");
    await LoginPage.password.clearValue();
    await LoginPage.loginButton.click();
    await expect(LoginPage.errorMessage).toHaveText("Password is required");
    console.log("UC-2 passed");
  });


  creds.validUsers.forEach((user) => {
    it(`UC-3: should login successfully for ${user.username}`, async () => {
      await LoginPage.login(user.username, user.password);
      await expect(LoginPage.title).toHaveText("Swag Labs");
      console.log(`UC-3 passed for ${user.username}`);
    });
  });
});
