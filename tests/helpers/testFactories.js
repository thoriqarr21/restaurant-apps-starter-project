/* eslint-disable import/prefer-default-export */
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-resto-idb';
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};
export { createLikeButtonPresenterWithRestaurant };
