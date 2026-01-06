import { test, expect } from '@playwright/test';
import { loginViaApi } from '../../utils/authApi.js';
import { users } from '../../test-data/users.js';

test('@api User can login via API and receive token', async ({ request }) => {
  const token = await loginViaApi(
    request,
    users.valid.username,
    users.valid.password
  );

  expect(token).toBeTruthy();
});
