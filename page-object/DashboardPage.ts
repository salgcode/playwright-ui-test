import { Page } from '@playwright/test';

export class DashboardPage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}