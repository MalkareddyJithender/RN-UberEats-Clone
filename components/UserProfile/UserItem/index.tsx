import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import useAppTheme from '../../../hooks/useAppTheme';
import createStyles from './styles';
import {Divider} from 'react-native-paper';

interface UserItemProps {
  icon: string;
  title: string;
  text: string | null | undefined;
}

export default function Index({icon, text, title}: UserItemProps): JSX.Element {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <>
      <Pressable style={({pressed}) => [styles.item, pressed && styles.pressed]}>
        <Icon
          name={icon}
          size={22}
          color={theme.colors.black}
          style={styles.icon}
        />
        <View>
          <Text style={[styles.textBase, styles.title]}>{title}</Text>
          <Text style={[styles.textBase, styles.text]}>{text}</Text>
        </View>
      </Pressable>
      <Divider horizontalInset />
    </>
  );
}
