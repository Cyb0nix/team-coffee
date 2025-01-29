import { expect, type Locator, type Page } from '@playwright/test';

export class CreateTeamPage {
    readonly page: Page;
    readonly name : Locator;
    readonly button : Locator

    constructor(page: Page) {
        this.page = page;
        this.name = page.locator('input[name="name"]');
        this.button= page.locator('button', {hasText : 'Add'})
    }

    async goto() {
        await this.page.goto('/add_team');
    }

    async createTeam(name :string){
        this.goto()
        await this.name.fill(name)
        await this.button.click()
    }


}