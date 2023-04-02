import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {AuthenticationStackNavigator} from './StackNavigator/StackNavigator';
import {RootState} from '../../store';
import BottomTabsNavigator from './BottomTabsNavigator';

function Navigation(): JSX.Element {
  const auth = useSelector((state: RootState) => state.auth);
  const isUserAuthenticated = auth.user || auth.googleUser;
  const AuthNavigator = isUserAuthenticated
    ? BottomTabsNavigator
    : AuthenticationStackNavigator;

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
