import { expect } from "@playwright/test";
import { UserAPI } from "../api/users_api";
import { UserData } from "../data/UserData";

const { test } = require('@playwright/test');

test('Creating new user usign API ', async ({ request }) => {
    const response = await UserAPI.createUser(UserData)

    const datosUser = response
    console.log('Datos del usuario', datosUser)
});