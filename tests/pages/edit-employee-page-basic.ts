import { expect, type Locator, type Page } from '@playwright/test';

export class UpdateBasicInformationPage {
    readonly page: Page;
    readonly name: Locator;
    readonly email: Locator;
    readonly button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.name = page.locator('input[name="name"]');
        this.email = page.locator('input[name="email"]');
        this.button = page.locator('button:has-text("Update")');
    }

    async goto() {
        await this.page.goto('/basic_info');
    }

    async updateBasicInformation(newName: string, newEmail: string) {
        await this.goto();
        await this.name.fill(newName);
        await this.email.fill(newEmail);
        await this.button.click();
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.goto('/');
    }
}