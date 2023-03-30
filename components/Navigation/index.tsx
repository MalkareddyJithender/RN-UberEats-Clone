import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import BottomTabsNavigator from './BottomTabsNavigator';
import {AuthenticationStackNavigator} from './StackNavigator';

function Navigation(): JSX.Element {
  return (
    <NavigationContainer>
      <AuthenticationStackNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
