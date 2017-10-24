import React from 'react';
import {
  Text, View
} from 'react-native';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>
      Random Movie Finder
    </Text>
  </View>
);

const styles = {
  headerText: {
    textAlign: 'center',
    fontSize: 16
  },
  header: {
    backgroundColor: '#F8F8F8',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  }
};

export default Header;
