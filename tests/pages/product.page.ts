import { expect, Locator, Page } from "@playwright/test"

type sortBy = 
    |   'name'
    |   'price'
    |   'relevance'

type sortDirection = 
    |   'asc'
    |   'desc'

export class Product {
    readonly page: Page;
    readonly orderDropdown: Locator;
    readonly orderDirection: Locator;
    readonly priceElements: Locator;

    constructor(page: Page) {
        this.page = page;
		this.orderDropdown = page.locator('select[id="sorter"]').first()
		this.orderDirection = page.locator('a[data-role="direction-switcher"]').first()
		this.priceElements = page.locator('span[data-price-type="finalPrice"]')
    }

    async gotoHome(url: string) {
        await this.page.goto(url);
    }

    async orderProductBy(sortBy: sortBy) {
        await this.orderDropdown.selectOption(sortBy)
    }

    async orderProductDirection(direction: sortDirection) {
		await expect(this.orderDirection).toBeVisible()

        const currentDirection = await this.orderDirection.innerText()
        const lowerDirectionCase = currentDirection.toLowerCase()
        
        if (lowerDirectionCase.includes(direction)) {
            await this.orderDirection.click()
        }
    }
}
