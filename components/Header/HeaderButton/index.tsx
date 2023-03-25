import React from 'react';
import {Text, Pressable, View} from 'react-native';
import useAppTheme from '../../../hooks/useAppTheme';

import {ButtonProps} from './HeaderButtonTypes';
import createStyles from './styles';

function HeaderButton({
  children,
  activeTab,
  setActiveTab,
}: ButtonProps): JSX.Element {
  const theme = useAppTheme();
  const styles = createStyles({children, activeTab, theme});

  function selectedTabHandler(): void {
    setActiveTab && setActiveTab(children);
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        android_ripple={styles.ripple}
        onPress={selectedTabHandler}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default HeaderButton;
