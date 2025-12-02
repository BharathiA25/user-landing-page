import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.locator('form').getByRole('button', { name: 'Login' }).click();
  await page.getByText('Password is required').click();
  await page.getByText('Email is required').click();
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Mobile No.' }).click();
  await page.getByRole('textbox', { name: 'Create Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByText('Name is required').click();
  await page.getByText('Email is required').click();
  await page.getByText('Phone number is required').click();
  await page.getByText('Password is required', { exact: true }).click();
  await page.getByText('Confirm Password is required').click();
  await page.getByRole('button', { name: 'Submit' }).click();
});