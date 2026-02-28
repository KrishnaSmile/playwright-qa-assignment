import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

interface BookingDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export class BookingPage extends BasePage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly reserveButton: Locator;
  readonly confirmationMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.firstNameInput = page.locator('#firstname');
    this.lastNameInput = page.locator('#lastname');
    this.emailInput = page.locator('#email');
    this.phoneInput = page.locator('#phone');
    this.reserveButton = page.locator('button:has-text("Reserve Now")');
    this.confirmationMessage = page.locator('.alert-success');
  }

  async fillBookingForm(details: BookingDetails) {
    await this.firstNameInput.fill(details.firstName);
    await this.lastNameInput.fill(details.lastName);
    await this.emailInput.fill(details.email);
    await this.phoneInput.fill(details.phone);
  }

  async confirmBooking() {
    await this.reserveButton.click();
  }

  async verifyBookingSuccess() {
    await expect(this.confirmationMessage).toBeVisible();
    await expect(this.confirmationMessage).toContainText('Booking Successful');
  }
}