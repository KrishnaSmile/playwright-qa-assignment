import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/contact.page';

test.describe('Contact Form Validation', () => {
  test('Should show validation error for invalid submission', async ({ page }) => {
    const contact = new ContactPage(page);

    await contact.goto();

    await contact.submitForm({
      name: '',
      email: 'invalid-email',
      phone: '',
      subject: '',
      message: ''
    });

    await expect(contact.errorMessage).toBeVisible();
  });
});