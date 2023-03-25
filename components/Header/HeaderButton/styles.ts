import {StyleSheet} from 'react-native';

import {ICreateStyles} from './HeaderButtonTypes';

function createStyles<T extends ICreateStyles>({
  activeTab,
  children,
  theme,
}: T) {
  return StyleSheet.create({
    buttonOuterContainer: {
      borderRadius: 45,
      margin: 8,
      overflow: 'hidden',
    },
    buttonInnerContainer: {
      backgroundColor:
        children === activeTab ? theme.colors.honey : theme.colors.white,
      paddingVertical: 8,
      paddingHorizontal: 12,
      elevation: 4,

      minWidth: 100,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '700',
      color: children === activeTab ? theme.colors.white : theme.colors.honey,
      textAlign: 'center',
    },
    ripple: {color: theme.colors.white},
  });
}

export default createStyles;
