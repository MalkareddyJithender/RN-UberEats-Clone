import React from 'react';
import {View, Text} from 'react-native';
import useAppTheme from '../../../hooks/useAppTheme';
import createStyles from './styles';

export default function Index(): JSX.Element {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <View>
      <Text>index</Text>
    </View>
  );
}
