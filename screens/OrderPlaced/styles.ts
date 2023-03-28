import {StyleSheet} from 'react-native';
import {IMD3Theme} from '../../theme';

const createStyles = (theme: IMD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 22,
      backgroundColor: theme.colors.white,
      alignItems: 'center',
    },
    checkmarkAnimation: {
      height: 100,
      marginBottom: 30,
    },
    description: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.colors.black,
    },
    cookingAnimation: {
      height: 150,
    },
  });

export default createStyles;
