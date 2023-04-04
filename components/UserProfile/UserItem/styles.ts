import {StyleSheet} from 'react-native';
import {IMD3Theme} from '../../../theme';

const createStyles = (theme: IMD3Theme) =>
  StyleSheet.create({
    item: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      paddingVertical: 25,
      backgroundColor: theme.colors.white,
    },
    icon: {
      marginRight: 5,
    },
    textBase: {
      color: theme.colors.black,
      fontSize: 12,
      fontFamily: 'Roboto-Regular',
    },
    title: {
      marginTop: 3,
      marginBottom: 5,
    },
    text: {
      fontWeight: '400',
    },
    pressed: {
      backgroundColor: theme.colors.grey,
    },
  });

export default createStyles;
