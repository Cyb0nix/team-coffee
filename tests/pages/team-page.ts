import {type Page} from 'playwright';
import {expect, Locator} from "@playwright/test";

export class teamPage {
    readonly page: Page;
    readonly name: Locator;
    readonly teamName: Locator;
    readonly teamTable: Locator;


    constructor(page: Page) {
        this.page = page;
        this.teamName = page.locator('tbody');
        this.teamTable  =   page.locator('tbody')
    }

    async goto(){
        await this.page.goto('/teams');
    }

    async viewMembers(teamName: string){
        const row = this.teamTable.locator('tr', { hasText: teamName });
        await expect(row).toBeVisible();

        const listButton = row.getByRole('link', { name: 'View members' });
        await listButton.click();
    }

    async pressDeleteButton(teamName: string){
        const row = this.teamTable.locator('tr', { hasText: teamName });
        await expect(row).toBeVisible();

        const deleteButton = row.getByRole('link', { name: 'Delete' });
        await deleteButton.click();
    }
    
    async checkTeamNameExist(teamName: string){
        await expect (this.teamName).toContainText(teamName)
    }


}