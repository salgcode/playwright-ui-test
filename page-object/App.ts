import { Page } from '@playwright/test';
import { DashboardPage } from './DashboardPage';
import { LoginPage } from './LoginPage';

export class App {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    public get DashboardPage(): DashboardPage {
        return new DashboardPage(this.page);
    }

    public get LoginPage(): LoginPage {
        return new LoginPage(this.page);
    }
}