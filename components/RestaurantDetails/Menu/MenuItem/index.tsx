import React from 'react';
import {View, Text, Image} from 'react-native';
import {Divider} from '@rneui/base';
import {useRoute} from '@react-navigation/native';

import {
  addFoodItem,
  removeFoodItem,
} from '../../../../store/features/restaurant';
import createStyles from './styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import useAppTheme from '../../../../hooks/useAppTheme';
import {RootState, useAppDispatch} from '../../../../store';
import {useSelector} from 'react-redux';

interface MenuItemProps {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  hideCheckbox: boolean;
}

export default function Index({
  id,
  title,
  description,
  price,
  image,
  hideCheckbox,
}: MenuItemProps): JSX.Element {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const route = useRoute();
  const dispatch = useAppDispatch();
  const restaurant = route.params?.restaurant;
  const selectedItems = useSelector(
    (state: RootState) => state.restaurant.menuItems,
  );
  const isItemSelected = Boolean(selectedItems.find(item => item.id === id));

  function menuItemSelectedHandler(isChecked: boolean) {
    if (!isChecked) {
      dispatch(removeFoodItem(id));
      return;
    }
    dispatch(
      addFoodItem({
        id,
        title,
        description,
        price,
        image,
        isChecked,
        restaurant,
      }),
    );
  }

  return (
    <View>
      <View style={styles.menuItem}>
        {!hideCheckbox && (
          <BouncyCheckbox
            fillColor={theme.colors.green}
            iconStyle={styles.checkboxIcon}
            innerIconStyle={styles.checkboxInnerIcon}
            onPress={menuItemSelectedHandler}
            isChecked={isItemSelected}
          />
        )}
        <View style={styles.menuInfo}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{description}</Text>
          <Text style={styles.text}>{price}</Text>
        </View>
        <View>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
        </View>
      </View>
      <Divider width={0.5} style={styles.divider} />
    </View>
  );
}
