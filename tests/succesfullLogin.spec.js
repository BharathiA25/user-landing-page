import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name' }).fill('B');
  await page.getByRole('textbox', { name: 'Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name' }).fill('Bharathi');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('bharathiannadurai25@gmail.com');
  await page.getByRole('textbox', { name: 'Mobile No.' }).click();
  await page.getByRole('textbox', { name: 'Mobile No.' }).fill('9344540668');
  await page.getByRole('textbox', { name: 'Create Password' }).click();
  await page.getByRole('textbox', { name: 'Create Password' }).fill('123456');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('123456');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('SignUp succesfully').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('bharathiannadurai25@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.locator('form').getByRole('button', { name: 'Login' }).click();
  await page.getByText('Login Succesfull').click();
});