import React, { Component } from 'react';
import { Alert, Image, Text, Platform, TouchableHighlight, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import Logo from './shelter.png';

const styles = StyleSheet.create({
  lolpadding: {
    flex: 1,
  },

  image: {
    paddingTop: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 3,
  },

  buttons: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  donorButton: {
    flex: 1,
    paddingBottom: 50,
    justifyContent: 'flex-end',
  },
  userButton: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  buttonText: {
    padding: 20,
    color: 'white',
  },
});

export default () => (
  <View style={{ flex: 1, justifyContent: 'space-around' }}>
    <View style={styles.lolpadding} />

    <Image source={Logo} style={styles.image} />

    <View style={styles.buttons}>
      <View style={styles.donorButton}>
        <Button
          large
          backgroundColor="#79BD9A"
          fontWeight="bold"
          iconLeft={{ name: 'home' }}
          title="HOSTS"
        >
          <Text style={styles.buttonText}>placement</Text>
        </Button>
      </View>
      <View style={styles.userButton}>
        <Button
          large
          backgroundColor="#79BD9A"
          fontWeight="bold"
          iconLeft={{ name: 'user' }}
          title="GUESTS"
        >
          <Text style={styles.buttonText}>placement2</Text>
        </Button>
      </View>
    </View>
  </View>
);
