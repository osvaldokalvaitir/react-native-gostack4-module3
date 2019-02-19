import React from 'react';
import {
  SafeAreaView, View, StatusBar, Text, TextInput, TouchableOpacity,
} from 'react-native';

import styles from './styles';

const Main = () => (
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
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.footerLink}>Meus favoritos (3)</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

Main.navigationOptions = {
  header: null,
};

export default Main;
