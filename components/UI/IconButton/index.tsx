import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface IconButtonProps {
  icon: string;
  size: number;
  text: string;
  color: string;
  textStyle: object;
}

export default function index({
  icon,
  size,
  text,
  color,
  textStyle,
}: IconButtonProps): JSX.Element {
  return (
    <View style={styles.iconContainer}>
      <FontAwesome5 name={icon} size={size} color={color} />
      <Text style={textStyle}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
  },
});
