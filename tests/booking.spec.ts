import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { BookingPage } from '../pages/booking.page';

test.describe('Room Booking - End to End', () => {
  test('User can successfully book a room', async ({ page }) => {
    const home = new HomePage(page);
    const booking = new BookingPage(page);

    await home.goto();

    await home.selectDates('2026-05-10', '2026-05-12');
    await home.clickBookNow();

    await booking.fillBookingForm({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@test.com',
      phone: '1234567890'
    });

    await booking.confirmBooking();
    await booking.verifyBookingSuccess();
  });
});