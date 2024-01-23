import { test, Page } from "@playwright/test";
import { App } from "../page-object/App";
import environment from "../helpers/environment.helper";

test.describe("Amazon Login Test in Typescript", () => {

    test('Login to Amazon and click sign in button', async ({ page }) => {

        const app = new App(page);
        await app.LoginPage.navigateToAmazon();
        console.log("Username to Login is:" + environment.USERNAME);
        console.log("Password to Login is:" + environment.PASSWORD);
        await app.LoginPage.loginToAmazon(environment.USERNAME, environment.PASSWORD);
    })
})