import {StyleSheet} from 'react-native';
import {IMD3Theme} from '../../../theme';

const createStyles = (theme: IMD3Theme) =>
  StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
      justifyContent: 'flex-end',
    },
    modalCheckoutContainer: {
      height: 450,
      backgroundColor: theme.colors.white,
      padding: 12,
      elevation: 3,
    },
    reataurantTitle: {
      fontSize: 18,
      fontWeight: '600',
      textAlign: 'center',
      color: theme.colors.black,
      marginBottom: 8,
    },
    checkoutBtnContainer: {
      alignItems: 'center',
      marginVertical: 12,
    },
  });

export default createStyles;
