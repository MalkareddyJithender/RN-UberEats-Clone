import {StyleSheet} from 'react-native';
import { IMD3Theme } from '../../../theme';

const createStyles = (theme: IMD3Theme) =>
  StyleSheet.create({
    button: {
      backgroundColor: theme.colors.black,
      padding: 10,
      width: 250,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    buttonText: {
      color: theme.colors.white,
      fontSize: 16,
      fontWeight: '400',
    },
    pressed: {
      opacity: 0.65,
    },
  });

export default createStyles;
