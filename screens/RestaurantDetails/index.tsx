import {Divider} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import RestaurantImage from '../../components/RestaurantDetails/RestaurantImage';
import RestaurantInfo from '../../components/RestaurantDetails/RestaurantInfo';
import Menu from '../../components/RestaurantDetails/Menu';
import menu from '../../fixtures/menu';
import {getFormattedCategories} from '../../utils/restaurant';
import Button from '../../components/UI/Button';
import styles from './styles';
import useAppTheme from '../../hooks/useAppTheme';

function RestaurantDetails(): JSX.Element {
  const route = useRoute();
  const theme = useAppTheme();
  const restaurant = route.params?.restaurant;
  console.log(restaurant);
  const categoriesNew = getFormattedCategories(restaurant.categories);
  const description = `${categoriesNew} . ${restaurant.price} . 🎟 . ${restaurant.rating} ⭐ (${restaurant.review_count}+)`;
  return (
    <>
      <View>
        <RestaurantImage imageUri={restaurant.image_url} />
        <RestaurantInfo title={restaurant.name} description={description} />
        <Divider
          width={1.5}
          color={theme.colors.greyDark}
          style={styles.divider}
        />
      </View>
      <Menu menu={menu} />
      <View style={styles.cartButtonContainer}>
        <Button text="View Cart" price="$38.90" />
      </View>
    </>
  );
}

export default RestaurantDetails;
