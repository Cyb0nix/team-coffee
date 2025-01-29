import { expect, type Locator, type Page } from '@playwright/test';

export class ResetDatabasePage {
    readonly page: Page;
    readonly  name: Locator;
    readonly  button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.button = page.locator('button:has-text("Proceed")');
    }

    async goto(){
        await this.page.goto('/reset_db');
    }

    async resetDatabase(){
        await this.goto()
        await this.button.click();
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.goto('/');
    }
}