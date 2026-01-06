import { expect } from '@playwright/test';

export async function loginViaApi(request, username, password) {
  const response = await request.post(
    'https://fakestoreapi.com/auth/login',
    {
      data: {
        username,
        password
      }
    }
  );

  expect([200, 201]).toContain(response.status());

  const body = await response.json();
  expect(body.token).toBeTruthy();

  return body.token;
}
