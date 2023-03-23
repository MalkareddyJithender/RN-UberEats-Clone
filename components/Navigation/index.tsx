import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import RestaurantDetails from '../../screens/RestaurantDetails';

const Stack = createNativeStackNavigator();

function Navigation(): JSX.Element {
  //   const screenOptions = {
  //     headerShown: false,
  //   };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
