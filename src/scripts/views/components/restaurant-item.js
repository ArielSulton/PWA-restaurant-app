class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <article class="restaurant-item">
        <img class="restaurant-item__thumbnail"
          src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}"
          alt="${this._restaurant.name}"
          loading="lazy"
          crossorigin="anonymous">
        <div class="restaurant-item__content">
          <h3 class="restaurant-item__title">
            <a href="#/detail/${this._restaurant.id}">${this._restaurant.name}</a>
          </h3>
          <p class="restaurant-item__city">${this._restaurant.city}</p>
          <p class="restaurant-item__description">${this._restaurant.description}</p>
          <p class="restaurant-item__rating">
            Rating: <span class="restaurant-item__rating-number">${this._restaurant.rating}</span>
          </p>
        </div>
      </article>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);