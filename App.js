import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState, Component } from 'react';
import axios, { Axios } from 'axios';


import ShowDropDownPicker from './components/ShowDropDownPicker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //render başlangıç
  render() {
    return (
      <View style={styles.container}>
        <ShowDropDownPicker/>
      </View>
    );
  }
  //render bitiş
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',

  },
 
});