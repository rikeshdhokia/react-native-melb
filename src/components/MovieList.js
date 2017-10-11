import React from 'react';
import { View, FlatList } from 'react-native';

import moviesData from '../resources/movies.json';
import MovieListItem from './MovieListItem';

const MovieList = () => (
   <View>
       <FlatList
         data={moviesData.results}
         keyExtractor={(item) => item.id}
         renderItem={({ item }) =>
          <MovieListItem name={item.title} />
        }
       />
   </View>
);

export default MovieList;
