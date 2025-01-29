import { expect, type Locator, type Page } from '@playwright/test';

export class ProceedDeletePage {
    readonly page: Page;
    readonly button : Locator

    constructor(page: Page) {
        this.page = page;
        this.button= page.locator('button', {hasText : 'Proceed'})
    }

    async proceedDelete(){
        await this.button.click()
    }


}