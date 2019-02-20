import React from 'react';
import { View } from 'react-native';

import { colors } from '~/styles';

const Favorites = () => <View />;

Favorites.navigationOptions = {
  title: 'Meus favoritos',
  headerStyle: {
    backgroundColor: colors.primaryDark,
  },
};

export default Favorites;
