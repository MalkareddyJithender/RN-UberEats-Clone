import React from 'react';
import {View, Text} from 'react-native';
import useAppTheme from '../../../hooks/useAppTheme';
import createStyles from './styles';

interface RestaurantInfoProps {
  title: string;
  description: string;
}

export default function Index({
  title,
  description,
}: RestaurantInfoProps): JSX.Element {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.info}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
