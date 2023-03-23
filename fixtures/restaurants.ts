export interface ICategory {
  alias: string;
  title: string;
}

export interface IRestaurant {
  name: string;
  image_url: string;
  categories?: ICategory[];
  rating: number;
  review_count?: number;
}

export type RestaurantsType = IRestaurant[];

import Restaurant from '../models/restaurant';

const restaurants: RestaurantsType = [
  new Restaurant({
    name: 'Bawarchi',
    image_url:
      'https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/master/pass/Prequel-lead.jpg',
    categories: [{alias: 'cafe', title: 'Cafe'}],
    rating: 4,
    review_count: 1233,
  }),
  new Restaurant({
    name: 'Cafe Bahar',
    image_url:
      'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/t/v/p3611-16015453685f75a4981e88e.jpg?tr=tr:n-medium',
    categories: [{alias: 'cafe', title: 'Cafe'}],
    rating: 4,
    review_count: 1233,
  }),
  new Restaurant({
    name: 'Kritunga',
    image_url:
      'https://assets.gqindia.com/photos/62a9d4653e8cdc9b632eb2ad/master/pass/10%20restaurants%20in%20Mumbai%20that%20offer%20the%20best%20sunset%20views.jpg',
    categories: [{alias: 'cafe', title: 'Cafe'}],
    rating: 4.5,
    review_count: 1233,
  }),
];

export default restaurants;
