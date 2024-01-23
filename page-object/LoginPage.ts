import { Page } from '@playwright/test';
import environment from '../helpers/environment.helper';

export class LoginPage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async navigateToAmazon() {
        console.log("Navigate to Amazon website:" + environment.BASE_URL);
        await this.page.goto(environment.BASE_URL);
    }

    public async loginToAmazon(username: string, password: string) {
        await this.page.getByLabel('Email or mobile phone number').click();
        await this.page.getByLabel('Email or mobile phone number').fill(environment.USERNAME!);
        await this.page.getByLabel('Email or mobile phone number').press('Tab');
        await this.page.getByLabel('Continue').press('Enter');
        await this.page.getByLabel('Password').click();
        await this.page.getByLabel('Password').fill(environment.PASSWORD!);
        await this.page.getByRole('link', { name: 'Sign in', exact: true }).click();
    }

}