const fetch = require('node-fetch');

class RestaurantSource {
  static async list() {
    const response = await fetch('https://restaurant-api.dicoding.dev/list');
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail(id) {
    const response = await fetch(`https://restaurant-api.dicoding.dev/detail/${id}`);
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async postReview(data) {
    const response = await fetch('https://restaurant-api.dicoding.dev/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '999',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

export default RestaurantSource;