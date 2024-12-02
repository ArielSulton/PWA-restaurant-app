import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__thumbnail lazyload"
        data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
        alt="${restaurant.name}"
        crossorigin="anonymous">
      <div class="restaurant-item__city">${restaurant.city}</div>
      <div class="restaurant-item__rating">
        <i class="fa fa-star"></i>
        <span>${restaurant.rating}</span>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant-item__title">
        <a href="#/detail/${restaurant.id}">${restaurant.name}</a>
      </h3>
      <p class="restaurant-item__description">${restaurant.description}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant__detail">
    <h2 class="restaurant__title">${restaurant.name}</h2>
    <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous">
    <div class="restaurant__info">
      <h3>Information</h3>
      <h4>City</h4>
      <p>${restaurant.city}</p>
      <h4>Address</h4>
      <p>${restaurant.address}</p>
      <h4>Rating</h4>
      <p>${restaurant.rating}</p>
      <h4>Categories</h4>
      <p>${restaurant.categories.map((category) => category.name).join(', ')}</p>
    </div>
    <div class="restaurant__description">
      <h3>Description</h3>
      <p>${restaurant.description}</p>
    </div>
    <div class="restaurant__menus">
      <h3>Menus</h3>
      <div class="restaurant__menu-list">
        <div class="foods">
          <h4>Foods</h4>
          <ul>
            ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
          </ul>
        </div>
        <div class="drinks">
          <h4>Drinks</h4>
          <ul>
            ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
    <div class="restaurant__reviews">
      <h3>Customer Reviews</h3>
      ${restaurant.customerReviews.map((review) => `
        <div class="review">
          <p class="review__name">${review.name}</p>
          <p class="review__date">${review.date}</p>
          <p class="review__text">${review.review}</p>
        </div>
      `).join('')}
      
      <div tabindex="0" class="review detail-review"></div>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};