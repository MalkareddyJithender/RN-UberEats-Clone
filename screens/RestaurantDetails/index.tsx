import {Divider} from '@rneui/base';
import React, {useState} from 'react';
import {View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import Menu from '../../components/RestaurantDetails/Menu';
import menu from '../../fixtures/menu';
import {getFormattedCategories} from '../../utils/restaurant';
import useAppTheme from '../../hooks/useAppTheme';
import createStyles from './styles';
import Button from '../../components/UI/Button';
import CheckoutModal from '../../components/RestaurantDetails/Modal';
import About from '../../components/RestaurantDetails/About';
import {RootState} from '../../store/index';
import {FoodItemsType} from '../../store/features/restaurant';
import {getFoodItemsTotal} from '../../utils/restaurant';
import Loading from '../../components/Loading';

function RestaurantDetails(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const route = useRoute();
  const theme = useAppTheme();
  const styles = createStyles();
  const selectedItems = useSelector(
    (state: RootState) => state.restaurant.menuItems,
  ) as FoodItemsType;
  const [modalVisible, setModalVisible] = useState(false);

  const restaurant = route.params?.restaurant;
  console.log(restaurant);
  const categoriesNew = getFormattedCategories(restaurant.categories);
  const description = `${categoriesNew} . ${restaurant.price} . 🎟 . ${restaurant.rating} ⭐ (${restaurant.review_count}+)`;
  const cartTotal = getFoodItemsTotal(selectedItems);

  function viewCartHandler() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  return (
    <>
      <View>
        <About restaurant={restaurant} description={description} />
        <Divider
          width={1.5}
          color={theme.colors.greyDark}
          style={styles.divider}
        />
      </View>
      <Menu menu={menu} hideCheckbox={false} />
      {selectedItems.length > 0 && (
        <View style={styles.cartButtonContainer}>
          <Button
            text="View Cart"
            price={cartTotal}
            onPress={viewCartHandler}
          />
        </View>
      )}

      <CheckoutModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        cartTotal={cartTotal}
        setLoading={setLoading}
      />
      {loading && <Loading />}
    </>
  );
}

export default RestaurantDetails;
