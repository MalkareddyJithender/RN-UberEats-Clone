import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';

import Navigation from './components/Navigation';
import {theme} from './theme';
import store from './store';

function App() {
  console.log('store', store.getState());
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <Navigation />
      </PaperProvider>
    </StoreProvider>
  );
}

export default App;
