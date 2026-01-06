import { test, expect } from '@playwright/test';
import { loginViaApi } from '../../utils/authApi';
import { injectToken } from '../../utils/browserAuth';
import { users } from '../../test-data/users';

test('@hybrid User can access app using API token without UI login', async ({ page, request }) => {
    // Step 1: Login via API
    const token = await loginViaApi(
        request,
        users.valid.username,
        users.valid.password
    );

    // Step 2: Inject token into browser
    await injectToken(page, token);

    // Step 3: Open App
    await page.goto('https://fakestoreapi.com');

    // Step 4: Simpe UI validation
    await expect(page).toHaveURL(/fakestoreapi/);
});