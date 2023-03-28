import {StyleSheet} from 'react-native';
import {IMD3Theme} from '../../../../theme';

const createStyles = (theme: IMD3Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 16,
    },
    textBase: {
      color: theme.colors.black,
    },
    subtotalText: {
      fontWeight: '600',
    },
  });

export default createStyles;
