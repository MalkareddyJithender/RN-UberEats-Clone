import React from 'react';
import {IRestaurant} from '../../../fixtures/restaurants';
import RestaurantImage from './RestaurantImage';
import RestaurantInfo from './RestaurantInfo';

interface AboutProps {
  restaurant: IRestaurant;
  description: string;
}

export default function Index({
  restaurant,
  description,
}: AboutProps): JSX.Element {
  return (
    <>
      <RestaurantImage imageUri={restaurant.image_url} />
      <RestaurantInfo title={restaurant.name} description={description} />
    </>
  );
}
