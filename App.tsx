import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import Navigation from './components/Navigation';
import {theme} from './theme';

function App() {
  return (
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  );
}

export default App;
