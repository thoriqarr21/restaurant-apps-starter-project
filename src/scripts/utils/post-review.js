/* eslint-disable no-console */
import RestaurantSource from '../data/restaurantdb-source';
import UrlParser from '../routes/url-parser';

const PostReview = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const inputReviewName = document.getElementById('inputName');
  const inputReview = document.getElementById('inputReview');
  const reviewContainer = document.querySelector('.detail-review');

  if (reviewContainer) {
    const dataInput = {
      id: url.id,
      name: inputReviewName.value,
      review: inputReview.value,
    };

    const date = new Date().toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const newReview = document.createElement('div');
    newReview.innerHTML = `
      <div class="header-review">
        <p class="name-review">
          <i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em; padding-right:10px;"></i>
          ${dataInput.name}
        </p>
        <p class="date-review">${date}</p>
      </div>
      <div class="body-review">
        ${dataInput.review}
      </div>
    `;

    await RestaurantSource.postReview(dataInput);
    reviewContainer.appendChild(newReview); // Use appendChild to add the new review
    inputReviewName.value = '';
    inputReview.value = '';
  } else {
    console.error('Review container not found.');
  }
};

export default PostReview;
