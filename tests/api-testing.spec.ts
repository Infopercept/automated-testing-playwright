import {test, expect} from '@playwright/test'

test('api get req', async ({request}) => {

    const response = await request.get('https://reqres.in/api/users/2')
    expect(response.status()).toBe(200)
    const text = await response.text()
    expect(text).toContain('Janet')
    console.log(response)
})