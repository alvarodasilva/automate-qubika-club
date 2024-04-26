import { expect } from "@playwright/test";
const params = require('../config/params.json')
const selectorsMain = require('../selectors/main.json')

module.exports = {


    async validateUserIsLogged(page) {
        await page.waitForSelector(selectorsMain.Main.btnSalir)
        const btnIsPresent = await page.isVisible(selectorsMain.Main.btnSalir)

        expect(btnIsPresent).toBeTruthy();
    },

    async goToCategorySection(page) {
        await page.click(selectorsMain.Menu.categoryOption)
    }
}