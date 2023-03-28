import {Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useAppTheme from '../../../hooks/useAppTheme';
import {IMD3Theme} from '../../../theme';

interface IconButtonProps {
  type: 'FontAwesome5' | 'Ionicons';
  icon: string;
  size: number;
  text?: string;
  color?: string;
  textStyle?: object;
  rippleStyle?: {
    color: string;
  };
  onPress: () => void;
}

export default function Index({
  type,
  icon,
  size,
  text,
  color,
  textStyle,
  onPress,
  rippleStyle,
}: IconButtonProps): JSX.Element {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <Pressable
      style={styles.iconContainer}
      android_ripple={rippleStyle}
      onPress={onPress}>
      {type === 'FontAwesome5' ? (
        <FontAwesome5 name={icon} size={size} color={color} />
      ) : (
        <Ionicons name={icon} size={size} color={color} />
      )}
      {text && <Text style={textStyle}>{text}</Text>}
    </Pressable>
  );
}

const createStyles = (theme: IMD3Theme) =>
  StyleSheet.create({
    iconContainer: {
      alignItems: 'center',
    },
    rippleColor: {
      color: theme.colors.greyLight,
    },
  });
