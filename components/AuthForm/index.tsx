import React, {FC, Dispatch, SetStateAction} from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';

import Input from '../../components/Input';
import {Button} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

import createStyles from './styles';
import useAppTheme from '../../hooks/useAppTheme';
import {useNavigation} from '@react-navigation/native';
const authFormBGImg = require('../../assets/images/splash.png');

interface AuthFormProps {
  isLogin: boolean;
  title: 'Sign Up' | 'Sign In';
  buttonLabel: string;
  userEmail: string;
  setUserEmail: Dispatch<SetStateAction<string>>;
  userPassword: string;
  setUserPassword: Dispatch<SetStateAction<string>>;
  confirmPassword?: string;
  setConfirmPassword?: Dispatch<SetStateAction<string>>;
}

const AuthForm: FC<AuthFormProps> = ({
  isLogin,
  title,
  buttonLabel,
  userEmail,
  userPassword,
  confirmPassword,
  setUserEmail,
  setUserPassword,
  setConfirmPassword,
}) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();

  const accStatusText = `${isLogin ? "Don't" : 'Already'} have an account ?`;

  function emailChangeHandler(enteredEmail: string) {
    setUserEmail(enteredEmail);
  }

  function passwordChangeHandler(enteredPassword: string) {
    setUserPassword(enteredPassword);
  }

  function confirmPasswordHandler(enteredPassword: string) {
    setConfirmPassword && setConfirmPassword(enteredPassword);
  }

  function toggleAuthModeHandler() {
    if (!isLogin) {
      navigation.replace('SignIn');
      return;
    }
    navigation.replace('SignUp');
  }

  return (
    <ImageBackground
      source={authFormBGImg}
      style={styles.container}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}>
      <SafeAreaView>
        <Text style={[styles.textBase, styles.title]}>{title}</Text>
        <Input
          label="E-mail"
          variant="labelLarge"
          required={true}
          textInputProps={{
            mode: 'outlined',
            placeholder: 'Your Email',
            value: userEmail,
            onChangeText: emailChangeHandler,
            style: {
              backgroundColor: theme.colors.grey,
            },
          }}
        />
        <Input
          label="Password"
          variant="labelLarge"
          required={true}
          textInputProps={{
            mode: 'outlined',
            placeholder: 'Your Password',
            value: userPassword,
            onChangeText: passwordChangeHandler,
            secureTextEntry: true,
            style: {
              backgroundColor: theme.colors.grey,
            },
          }}
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            variant="labelLarge"
            required={true}
            textInputProps={{
              mode: 'outlined',
              placeholder: 'Confirm Password',
              secureTextEntry: true,
              value: confirmPassword,
              onChangeText: confirmPasswordHandler,
              style: {
                backgroundColor: theme.colors.grey,
              },
            }}
          />
        )}
        <Button mode="contained" style={styles.button}>
          {buttonLabel}
        </Button>
        <View style={styles.statusTextContainer}>
          <Text style={[styles.textBase, styles.statusText]}>
            {accStatusText}
          </Text>
          <Pressable onPress={toggleAuthModeHandler}>
            <Text style={[styles.statusText, styles.statusTextLogin]}>
              {isLogin ? 'Sign Up' : 'Sign In'}
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
      <View style={styles.finalTextContainer}>
        <View style={styles.line} />
        <Text style={[styles.statusText, styles.finalText]}>{title} With</Text>
        <View style={styles.line} />
      </View>
    </ImageBackground>
  );
};

export default AuthForm;
