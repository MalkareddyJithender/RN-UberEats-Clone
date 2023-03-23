import {StyleSheet} from 'react-native';

import {ButtonProps} from './HeaderButtonTypes';
import Colors from '../../../constants/colors';

const styles = ({children, activeTab}: ButtonProps) =>
  StyleSheet.create({
    buttonOuterContainer: {
      borderRadius: 45,
      margin: 8,
      overflow: 'hidden',
    },
    buttonInnerContainer: {
      backgroundColor: children === activeTab ? Colors.honey : Colors.white,
      paddingVertical: 8,
      paddingHorizontal: 12,
      elevation: 4,

      minWidth: 100,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '700',
      color: children === activeTab ? Colors.white : Colors.honey,
      textAlign: 'center',
    },
  });

export default styles;
