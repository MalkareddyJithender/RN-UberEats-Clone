import {YELP_API_KEY, YELP_URL} from '../constants/yelp';

export async function getRestaurantsFromYelp() {
  const apiOptions = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${YELP_API_KEY}`,
    },
  };

  const res = await fetch(YELP_URL, apiOptions);
  const json = await res.json();
  const response = json.businesses.map((rest: any) => {
    const restaurant = {
      name: rest.name,
      image_url: rest.image_url,
      categories: rest.categories,
      rating: rest.rating,
      review_count: rest.review_count,
    };
    return restaurant;
  });
  return response;
}
