import React, {FC} from 'react';
import {SafeAreaView, Text, ScrollView} from 'react-native';
import LottieView from 'lottie-react-native';
import {useSelector} from 'react-redux';

import useAppTheme from '../../hooks/useAppTheme';
import Menu from '../../components/RestaurantDetails/Menu';
import {RootState} from '../../store';
import {getFoodItemsTotal} from '../../utils/restaurant';
import createStyles from './styles';

const OrderPlaced: FC = ({route}: any) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const selectedItems = useSelector(
    (state: RootState) => state.restaurant.menuItems,
  );
  const restaurant = route.params.restaurant;
  const cartTotal = getFoodItemsTotal(selectedItems);

  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        source={require('../../assets/animations/check-mark.json')}
        style={styles.checkmarkAnimation}
        autoPlay
        loop={true}
        speed={0.65}
      />
      <Text style={styles.description}>
        Your order at {restaurant.name} has been placed for {cartTotal}
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Menu menu={selectedItems} hideCheckbox={true} />
        <LottieView
          source={require('../../assets/animations/cooking.json')}
          style={styles.cookingAnimation}
          autoPlay
          loop
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderPlaced;
