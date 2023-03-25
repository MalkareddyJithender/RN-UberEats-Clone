import {StyleSheet} from 'react-native';
import {IMD3Theme} from '../../../theme';

const createStyles = (theme: IMD3Theme) =>
  StyleSheet.create({
    info: {
      margin: 15,
    },
    title: {
      fontSize: 22,
      fontWeight: '700',
      color: theme.colors.black,
      marginBottom: 6,
    },
    description: {
      fontSize: 13,
      fontWeight: '400',
      color: theme.colors.greyDark,
    },
  });

export default createStyles;
