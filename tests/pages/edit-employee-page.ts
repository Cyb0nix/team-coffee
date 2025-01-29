import { expect, type Locator, type Page } from '@playwright/test';

export class EditEmployeePage {
    readonly page: Page;
    readonly infoLink : Locator
    readonly addressLink : Locator
    readonly contactLink : Locator
    readonly promoteLink : Locator
    readonly addToTeamLink : Locator


    constructor(page: Page) {
        this.page = page;
        this.infoLink = page.locator('a' , {hasText : 'Update basic info'})
        this.addressLink = page.locator('a' , {hasText : 'Update address'})
        this.contactLink = page.locator('a' , {hasText : 'Update contact'})
        this.promoteLink = page.locator('a' , {hasText : 'Promote as manager'})
        this.addToTeamLink = page.locator('a', {hasText : 'Add to team'})
    }

    async clickInfoLink(){
        await this.infoLink.click()
    }

    async clickUpdateAddressLink(){
        await this.addressLink.click()
    }

    async clickUpdateContactLink(){
        await this.contactLink.click()
    }

    async clickPromoteLink(){
        await this.promoteLink.click()
    }

    async clickAddToTeamLink(){
        await this.promoteLink.click()
    }


}