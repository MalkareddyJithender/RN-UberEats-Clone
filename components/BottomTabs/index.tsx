import React from 'react';
import {View} from 'react-native';

import IconButton from '../UI/IconButton';
import createStyles from './styles';
import useAppTheme from '../../hooks/useAppTheme';

export default function Index(): JSX.Element {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.tabsContainer}>
      <IconButton
        icon="home"
        size={25}
        color={theme.colors.black}
        text="Home"
        textStyle={styles.iconText}
      />
      <IconButton
        icon="search"
        size={25}
        color={theme.colors.black}
        text="Browse"
        textStyle={styles.iconText}
      />
      <IconButton
        icon="shopping-bag"
        size={25}
        color={theme.colors.black}
        text="Grocery"
        textStyle={styles.iconText}
      />
      <IconButton
        icon="receipt"
        size={25}
        color={theme.colors.black}
        text="Orders"
        textStyle={styles.iconText}
      />
      <IconButton
        icon="user"
        size={25}
        color={theme.colors.black}
        text="Account"
        textStyle={styles.iconText}
      />
    </View>
  );
}
