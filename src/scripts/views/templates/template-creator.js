/* eslint-disable import/no-extraneous-dependencies */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="resto__title">${restaurant.name}</h2>
  <img class="resto__poster" src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" alt="${restaurant.name}" />
  <div class="resto__info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="resto__overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p>

    <h2 tabindex="0" id="resto-detail-form-review-title" class="list-menu-teks"><span>List Menu</span></h2>
    <div class="restaurant-detail__menu-list">
      <div class="foods">
        <h3>Food</h3>
        <hr>
        <ul class="restaurant-detail__foods">
          ${restaurant.menus.foods
    .map(
      (food) => `<li><i class="fa fa-cutlery font-decoration"></i> ${food.name}</li>`,
    )
    .join('')}
        </ul>
      </div>
      <div class="drinks">
        <h3>Drink</h3>
        <hr>
        <ul class="restaurant-detail__drinks">
          ${restaurant.menus.drinks
    .map(
      (drink) => `<li><i class="fa fa-coffee font-decoration"></i> ${drink.name}</li>`,
    )
    .join('')}
        </ul>
      </div>
    </div>
    <h2 tabindex="0" id="resto-detail-form-review-title" class="teks-review"><span>Reviews</span></h2>
    <div tabindex="0" class="detail-review">
      ${restaurant.customerReviews
    .map(
      (review) => `
        <div class="detail-review-item">
          <div class="review-header">
            <p class="review-name"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em; padding-right:10px;"></i>${review.name}</p>
            <p class="review-date">${review.date}</p>
          </div>
          <div class="review-body">
            ${review.review}
          </div>
        </div>
      `,
    )
    .join('')}
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="lazyload resto-item__header__poster" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${
  restaurant.name || '-'
}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${
  restaurant.rating || '-'
}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
    <p class="resto_city">${restaurant.city || '-'}</p>
      <h3 class="resto__title"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h3>
      <p>${restaurant.description || '-'}</p>
      
    </div>

  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
