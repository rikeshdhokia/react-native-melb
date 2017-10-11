import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

const MovieListItem = ({ name }) => (
   <View>
       <Text>{name}</Text>
   </View>
);

MovieListItem.propTypes = {
   name: PropTypes.string.isRequired,
};

export default MovieListItem;
