import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {TabBarIconProps} from './types';
import Home from '../../screens/Home';
import UserProfile from '../../screens/UserProfile';
import {AuthenticatedStackNavigator} from './StackNavigator/StackNavigator';

// Bottom Tabs Navigator
const Tab = createBottomTabNavigator();

const withIcon = (icon: string, filledIcon: string) => {
  return ({size, color, focused}: TabBarIconProps) => (
    <Icon name={focused ? filledIcon : icon} size={size} color={color} />
  );
};

const BottomTabs = [
  {
    name: 'Main',
    component: AuthenticatedStackNavigator,
    options: {
      tabBarLabel: 'Home',
      tabBarIcon: withIcon('home-outline', 'home'),
    },
  },
  {
    name: 'Browse',
    component: Home,
    options: {tabBarLabel: 'Browse', tabBarIcon: withIcon('search-outline','search')},
  },
  {
    name: 'Favourites',
    component: Home,
    options: {tabBarLabel: 'Favourites', tabBarIcon: withIcon('heart-outline','heart')},
  },
  {
    name: 'Orders',
    component: Home,
    options: {tabBarLabel: 'Orders', tabBarIcon: withIcon('receipt-outline','receipt')},
  },
  {
    name: 'Account',
    component: UserProfile,
    options: {tabBarLabel: 'Account', tabBarIcon: withIcon('person-outline','person')},
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
