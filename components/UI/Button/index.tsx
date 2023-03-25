import React, {FunctionComponent} from 'react';
import {Text, View, Pressable} from 'react-native';
import useAppTheme from '../../../hooks/useAppTheme';
import createStyles from './styles';

interface ButtonProps {
  text: string;
  price: string;
}

const Button: FunctionComponent<ButtonProps> = ({text, price}) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  return (
    <Pressable style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
        <Text style={styles.buttonText}>{price}</Text>
      </View>
    </Pressable>
  );
};

export default Button;
