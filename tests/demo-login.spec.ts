import {test, expect} from '@playwright/test'

test('Demo login test', async({page})=>{
    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.locator('[placeholder="Enter your username"]').fill('Raghav');
    await page.locator('[placeholder="Enter your password"]').fill('1234');
    await page.waitForSelector('text=Sign in', {timeout: 5000})
    await page.locator('text=Sign in').click()
})