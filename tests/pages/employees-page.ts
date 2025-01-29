import { type Page } from 'playwright';
import { expect, Locator } from '@playwright/test';

export class EmployeesPage {
    readonly page: Page;
    readonly employeesTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.employeesTable = page.locator('tbody');
    }

    async goto() {
        await this.page.goto('/employees');
    }

    async assertEmployee(name: string, email: string, manager: string) {
        const row = this.employeesTable.locator('tr', { hasText: name });
        await expect(row.locator('td')).toContainText(name)
        await expect(row.locator('td')).toContainText(email);
        await expect(row.locator('td')).toContainText(manager);
    }

    async deleteEmployee(userName: string) {
        const row = this.employeesTable.locator('tr', { hasText: userName });
        await expect(row).toBeVisible();

        const deleteButton = row.getByRole('link', { name: 'Delete' });
        await deleteButton.click();

    }

    async editEmployee(userName: string){
        const row = this.employeesTable.locator('tr', { hasText: userName });
        await expect(row).toBeVisible();

        const editButton = row.getByRole('link', {name: 'Delete'});
        await editButton.click();
    }
}
