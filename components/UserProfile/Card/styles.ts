import {StyleSheet} from 'react-native';
import {IMD3Theme} from '../../../theme';

const createStyles = (theme: IMD3Theme) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme.colors.blue,
      padding: 16,
      borderRadius: 8,
    },
    iconsContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    userInfo: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 8,
    },
    fontBase: {
      fontFamily: 'OpenSans-Regular',
      color: theme.colors.white,
    },
    fontBaseBold:{
      fontWeight: 'bold',
    },
    userName: {
      fontSize: 16,
      margin: 8,
      fontWeight: 'bold',
    },
    userPosition: {
      fontSize: 14,
    },
    followContainer:{
      flexDirection: 'row',
    },
    followContent: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginVertical: 12,
      height: 30,
    },
    followText: {
      alignSelf: 'center',
    },
    line: {
      borderRightWidth: 1,
      borderRightColor: theme.colors.white,
    },
  });

export default createStyles;
