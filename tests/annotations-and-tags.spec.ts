import { test} from '@playwright/test'

test('Test One @normal', async ({page})=>{
    await page.goto("https://youtube.com")
})

test('not yet ready @slower', async ({page})=>{
    test.slow()
    await page.goto("https://youtube.com")
})
