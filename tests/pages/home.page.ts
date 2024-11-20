import { expect, Locator, Page } from "@playwright/test"

export class Home {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly productItemLink: Locator;

    constructor(page: Page) {
        this.page = page;
		this.searchInput = page.locator('input[placeholder="Search entire store here..."]');
        this.productItemLink = page.locator('a[class="product-item-link"]')
    }

    async gotoHome(url: string) {
        await this.page.goto(url);
    }

    async searchProduct(productName: string) {
		await expect(this.searchInput).toBeVisible()
        
        await this.searchInput.click()
        await this.searchInput.fill(productName);
        await this.searchInput.press("Enter");
    }

    async isSearchResultShow(productName: string) {
        await this.page.waitForURL(`/catalogsearch/result/?q=${productName}`)
        const firstResult = this.productItemLink.first()
		await expect(firstResult).toBeVisible()

        const resultName = await firstResult.innerText()
        const lowerResultName = resultName.toLowerCase()

        expect(lowerResultName).toContain(productName)
    }
}
