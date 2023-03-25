import {StyleSheet} from 'react-native';
import {IMD3Theme} from '../../theme';

import {IStyles} from './types';

function createStyles(theme: IMD3Theme) {
  return StyleSheet.create<IStyles>({
    categories: {
      backgroundColor: theme.colors.white,
      paddingVertical: 8,
      marginTop: 10,
      paddingLeft: 20,
    },
  });
}

export default createStyles;
