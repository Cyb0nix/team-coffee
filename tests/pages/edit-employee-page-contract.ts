import { expect, type Locator, type Page } from '@playwright/test';

export class UpdateContractPage {
    readonly page: Page;
    readonly title: Locator;
    readonly button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('input[name="Job title"]');
        this.button = page.locator('button:has-text("Update")');
    }

    async goto() {
        await this.page.goto('/contract');
    }

    async updateContractPage(newTitle: string) {
        await this.goto();
        await this.title.fill(newTitle);
        await this.button.click();
        await this.page.waitForLoadState();
        await this.page.goto('/');
    }
}