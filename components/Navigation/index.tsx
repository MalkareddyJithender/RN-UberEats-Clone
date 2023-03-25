import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabsNavigator from './BottomTabsNavigator';

function Navigation(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
