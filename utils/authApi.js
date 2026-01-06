import { expect } from '@playwright/test';

export async function loginViaApi(request, email, password) {
    const response = await request.post(
        'https://api.realworld.io/api/users/login',
        {
            data: {
                user: {
                    email,
                    password
                }
            }
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.user.token).toBeTruthy();

    return body.user.token;
}