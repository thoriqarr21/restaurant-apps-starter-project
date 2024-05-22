/* eslint-disable no-undef */
const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Post resto review', async ({ I }) => {
  const reviewText = 'testing';

  I.seeElement('.resto__title a');

  const firstRestaurant = locate('.resto__title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('.form-review');
  I.fillField('inputName', 'test review');
  I.fillField('inputReview', reviewText);
  I.click('#submit-review');

  const lastReviewText = await I.grabTextFrom('.resto__title');
  assert.strictEqual(firstRestaurantName, lastReviewText);
});
