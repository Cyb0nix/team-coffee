import { expect, type Locator, type Page } from '@playwright/test';

export class EditEmployeePageAddress {
    readonly page: Page;
    readonly addressFieldone: Locator;
    readonly addressFieldTwo: Locator;
    readonly city: Locator;
    readonly zipCode: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addressFieldone = this.page.locator('input[name="address_line1"]')
        this.addressFieldTwo = this.page.locator('input[name="address_line2"]')
        this.city = this.page.locator('input[name="city"]')
        this.zipCode = this.page.locator('input[name="zip_code"]')
    }

    async fillAddressOne(address : string){
        await this.addressFieldone.fill(address)
    }

    async fillAdressTwo(address : string){
        await this.addressFieldTwo.fill(address)
    }

    async fillCity(city : string){
        await this.city.fill(city)
    }

    async ZipCode(zipCode : number){
        await this.zipCode.fill(zipCode.toString())
    }
}