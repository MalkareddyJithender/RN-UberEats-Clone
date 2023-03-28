import React from 'react';
import {View, Text} from 'react-native';
import useAppTheme from '../../../../hooks/useAppTheme';
import createStyles from './styles';

interface SubTotalProps {
  text: string;
  price: string;
}

export default function Index({text, price}: SubTotalProps) {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={[styles.textBase, styles.subtotalText]}>{text}</Text>
      <Text style={styles.textBase}>{price}</Text>
    </View>
  );
}
