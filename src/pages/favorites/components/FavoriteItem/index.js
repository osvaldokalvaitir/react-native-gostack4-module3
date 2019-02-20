import React from 'react';

import { View, Text } from 'react-native';

const FavoriteItem = ({ favorite }) => (
  <View>
    <Text>{favorite.name}</Text>
  </View>
);

export default FavoriteItem;
