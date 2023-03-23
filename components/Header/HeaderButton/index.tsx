import React from 'react';
import {Text, Pressable, View} from 'react-native';
import Colors from '../../../constants/colors';

import {ButtonProps} from './HeaderButtonTypes';
import styles from './styles';

function HeaderButton({
  children,
  activeTab,
  setActiveTab,
}: ButtonProps): JSX.Element {
  function selectedTabHandler(): void {
    setActiveTab && setActiveTab(children);
  }

  return (
    <View style={styles({children, activeTab}).buttonOuterContainer}>
      <Pressable
        style={styles({children, activeTab}).buttonInnerContainer}
        android_ripple={{color: Colors.white}}
        onPress={selectedTabHandler}>
        <Text style={styles({children, activeTab}).buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default HeaderButton;
