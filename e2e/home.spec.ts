import { test, expect } from '@playwright/test';

test('Has page content', async ({ page }) => {
	await page.goto('/');

	const text = await page.$eval('[data-page-content]', (x) => x.textContent);
	expect(text).toStrictEqual('Hello Amigos!');
});
