import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, TextInput, IconButton} from 'react-native-paper';
import useAppTheme from '../../hooks/useAppTheme';
import {IMD3Theme} from '../../theme';

export interface ITextInputProps {
  mode: any;
  value: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChangeText: (value: string) => void;
}

interface InputProps {
  label: string;
  variant: any;
  required: boolean;
  textInputProps: object;
}

export default function Index({
  label,
  variant,
  required,
  textInputProps,
}: InputProps) {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.inputContainer}>
      <View style={styles.labelContainer}>
        <Text variant={variant} style={styles.label}>
          {label}
        </Text>
        {required && <Text style={styles.asterisk}>*</Text>}
      </View>
      <TextInput {...textInputProps} />
    </View>
  );
}

const createStyles = (theme: IMD3Theme) =>
  StyleSheet.create({
    inputContainer: {
      marginVertical: 10,
    },
    labelContainer: {
      flexDirection: 'row',
    },
    label: {
      fontSize: 16,
      fontFamily: 'OpenSans-Bold',
      color: theme.colors.black,
      marginRight: 5,
    },
    asterisk: {
      color: theme.colors.red,
    },
  });
