import React from 'react';
import {View, Text} from 'react-native';

import createStyles from './styles';
import useAppTheme from '../../hooks/useAppTheme';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function index() {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <Text>User Profile</Text>
    </SafeAreaView>
  );
}
