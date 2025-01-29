import { expect, type Locator, type Page } from '@playwright/test';

export class UpdateContractPage {
    readonly page: Page;
    readonly button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.button = page.locator('button:has-text("Proceed")');
    }

    async goto() {
        await this.page.goto('/promote');
    }

    async updateContractPage(newTitle: string) {
        await this.goto();
        await this.button.click();
        await this.page.waitForLoadState();
        await this.page.goto('/');
    }
}