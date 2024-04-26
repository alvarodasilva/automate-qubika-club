import { expect } from "@playwright/test";
import { UserData } from "../data/UserData";

const params = require('../config/params.json')
const selectors = require('../selectors/login.json')


module.exports = {
    async goToQubikaClub(page) {
        await page.goto(params.urlQubikaClub + "/#/auth/login");
    },

    async validateLoginPage(page) {
        await page.waitForSelector(selectors.Login.loginButton)
        const btnIsPresent = await page.isVisible(selectors.Login.loginButton)

        expect(btnIsPresent).toBeTruthy();
    },

    async validateUrlLoginPage(page) {
        await page.goto(params.urlQubikaClub + "/#/auth/login");

        const urlCurrent = page.url();

        expect(urlCurrent.includes('login')).toBeTruthy();
    },

    async setUsername(page) {
        await page.fill(selectors.Login.inputUsername, UserData.email)
    },

    async setPassword(page) {
        await page.fill(selectors.Login.inputPassword, UserData.password)
    },

    async clickLogin(page) {
        await page.click(selectors.Login.loginButton)
    },



}
