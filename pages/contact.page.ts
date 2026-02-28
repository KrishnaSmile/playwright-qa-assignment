import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

interface ContactDetails {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export class ContactPage extends BasePage {
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly subjectInput: Locator;
  readonly messageInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
    this.phoneInput = page.locator('#phone');
    this.subjectInput = page.locator('#subject');
    this.messageInput = page.locator('#description');
    this.submitButton = page.locator('button:has-text("Submit")');
    this.errorMessage = page.locator('.alert-danger');
  }

  async goto() {
    await this.navigate('/');
  }

  async submitForm(details: ContactDetails) {
    await this.nameInput.fill(details.name);
    await this.emailInput.fill(details.email);
    await this.phoneInput.fill(details.phone);
    await this.subjectInput.fill(details.subject);
    await this.messageInput.fill(details.message);

    await this.submitButton.click();
  }
}