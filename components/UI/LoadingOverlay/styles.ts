import {StyleSheet} from 'react-native';
import {IMD3Theme} from '../../../theme';

const createStyles = (theme: IMD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24,
    },
    text: {
      marginBottom: 12,
      fontWeight: '600',
      textAlign: 'center',
      color: theme.colors.black,
    },
  });

export default createStyles;
