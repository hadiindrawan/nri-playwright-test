import { test, expect } from '@playwright/test';
import { Home } from '../pages/home.page';


test.describe('Homepage scenarios', () => {
	let homepage: Home
	const productName = 'jacket'

	test.beforeEach(async ({ page }) => {
		homepage = new Home(page)
		await homepage.gotoHome('/')
	})

	test('Verify that user able to search product by name', async ({ page }) => {
		await test.step(`User searching product with name ${productName}`, async () => {
			await homepage.searchProduct(productName)
		})

		await test.step(`Checking that system already display the result of ${productName}`, async () => {
			await homepage.isSearchResultShow(productName)
		})
	})
})
