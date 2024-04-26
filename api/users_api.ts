import axios from 'axios';
import defineConfig from '../playwright.config'
import { User } from '../models/CreateUserModel';

interface user_api {
    createUser(request: User): Promise<any>;

}

export const UserAPI: user_api = {

    async createUser(request_data: User): Promise<any> {
        const url = `https://api.club-administration.qa.qubika.com/api/auth/register`
        const response = await fetch(url, {
            body: JSON.stringify(request_data),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        return response.json();
    }
};