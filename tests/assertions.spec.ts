import {test, expect} from '@playwright/test'

test('assertions demo', async ({page}) => {
    await page.goto('https://kitchen.applitools.com/')
    await page.pause()
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)
    if(await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click()
    }
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
    
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/)
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)
    
})