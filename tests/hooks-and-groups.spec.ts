import {test, expect} from '@playwright/test'
test('login', async({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await page.pause()
    
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.close();
})
// .skip() .fixme() .slow() .only() are annotations available with playwright