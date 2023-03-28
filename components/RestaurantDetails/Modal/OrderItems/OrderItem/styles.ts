import {StyleSheet} from 'react-native';
import {IMD3Theme} from '../../../../../theme';

const createStyles = (theme: IMD3Theme) =>
  StyleSheet.create({
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 18,
    },
    itemName: {
      color: theme.colors.black,
      fontWeight: '600',
    },
    itemPrice: {
      color: theme.colors.greyDark,
    },
  });

export default createStyles;
