const { test, expect } = require('@playwright/test');

test.describe('Authentication and Authorization', () => {
  test('Sign in with existing credentials', async ({ page }) => {
      await page.goto('https://coding.pasv.us/user/login')

      await page.locator('#normal_login_email').fill('test1@example.com')
      await page.locator('#normal_login_password').fill('Qwerty1234')
      await page.locator('button[type="submit"]').click()

      await expect(page.locator('.ant-avatar-square')).toBeVisible()
  })
})