const { test } = require('@playwright/test');
const Login = require('../pages/LoginPage')
const Main = require('../pages/MainPage')
const Category = require('../pages/CategoryPage')

test.beforeEach(async ({ page }) => {
    await Login.goToQubikaClub(page);

});

test.describe('Login Test into Qubika Club', () => {

    test('Validates login page', async ({ page }) => {
        Login.validateLoginPage(page);
        Login.validateUrlLoginPage(page)
    });

    test('Test Login', async ({ page }) => {
        await Login.setUsername(page)
        await Login.setPassword(page)
        await Login.clickLogin(page)

        await Main.validateUserIsLogged(page)
    });
});

test.describe('Creating new Category', () => {

    test('Validates login page', async ({ page }) => {
        Login.validateLoginPage(page);
        Login.validateUrlLoginPage(page)
    });

    test('Creating a category', async ({ page }) => {
        await Login.setUsername(page)
        await Login.setPassword(page)
        await Login.clickLogin(page)

        await Main.validateUserIsLogged(page)

        await Main.goToCategorySection(page)

        await Category.validateUrlCategoryPage(page)

        await Category.addNewCategory(page)

    });

})

test.describe('Creating new SubCategory', () => {

    test('Validates login page', async ({ page }) => {
        Login.validateLoginPage(page);
        Login.validateUrlLoginPage(page)
    });

    test('Creating a category', async ({ page }) => {
        await Login.setUsername(page)
        await Login.setPassword(page)
        await Login.clickLogin(page)

        await Main.validateUserIsLogged(page)

        await Main.goToCategorySection(page)

        await Category.validateUrlCategoryPage(page)

        await Category.addNewSubCategory(page)

    });

})
