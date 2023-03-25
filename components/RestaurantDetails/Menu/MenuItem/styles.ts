import {StyleSheet} from 'react-native';
import {IMD3Theme} from '../../../../theme';

const createStyles = (theme: IMD3Theme) =>
  StyleSheet.create({
    menuItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 15,
    },
    menuInfo: {
      justifyContent: 'space-evenly',
      maxWidth: 220,
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.colors.black,
    },
    text: {
      fontWeight: '400',
      color: theme.colors.black,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 8,
    },
    divider: {
      marginHorizontal: 15,
    },
    checkboxIcon: {
      borderRadius: 0,
    },
    checkboxInnerIcon: {
      borderColor: theme.colors.greyLight,
      borderRadius: 0,
    },
  });

export default createStyles;
