import React from 'react';
import { View } from 'react-native';

import Home from './components/Home';
import Header from './components/Header';

const App = () => (
  <View style={styles.app}>
    <Header />
    <Home />
  </View>
);

const styles = {
  app: {
    flex: 1
  }
};

export default App;
