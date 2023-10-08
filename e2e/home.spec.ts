import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
	await page.goto('/');

	const text = await page.$eval('[data-page-content]', (x) => x.textContent);
	expect(text).toStrictEqual('Hello Amigos!');
});
