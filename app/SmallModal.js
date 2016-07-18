import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import ListItem from './ListItem';

class SmallModal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.onClose()} >
          <Text>Close Small Modal</Text>
        </TouchableOpacity>
        <ScrollView style={styles.ScrollView}>
            <ListItem text="Item 1" />
            <ListItem text="Item 2" />
            <ListItem text="Item 3" />
            <ListItem text="Item 4" />
            <ListItem text="Item 5" />
            <ListItem text="Item 6" />
            <ListItem text="Item 7" />
            <ListItem text="Item 8" />
            <ListItem text="Item 9" />
            <ListItem text="Item 10" />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },

  ScrollView: {
      marginTop: 20,
      width: 400,
      height: 300,
      backgroundColor: 'green'
  } 
});

export default SmallModal;