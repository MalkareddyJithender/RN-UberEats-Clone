import {Image, StyleSheet} from 'react-native';
import React from 'react';

interface RestaurantImageProps {
  imageUri: string;
}

export default function index({imageUri}: RestaurantImageProps): JSX.Element {
  return (
    <Image
      source={{
        uri: imageUri,
      }}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
  },
});
