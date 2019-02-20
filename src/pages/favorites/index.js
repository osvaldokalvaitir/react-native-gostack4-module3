import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';

import FavoriteItem from './components/FavoriteItem';

export default class Favorites extends Component {
  static navigationOptions = {
    title: 'Meus favoritos',
  };

  state = {
    favorites: [
      {
        name: 'rocketseat.com.br',
        owner: {
          avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
        },
        description: 'Tire sua ideia do papel e dê vida à sua startup',
      },
    ],
  };

  renderList = () => (
    <FlatList
      data={this.state.favorites}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <FavoriteItem favorite={item} />}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        {!this.state.favorites.length ? (
          <Text style={styles.empty}>Nenhum favorito adicionado</Text>
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
