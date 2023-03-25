import {MD3LightTheme as DefaultTheme, MD3Theme} from 'react-native-paper';
import {MD3Colors} from 'react-native-paper/lib/typescript/src/types';
import Colors from '../constants/colors';
import ColorTypes from '../constants/colors/colorTypes';

interface IMD3Colors extends ColorTypes, MD3Colors {}

export interface IMD3Theme extends MD3Theme {
  colors: IMD3Colors;
}

export const theme: IMD3Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...Colors,
  },
};
