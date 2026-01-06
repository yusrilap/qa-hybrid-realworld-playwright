import { test, expect } from '@playwright/test';
import { getProducts } from '../../utils/productApi';

test('@hybrid User can see products fetched from API on UI', async ({ page, request}) => {
    // Step 1: Get products from API
    const products = await getProducts(request);
    const firstProduct = products[0];

    // Step 2: Open UI
    await page.goto('https://fakestoreapi.com');

    // Step 3: Validate product title appears on UI page
    await expect(page.locator('body')).toContainText(firstProduct.title);
});