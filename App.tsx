import React, {useEffect, useState} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import Navigation from './components/Navigation';
import {theme} from './theme';
import store, {useAppDispatch} from './store';
import SplashScreen from 'react-native-splash-screen';
import LoadingOverlay from './components/UI/LoadingOverlay';
import {setGoogleUser, setInitialState, setUser} from './store/features/auth';
import {getNameFromEmail} from './utils/auth';

function App() {
  // const [initializing, setInitializing] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // google signin
    GoogleSignin.configure({
      webClientId:
        '362995428229-94pt280vqjj531j7aj5qtcpceerjtd4g.apps.googleusercontent.com',
    });

    // once firebase connection is done
    auth().onAuthStateChanged(user => {
      if (user && !user.displayName) {
        const userName = getNameFromEmail(user.email!);
        dispatch(
          setUser({
            email: user.email,
            displayName: userName,
            uid: user.uid,
          }),
        );
      } else if (user && user.displayName) {
        const gUser = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        };
        // dispatch action
        dispatch(setGoogleUser(gUser));
      } else {
        dispatch(setInitialState());
      }
      // hides splash screen
      SplashScreen.hide();
    });
  }, []);

  // if (initializing) {
  //   return <LoadingOverlay size="large" />;
  // }

  return (
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  );
}

export function AppWrapper() {
  return (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  );
}

export default AppWrapper;
