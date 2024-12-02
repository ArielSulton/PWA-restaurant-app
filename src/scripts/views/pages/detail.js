import RestaurantSource from '../../data/restaurant-source';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import LikeButtonPresenter from '../../utils/like-button-initiator';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import UrlParser from '../../utils/url-parser';
import PostReview from '../../utils/post-review';

const Detail = {
  async render() {
    return `
      <div tabindex="0" class="main">
        <h2 tabindex="0" class="explore-restaurant__label">Restaurant Detail</h2>
        <section id="restaurant"></section>
        <div class="like" id="likeButtonContainer"></div>
      </div>

      <div class="form-review">
        <form>
          <div class="mb-3">
            <label for="inputName" class="form-label">Name</label>
            <input name="inputName" type="text" class="form-control" id="inputName">
          </div>
          <div class="mb-3">
            <label for="inputReview" class="form-label">Review</label>
            <input name="inputReview" type="text" class="form-control" id="inputReview">
          </div>
          <button id="submit-review" type="submit" class="btn">Submit</button>
        </form>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detail(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });

    const submitReview = document.getElementById('submit-review');
    submitReview.addEventListener('click', (event) => {
      event.preventDefault();
      PostReview();
    });
  },
};

export default Detail;