import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {IRestaurant} from '../../../fixtures/restaurants';
import {createStyles} from './styles';
import useAppTheme from '../../../hooks/useAppTheme';

interface RestaurantProps {
  restaurant: IRestaurant;
}

const Restaurant: FC<RestaurantProps> = ({restaurant}) => {
  const navigation = useNavigation();
  const theme = useAppTheme();
  const styles = createStyles(theme);

  function selectRestaurant() {
    navigation.navigate('RestaurantDetails', {
      restaurant,
    });
  }

  return (
    <TouchableOpacity activeOpacity={0.75} onPress={selectRestaurant}>
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
    </TouchableOpacity>
  );
};

export default Restaurant;
