import {test, expect, chromium} from '@playwright/test';

test('test', async () => {
    const browser = await chromium.launch()
    const page = await browser.newPage()
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
});


