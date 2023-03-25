import {StyleSheet} from 'react-native';
import {IMD3Theme} from '../../../theme';

export const createStyles = (theme: IMD3Theme) =>
  StyleSheet.create({
    restaurant: {
      backgroundColor: theme.colors.white,
      padding: 16,
      marginBottom: 12,
    },
    image: {
      width: '100%',
      height: 220,
      marginBottom: 5,
      borderRadius: 3,
    },
    info: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    name: {
      fontSize: 13,
      fontWeight: '800',
      color: theme.colors.black,
    },
    text: {
      color: theme.colors.greyDark,
      fontSize: 11,
    },
    rating: {
      backgroundColor: theme.colors.grey,
      height: 28,
      width: 28,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      elevation: 4,
    },
    ratingText: {
      fontWeight: 'bold',
      fontSize: 13,
      color: theme.colors.black,
    },
  });
