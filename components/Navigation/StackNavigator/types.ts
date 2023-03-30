import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {IRestaurant} from '../../../fixtures/restaurants';

export type RootStackParamList = {
  Home: undefined;
  RestaurantDetails: {restaurant: IRestaurant};
  OrderPlaced: {restaurant: IRestaurant};
  SignUp: undefined;
  SignIn: undefined;
};

// export type RestaurantDetailsNavProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'RestaurantDetails'
// >;

export type ScreenNavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

export type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

// type AuthFormScreenNames = 'SignUp' | 'SignIn';

// export type AuthFormNavProp = NativeStackNavigationProp<
//   RootStackParamList,
//   AuthFormScreenNames
// >;
