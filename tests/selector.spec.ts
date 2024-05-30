import {test, expect} from '@playwright/test'

test('Selectors demo', async ({page})=>{
    
    await page.goto('https://www.saucedemo.com/v1/')
    await page.click('id=user-name')
    await page.locator('id=user-name').fill("Edison")
    await page.locator('#login-button').click()
    await page.pause()
    await page.locator('input:has-text("LOGIN")').click()
});