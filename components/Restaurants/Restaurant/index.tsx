import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import {IRestaurant} from '../../../fixtures/restaurants';
import {styles} from './styles';

interface RestaurantProps {
  restaurant: IRestaurant;
}

const Restaurant: FC<RestaurantProps> = ({restaurant}) => {
  return (
    <View style={styles.restaurant}>
      <Image source={{uri: restaurant.image_url}} style={styles.image} />
      <View style={styles.info}>
        <View>
          <Text style={styles.name}>{restaurant.name}</Text>
          <Text style={styles.text}>30-45 .min</Text>
        </View>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{restaurant.rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default Restaurant;
