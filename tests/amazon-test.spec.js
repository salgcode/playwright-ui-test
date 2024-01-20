const { test, expect } = require('@playwright/test');

test.describe('Amazon UI Testing with Playwright', () =>{

test('Amazon Login test', async ({ page }) =>{
  await page.goto('https://www.amazon.com.au/');
  await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  await page.getByLabel('Email or mobile phone number').click();
  await page.getByLabel('Email or mobile phone number').fill('kirk.ashik@gmail.com');
  await page.getByLabel('Email or mobile phone number').press('Tab');
  await page.getByLabel('Continue').press('Enter');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('9847037303Thn$');
  await page.getByLabel('Sign-In').click();
  await expect(page.getByRole('link', { name: 'Hello, Ashik Account & Lists' })).toBeVisible();

//search Mosquito Zapper in amazon and add to chart
  await page.getByPlaceholder('Search Amazon.com.au').fill('mosquito zapper');
  await page.getByPlaceholder('Search Amazon.com.au').press('Enter');
  await page.getByRole('link', { name: 'Shop the QUASH Store on Amazon', exact: true }).click();
  await page.getByRole('link', { name: 'See all details' }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
//  await page.getByRole('button', {name: 'Proceed to Checkout'}).click();
  await page.getByTestId('proceed-to-checkout-action').click();
})
})


