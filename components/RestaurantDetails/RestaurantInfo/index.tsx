import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface RestaurantInfoProps {
  title: string;
  description: string;
}

export default function index({
  title,
  description,
}: RestaurantInfoProps): JSX.Element {
  return (
    <View style={styles.info}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
