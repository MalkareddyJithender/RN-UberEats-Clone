import {StyleSheet} from 'react-native';
import {IMD3Theme} from '../../theme';

const createStyles = (theme: IMD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
    },
    backgroundImage: {
      opacity: 0.6,
    },
    textBase: {
      color: theme.colors.black,
      textAlign: 'center',
    },
    title: {
      fontFamily: 'OpenSans-Bold',
      fontSize: 26,
    },
    button: {
      marginVertical: 22,
    },
    statusTextContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    statusText: {
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
      marginVertical: 16,
      marginRight: 2,
      color: theme.colors.black,
    },
    statusTextLogin: {
      color: theme.colors.primary,
    },
    finalTextContainer: {
      width: '100%',
      position: 'absolute',
      bottom: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    finalText: {
      marginRight: 0,
    },
    line: {
      flex: 1,
      backgroundColor: theme.colors.primary,
      height: 1.5,
      marginHorizontal: 8,
    },
  });

export default createStyles;
