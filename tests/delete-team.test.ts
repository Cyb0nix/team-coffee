import {test, chromium, Page, expect} from '@playwright/test';
import {ResetDatabasePage} from "./pages/reset-database-page";


async function resetDatabase(page: Page) {
    await page.goto('/reset_db');
    const proceedButton = page.locator("button:has-text('proceed')");
    await proceedButton.click()
    await page.close()
}

async function createTeam(page: Page, teamName: string) {
    await page.goto('/add_team');
    const nameInput = page.locator('input[name="name"]');
    await nameInput.fill(teamName);
    await page.click("text='Add'");
}

async function addUser(page: Page){
    await page.goto('/');
    await page.getByRole('link', { name: 'Add new employee' }).click();
    await page.getByPlaceholder('Name').click();
    await page.getByPlaceholder('Name').fill('Test');
    await page.getByPlaceholder('Name').press('Tab');
    await page.getByPlaceholder('Email').fill('test@gmail.com');
    await page.getByPlaceholder('Email').press('Tab');
    await page.locator('#id_address_line1').fill('Test');
    await page.locator('#id_address_line1').press('Tab');
    await page.locator('#id_address_line2').press('Tab');
    await page.getByPlaceholder('City').fill('Test');
    await page.getByPlaceholder('Zip code').click();
    await page.getByPlaceholder('Zip code').fill('63528');
    await page.getByPlaceholder('Hiring date').fill('2001-05-26');
    await page.getByPlaceholder('Job title').click();
    await page.getByPlaceholder('Job title').fill('Manager');
    await page.getByRole('button', { name: 'Add' }).click();
    await expect(page.getByRole('cell', { name: 'test@gmail.com' }).first()).toBeVisible();
    await expect(page.locator('tbody')).toContainText('test@gmail.com');
    await expect(page.locator('tbody')).toContainText('test');
    await expect(page.locator('tbody')).toContainText('no');
}

async function addUserToTeam(page: Page, teamName: string){
    await page.goto('/');
    await page.getByRole('link', { name: 'List employees' }).click();
    await page.getByRole('link', { name: 'Edit' }).click();
    await page.getByRole('link', { name: 'Add to team' }).click();
    await page.getByLabel('Team').click();
    await page.getByLabel('Team').selectOption(teamName + " team");
    await page.getByRole('button', { name: 'Add' }).click();
}

test.beforeEach(async ({ page }) => {
    await resetDatabase(page);
});

test('deleteTeam', async () => {
    const browser = await chromium.launch( {headless: false} )
    const page = await browser.newPage()
    const resetDatabasePage = new ResetDatabasePage(page)
    await resetDatabasePage.goto()
    await resetDatabasePage.resetDatabase()


    await addUser(page);
    await createTeam(page, 'team1')
    await addUserToTeam(page, 'team1')

    await page.goto('/');
    await page.getByRole('link', { name: 'List teams' }).click();

    await page.getByRole('link', { name: 'Delete' }).click();

    const proceedButton = page.locator("button:has-text('proceed')");
    await proceedButton.click();
        
    await expect(page.locator('text=team1')).not.toBeVisible();

    await page.goto('/employees')
    await expect(page.locator('text=No employees yet.')).not.toBeVisible();
    await page.close()
});


