import { expect, type Locator, type Page } from '@playwright/test';

export class AddEmployeePage {
    readonly page: Page;

    private nameInput: Locator;
    private emailInput: Locator;
    private addressLine1Input: Locator;
    private addressLine2Input: Locator;
    private cityInput: Locator;
    private zipCodeInput: Locator;
    private contractDateInput: Locator;
    private jobTitleInput: Locator;
    private addEmployeeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.locator('input[name=name]');
        this.emailInput = page.locator('input[name=email]');
        this.addressLine1Input = page.locator('#id_address_line1');
        this.addressLine2Input = page.locator('#id_address_line2');
        this.cityInput = page.locator('input[name=city]');
        this.zipCodeInput = page.locator('input[name=zip_code]');
        this.contractDateInput = page.locator('input[name=hiring_date]');
        this.jobTitleInput = page.locator('input[name=job_title]');
        this.addEmployeeButton = page.locator('button:has-text("Add")');
    }

    async goto() {
        await this.page.goto('https://c.se2.hr.dmerej.info/add_employee');
    }

    async createEmployee(name: string, email: string, addressLine1: string, addressLine2: string, city: string, zipCode: string, hiringDate: string, jobTitle: string) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.addressLine1Input.fill(addressLine1);
        await this.addressLine2Input.fill(addressLine2);
        await this.cityInput.fill(city);
        await this.zipCodeInput.fill(zipCode);
        await this.contractDateInput.fill(hiringDate);
        await this.jobTitleInput.fill(jobTitle);
        await this.addEmployeeButton.click();
    }
}