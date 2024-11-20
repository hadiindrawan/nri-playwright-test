import { test, expect } from '@playwright/test';
import { Home } from '../pages/home.page';
import { Product } from '../pages/product.page';


test.describe('Product scenarios', () => {
	let homepage: Home
	let productpage: Product
	const productName = 'jacket'

	test.beforeEach(async ({ page }) => {
		homepage = new Home(page)
        productpage = new Product(page)

		await homepage.gotoHome('/')
	})

	test('Verify that user able to sort by price', async ({ page }) => {
		await test.step(`User searching product with name ${productName}`, async () => {
			await homepage.searchProduct(productName)
			await homepage.isSearchResultShow(productName)

		})

		await test.step(`User selecting option sort by price for ${productName}`, async () => {
            await productpage.orderProductBy('price')
		})

        await test.step('Changing to descend sorted', async () => {
            await productpage.orderProductDirection('desc')
        })

        await test.step('Checking product price is display correctly', async () => {
            const el = productpage.priceElements

            const firstProductPrice = el.first()
		    await expect(firstProductPrice).toBeVisible()

            const firstPrice = await firstProductPrice.innerText()
            const secondProductPrice = el.nth(1)
            const secondPrice = await secondProductPrice.innerText()

            const numFirstPrice = parseInt(firstPrice.replace(/[^0-9.]/g, ''), 10)
            const numSecondPrice = parseInt(secondPrice.replace(/[^0-9.]/g, ''), 10)

            expect(numFirstPrice).toBeGreaterThan(numSecondPrice)
        })
	})
})
