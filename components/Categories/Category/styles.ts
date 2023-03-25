import {StyleSheet} from 'react-native';
import {IMD3Theme} from '../../../theme';

function createStyles(theme: IMD3Theme) {
  return StyleSheet.create({
    category: {
      marginRight: 10,
      alignItems: 'center',
    },
    image: {
      width: 50,
      height: 40,
      resizeMode: 'contain',
    },
    text: {
      fontSize: 12,
      fontWeight: 'bold',
      color: theme.colors.black,
    },
  });
}

export default createStyles;
