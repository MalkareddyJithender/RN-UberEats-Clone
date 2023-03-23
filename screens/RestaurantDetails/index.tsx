import {Divider} from '@rneui/base';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import RestaurantImage from '../../components/RestaurantDetails/RestaurantImage';
import RestaurantInfo from '../../components/RestaurantDetails/RestaurantInfo';
import Colors from '../../constants/colors';
import Menu from '../../components/RestaurantDetails/Menu';
import menu from '../../fixtures/menu';

function RestaurantDetails(): JSX.Element {
  const title = 'Sisters Cafe';
  const description = 'Biryani . Tifins . $$ . 🎟 . 5 ⭐ (122+)';
  return (
    <>
      <View>
        <RestaurantImage imageUri="https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/master/pass/Prequel-lead.jpg" />
        <RestaurantInfo title={title} description={description} />
        <Divider width={1.5} color={Colors.greyDark} style={styles.divider} />
      </View>
      <Menu menu={menu} />
    </>
  );
}

export default RestaurantDetails;

const styles = StyleSheet.create({
  divider: {
    marginVertical: 10,
  },
});
