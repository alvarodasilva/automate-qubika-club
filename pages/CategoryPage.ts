import { expect } from "@playwright/test"


const selectors = require('../selectors/category.json')

module.exports = {

    async validateUrlCategoryPage(page) {
        const urlCurrent = page.url();
        expect(urlCurrent.includes('category-type')).toBeTruthy();
    },

    async clickAdicionarBtn(page) {
        await page.click(selectors.Category.adicionarBtn)
    },

    async setCategoryName(page) {
        await page.fill(selectors.Category.inputCategoryName, 'CatTest 3')
    },

    async ckeckSubCategory(page) {
        await page.click(selectors.Category.ïsSubCategory)
    },

    async setSubCategory(page) {
        await page.fill(selectors.Category.clickCombo, 'Futbol')
        await page.press('body', 'Enter')

        await page.press('body', 'Tab')

        await page.press('body', 'Tab')

        await page.press('body', 'Enter')

    },

    async clickAceptar(page) {
        await page.click(selectors.Category.btnAceptar)
    },


    async addNewCategory(page) {
        this.clickAdicionarBtn(page)
        this.setCategoryName(page)
        this.clickAceptar(page)
    },

    async addNewSubCategory(page) {
        this.clickAdicionarBtn(page)
        this.setCategoryName(page)
        this.ckeckSubCategory(page)
        this.setSubCategory(page)
    },

}