import {test, expect, chromium} from '@playwright/test'

test('SlowMo and video recording demo', async ()=> {
  const browser = await chromium.launch({
    slowMo: 50,
    headless: false
  });
  const context = await browser.newContext({
    recordVideo: {
        dir: 'desktop',
        size: {width: 1800, height: 600}
    }
  });
  const page = await context.newPage();
  
  await page.goto('https://www.google.com')
  await page.locator('id=APjFqb').click()
  await page.locator('id=APjFqb').fill('playwright')

  await context.close();
})