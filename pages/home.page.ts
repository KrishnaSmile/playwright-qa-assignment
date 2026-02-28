import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
  readonly checkInInput: Locator;
  readonly checkOutInput: Locator;
  readonly bookNowButton: Locator;

  constructor(page: Page) {
    super(page);

    this.checkInInput = page.locator('#checkin');
    this.checkOutInput = page.locator('#checkout');
    this.bookNowButton = page.locator('button:has-text("Book Now")').first();
  }

  async goto() {
    await this.navigate('/');
  }

  async selectDates(checkIn: string, checkOut: string) {
    await this.checkInInput.fill(checkIn);
    await this.checkOutInput.fill(checkOut);
  }

  async clickBookNow() {
    await this.bookNowButton.click();
  }
}