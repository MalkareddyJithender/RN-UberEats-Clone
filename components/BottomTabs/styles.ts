import {StyleSheet} from 'react-native';
import {IMD3Theme} from '../../theme';

function createStyles(theme: IMD3Theme) {
  return StyleSheet.create({
    tabsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 22,
      marginVertical: 10,
    },
    iconText: {
      color: theme.colors.black,
    },
  });
}

export default createStyles;
