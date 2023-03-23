import React from 'react';
import {View} from 'react-native';
import Colors from '../../constants/colors';
import IconButton from '../UI/IconButton';
import styles from './styles';

export default function index(): JSX.Element {
  return (
    <View style={styles.tabsContainer}>
      <IconButton
        icon="home"
        size={25}
        color={Colors.black}
        text="Home"
        textStyle={styles.iconText}
      />
      <IconButton
        icon="search"
        size={25}
        color={Colors.black}
        text="Browse"
        textStyle={styles.iconText}
      />
      <IconButton
        icon="shopping-bag"
        size={25}
        color={Colors.black}
        text="Grocery"
        textStyle={styles.iconText}
      />
      <IconButton
        icon="receipt"
        size={25}
        color={Colors.black}
        text="Orders"
        textStyle={styles.iconText}
      />
      <IconButton
        icon="user"
        size={25}
        color={Colors.black}
        text="Account"
        textStyle={styles.iconText}
      />
    </View>
  );
}
