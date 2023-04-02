import React, {FC, Dispatch, SetStateAction} from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import Input from '../../components/Input';
import createStyles from './styles';
import useAppTheme from '../../hooks/useAppTheme';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../Navigation/StackNavigator/types';
import {setGoogleUser} from '../../store/features/auth';
import {useAppDispatch} from '../../store';
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
  onSubmit: () => void;
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
  onSubmit,
}) => {
  const theme = useAppTheme();
  const dispatch = useAppDispatch();
  const styles = createStyles(theme);
  const navigation = useNavigation<ScreenNavigationProp<'SignUp' | 'SignIn'>>();

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

  async function googleSignInHandler() {
    // debugger;
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const {user} = await auth().signInWithCredential(googleCredential);
      const gUser = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
      };
      // dispatch action
      dispatch(setGoogleUser(gUser));
    } catch (e) {
      console.log('error', e);
    }
  }

  return (
    <ImageBackground
      source={authFormBGImg}
      style={[styles.root, styles.container]}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}>
      <SafeAreaView style={styles.root}>
        <View style={styles.upperContainer}>
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
          <Button mode="contained" style={styles.button} onPress={onSubmit}>
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
        </View>
        <View style={styles.lowerContainer}>
          <View style={[styles.root, styles.socialSignInContainer]}>
            <View style={styles.finalTextContainer}>
              <View style={styles.line} />
              <Text style={[styles.statusText, styles.finalText]}>
                {title} With
              </Text>
              <View style={styles.line} />
            </View>
            {isLogin && (
              <GoogleSigninButton
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={googleSignInHandler}
              />
            )}
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AuthForm;
