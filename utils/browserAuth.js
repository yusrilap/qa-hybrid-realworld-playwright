export async function injectToken(page, token) {
    await page.addInitScript((tokenValue) => {
        window.localStorage.setItem('token', tokenvalue);
    }, token);
}