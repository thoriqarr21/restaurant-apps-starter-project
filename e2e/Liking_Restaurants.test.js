/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
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
