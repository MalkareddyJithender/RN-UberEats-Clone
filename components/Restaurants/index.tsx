import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {RestaurantsType} from '../../fixtures/restaurants';
import Restaurant from './Restaurant';

interface RestaurantsProps {
  restaurants: RestaurantsType;
}

const Restaurants: FC<RestaurantsProps> = ({restaurants}) => {
  return (
    <View style={styles.container}>
      {restaurants.map((restaurant, i) => (
        <Restaurant key={i} restaurant={restaurant} />
      ))}
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
});
