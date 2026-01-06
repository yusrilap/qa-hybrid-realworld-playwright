import { expect } from '@playwright/test'

export async function getProducts(request) {
    const response = await request.get('https://fakestoreapi.com/products');

    expect(response.status()).toBe(200);

    const products = await response.json();
    expect(products.length).toBeGreaterThan(0);

    return products;
}