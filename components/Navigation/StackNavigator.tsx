import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import RestaurantDetails from '../../screens/RestaurantDetails';
import OrderPlaced from '../../screens/OrderPlaced';

const Stack = createNativeStackNavigator();

const StackNavigator: FC = () => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
      <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
