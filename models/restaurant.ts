import {ICategory, IRestaurant} from '../fixtures/restaurants';

export default class Restaurant {
  name: string;
  image_url: string;
  categories: ICategory[] | undefined;
  rating: number;
  review_count: number | undefined;

  constructor(restaurant: IRestaurant) {
    this.name = restaurant.name;
    this.image_url = restaurant.image_url;
    this.categories = restaurant.categories;
    this.rating = restaurant.rating;
    this.review_count = restaurant.review_count;
  }
}
