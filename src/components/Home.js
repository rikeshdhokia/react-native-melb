import React from 'react';
import {
  Text, View, Image
} from 'react-native';

import MovieBoard from '../resources/movieBoardImg.jpg';
import MovieList from './MovieList';

const Home = () => (
  <View style={styles.home}>
    <View style={styles.homeContent}>
      <Text>
        What movie should we watch tonight?
      </Text>
      <Image style={styles.image} source={MovieBoard} />
    </View>
    <View style={styles.movieList}>
      <MovieList />
    </View>
  </View>
);

const styles = {
  home: {
    flex: 1
  },
  image: {
    width: '30%',
    height: '30%',
    resizeMode: 'contain',

  },
  homeContent: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  movieList: {
    flex: 3
  }
};

export default Home;
