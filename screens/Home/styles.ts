import {StyleSheet} from 'react-native';
import {IMD3Theme} from '../../theme';
import {IStyles} from './types';

const createStyles = (theme: IMD3Theme) =>
  StyleSheet.create<IStyles>({
    container: {
      flex: 1,
      backgroundColor: theme.colors.grey,
    },
    searchContainer: {
      backgroundColor: theme.colors.white,
    },
  });

export default createStyles;
