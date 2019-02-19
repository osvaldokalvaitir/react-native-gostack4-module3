import React, { Component } from 'react';
import {
  SafeAreaView, View, StatusBar, Text, TextInput, TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  navigateToFavorites = () => {
    this.props.navigation.navigate('Favorites');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.content}>
          <Text style={styles.title}>Gitmark</Text>
          <Text style={styles.description}>
            Comece adicionando alguns repositórios aos seus favoritos.
          </Text>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="usuário/repositório"
              underlineColorAndroid="transparent"
            />

            <TouchableOpacity style={styles.button} onPress={() => {}} activeOpacity={0.6}>
              <Text style={styles.buttonText}>Adicionar aos favoritos</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={this.navigateToFavorites}>
            <Text style={styles.footerLink}>Meus favoritos (3)</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
