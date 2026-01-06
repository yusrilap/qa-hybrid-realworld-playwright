import { test, expect } from '@playwright/test';
import { loginViaApi } from '../../utils/authApi';
import { users } from '../../test-data/users';

test('@api User can login via API and receive token', async ({ request }) => {
   const token = await loginViaApi(
    request,
    users.valid.email,
    users.valid,password
   );

   expect(token).toBeTruthy();
});