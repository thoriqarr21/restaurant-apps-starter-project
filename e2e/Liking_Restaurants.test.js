/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');

  I.see('Tidak ada resto untuk ditampilkan', '.restaurant__not__found');
});
Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant__not__found');
  I.amOnPage('/');

  I.seeElement('.resto__title a');
  const firstRestaurant = locate('.resto__title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');

  const likedRestaurantName = await I.grabTextFrom('.resto__title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant__not__found');
  I.amOnPage('/');

  I.seeElement('.resto__title a');
  const firstRestaurant = locate('.resto__title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');

  const likedRestaurantName = await I.grabTextFrom('.resto__title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
Scenario('liking not restaurant', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant__not__found');
  I.amOnPage('/');
  I.seeElement('.resto__title a');
  const firstRestaurant = locate('.resto__title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');

  const likedRestaurantName = await I.grabTextFrom('.resto__title');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

// Scenario('Post resto review', async ({ I }) => {
//   const reviewText = 'testing';
//   I.amOnPage('/');
//   I.seeElement('.resto_item');

//   I.click(locate('.resto_item').first());

//   I.seeElement('.form-review form');
//   I.fillField('inputName', 'test review');
//   I.fillField('inputReview', reviewText);
//   I.click('#submit-review');

//   const lastReview = locate('.review-body').last();
//   const lastReviewText = await I.grabTextFrom(lastReview);
//   assert.strictEqual(reviewText, lastReviewText.trim());
// });
