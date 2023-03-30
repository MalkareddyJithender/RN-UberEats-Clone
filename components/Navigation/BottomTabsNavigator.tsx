import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {AuthenticatedStackNavigator} from './StackNavigator';
import {TabBarIconProps} from './types';
import Home from '../../screens/Home';

// Bottom Tabs Navigator
const Tab = createBottomTabNavigator();

const withIcon = (name: string) => {
  return ({size, color}: TabBarIconProps) => (
    <Icon name={name} size={size} color={color} />
  );
};

const BottomTabs = [
  {
    name: 'Main',
    component: AuthenticatedStackNavigator,
    options: {
      tabBarLabel: 'Home',
      tabBarIcon: withIcon('home-outline'),
    },
  },
  {
    name: 'Browse',
    component: Home,
    options: {tabBarLabel: 'Browse', tabBarIcon: withIcon('search-outline')},
  },
  {
    name: 'Favourites',
    component: Home,
    options: {tabBarLabel: 'Favourites', tabBarIcon: withIcon('heart-outline')},
  },
  {
    name: 'Orders',
    component: Home,
    options: {tabBarLabel: 'Orders', tabBarIcon: withIcon('receipt-outline')},
  },
  {
    name: 'Account',
    component: Home,
    options: {tabBarLabel: 'Account', tabBarIcon: withIcon('person-outline')},
  },
];

const BottomTabsNavigator: FC = () => {
  const scrOptions = {
    headerShown: false,
    tabBarStyle: {
      height: 55,
      paddingTop: 5,
    },
    tabBarLabelStyle: {paddingBottom: 8},
  };

  return (
    <Tab.Navigator initialRouteName="Main" screenOptions={scrOptions}>
      {BottomTabs.map((BottomTab, i) => (
        <Tab.Screen
          key={i}
          name={BottomTab.name}
          component={BottomTab.component}
          options={BottomTab.options}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
