Feature('Liking Restaurants');

Scenario('liking and then unliking a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.restaurant-item__title a', 5);
  I.seeElement('.restaurant-item__title a');

  I.click(locate('.restaurant-item__title a').first());
  I.waitForElement('#likeButton', 5);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item__title a', 5);
  I.seeElement('.restaurant-item__title a');

  I.click(locate('.restaurant-item__title a').first());
  I.waitForElement('#likeButton', 5);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item__not__found', 10);
  I.see("You don't have any favorite restaurants yet", '.restaurant-item__not__found');
});