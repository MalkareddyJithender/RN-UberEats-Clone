import React, {useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';

import Navigation from './components/Navigation';
import {theme} from './theme';
import store from './store';
import SplashScreen from 'react-native-splash-screen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

function App() {
  useEffect(() => {
    // google signin
    GoogleSignin.configure({
      webClientId:
        '362995428229-94pt280vqjj531j7aj5qtcpceerjtd4g.apps.googleusercontent.com',
    });

    // hides splash screen
    SplashScreen.hide();
  }, []);

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <Navigation />
      </PaperProvider>
    </StoreProvider>
  );
}

export default App;
