import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../../../screens/Home';
import RestaurantDetails from '../../../screens/RestaurantDetails';
import OrderPlaced from '../../../screens/OrderPlaced';
import Signup from '../../../screens/Signup';
import SignIn from '../../../screens/SignIn';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: false,
};

export const AuthenticatedStackNavigator: FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
      <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
    </Stack.Navigator>
  );
};

export const AuthenticationStackNavigator: FC = () => {
  return (
    <Stack.Navigator initialRouteName="SignUp" screenOptions={screenOptions}>
      <Stack.Screen name="SignUp" component={Signup} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};
