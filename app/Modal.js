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

class Modal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.onClose()} >
          <Text>Close Large Modal</Text>
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
            <ListItem text="Item 11" />
            <ListItem text="Item 12" />
            <ListItem text="Item 13" />
            <ListItem text="Item 14" />
            <ListItem text="Item 15" />
            <ListItem text="Item 16" />
            <ListItem text="Item 17" />
            <ListItem text="Item 18" />
            <ListItem text="Item 19" />
            <ListItem text="Item 20" />
            <ListItem text="Item 21" />
            <ListItem text="Item 22" />
            <ListItem text="Item 23" />
            <ListItem text="Item 24" />
            <ListItem text="Item 25" />
            <ListItem text="Item 26" />
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
            <ListItem text="Item 11" />
            <ListItem text="Item 12" />
            <ListItem text="Item 13" />
            <ListItem text="Item 14" />
            <ListItem text="Item 15" />
            <ListItem text="Item 16" />
            <ListItem text="Item 17" />
            <ListItem text="Item 18" />
            <ListItem text="Item 19" />
            <ListItem text="Item 20" />
            <ListItem text="Item 21" />
            <ListItem text="Item 22" />
            <ListItem text="Item 23" />
            <ListItem text="Item 24" />
            <ListItem text="Item 25" />
            <ListItem text="Item 26" />
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
            <ListItem text="Item 11" />
            <ListItem text="Item 12" />
            <ListItem text="Item 13" />
            <ListItem text="Item 14" />
            <ListItem text="Item 15" />
            <ListItem text="Item 16" />
            <ListItem text="Item 17" />
            <ListItem text="Item 18" />
            <ListItem text="Item 19" />
            <ListItem text="Item 20" />
            <ListItem text="Item 21" />
            <ListItem text="Item 22" />
            <ListItem text="Item 23" />
            <ListItem text="Item 24" />
            <ListItem text="Item 25" />
            <ListItem text="Item 26" />
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
            <ListItem text="Item 11" />
            <ListItem text="Item 12" />
            <ListItem text="Item 13" />
            <ListItem text="Item 14" />
            <ListItem text="Item 15" />
            <ListItem text="Item 16" />
            <ListItem text="Item 17" />
            <ListItem text="Item 18" />
            <ListItem text="Item 19" />
            <ListItem text="Item 20" />
            <ListItem text="Item 21" />
            <ListItem text="Item 22" />
            <ListItem text="Item 23" />
            <ListItem text="Item 24" />
            <ListItem text="Item 25" />
            <ListItem text="Item 26" />
                        <ListItem text="Item 2" />
            <ListItem text="Item 3" />
            <ListItem text="Item 4" />
            <ListItem text="Item 5" />
            <ListItem text="Item 6" />
            <ListItem text="Item 7" />
            <ListItem text="Item 8" />
            <ListItem text="Item 9" />
            <ListItem text="Item 10" />
            <ListItem text="Item 11" />
            <ListItem text="Item 12" />
            <ListItem text="Item 13" />
            <ListItem text="Item 14" />
            <ListItem text="Item 15" />
            <ListItem text="Item 16" />
            <ListItem text="Item 17" />
            <ListItem text="Item 18" />
            <ListItem text="Item 19" />
            <ListItem text="Item 20" />
            <ListItem text="Item 21" />
            <ListItem text="Item 22" />
            <ListItem text="Item 23" />
            <ListItem text="Item 24" />
            <ListItem text="Item 25" />
            <ListItem text="Item 26" />
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
            <ListItem text="Item 11" />
            <ListItem text="Item 12" />
            <ListItem text="Item 13" />
            <ListItem text="Item 14" />
            <ListItem text="Item 15" />
            <ListItem text="Item 16" />
            <ListItem text="Item 17" />
            <ListItem text="Item 18" />
            <ListItem text="Item 19" />
            <ListItem text="Item 20" />
            <ListItem text="Item 21" />
            <ListItem text="Item 22" />
            <ListItem text="Item 23" />
            <ListItem text="Item 24" />
            <ListItem text="Item 25" />
            <ListItem text="Item 26" />
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
            <ListItem text="Item 11" />
            <ListItem text="Item 12" />
            <ListItem text="Item 13" />
            <ListItem text="Item 14" />
            <ListItem text="Item 15" />
            <ListItem text="Item 16" />
            <ListItem text="Item 17" />
            <ListItem text="Item 18" />
            <ListItem text="Item 19" />
            <ListItem text="Item 20" />
            <ListItem text="Item 21" />
            <ListItem text="Item 22" />
            <ListItem text="Item 23" />
            <ListItem text="Item 24" />
            <ListItem text="Item 25" />
            <ListItem text="Item 26" />
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
            <ListItem text="Item 11" />
            <ListItem text="Item 12" />
            <ListItem text="Item 13" />
            <ListItem text="Item 14" />
            <ListItem text="Item 15" />
            <ListItem text="Item 16" />
            <ListItem text="Item 17" />
            <ListItem text="Item 18" />
            <ListItem text="Item 19" />
            <ListItem text="Item 20" />
            <ListItem text="Item 21" />
            <ListItem text="Item 22" />
            <ListItem text="Item 23" />
            <ListItem text="Item 24" />
            <ListItem text="Item 25" />
            <ListItem text="Item 26" />
                        <ListItem text="Item 2" />
            <ListItem text="Item 3" />
            <ListItem text="Item 4" />
            <ListItem text="Item 5" />
            <ListItem text="Item 6" />
            <ListItem text="Item 7" />
            <ListItem text="Item 8" />
            <ListItem text="Item 9" />
            <ListItem text="Item 10" />
            <ListItem text="Item 11" />
            <ListItem text="Item 12" />
            <ListItem text="Item 13" />
            <ListItem text="Item 14" />
            <ListItem text="Item 15" />
            <ListItem text="Item 16" />
            <ListItem text="Item 17" />
            <ListItem text="Item 18" />
            <ListItem text="Item 19" />
            <ListItem text="Item 20" />
            <ListItem text="Item 21" />
            <ListItem text="Item 22" />
            <ListItem text="Item 23" />
            <ListItem text="Item 24" />
            <ListItem text="Item 25" />
            <ListItem text="Item 26" />
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
            <ListItem text="Item 11" />
            <ListItem text="Item 12" />
            <ListItem text="Item 13" />
            <ListItem text="Item 14" />
            <ListItem text="Item 15" />
            <ListItem text="Item 16" />
            <ListItem text="Item 17" />
            <ListItem text="Item 18" />
            <ListItem text="Item 19" />
            <ListItem text="Item 20" />
            <ListItem text="Item 21" />
            <ListItem text="Item 22" />
            <ListItem text="Item 23" />
            <ListItem text="Item 24" />
            <ListItem text="Item 25" />
            <ListItem text="Item 26" />
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
            <ListItem text="Item 11" />
            <ListItem text="Item 12" />
            <ListItem text="Item 13" />
            <ListItem text="Item 14" />
            <ListItem text="Item 15" />
            <ListItem text="Item 16" />
            <ListItem text="Item 17" />
            <ListItem text="Item 18" />
            <ListItem text="Item 19" />
            <ListItem text="Item 20" />
            <ListItem text="Item 21" />
            <ListItem text="Item 22" />
            <ListItem text="Item 23" />
            <ListItem text="Item 24" />
            <ListItem text="Item 25" />
            <ListItem text="Item 26" />
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
            <ListItem text="Item 11" />
            <ListItem text="Item 12" />
            <ListItem text="Item 13" />
            <ListItem text="Item 14" />
            <ListItem text="Item 15" />
            <ListItem text="Item 16" />
            <ListItem text="Item 17" />
            <ListItem text="Item 18" />
            <ListItem text="Item 19" />
            <ListItem text="Item 20" />
            <ListItem text="Item 21" />
            <ListItem text="Item 22" />
            <ListItem text="Item 23" />
            <ListItem text="Item 24" />
            <ListItem text="Item 25" />
            <ListItem text="Item 26" />
                        <ListItem text="Item 22" />
            <ListItem text="Item 23" />
            <ListItem text="Item 24" />
            <ListItem text="Item 25" />
            <ListItem text="Item 26" />
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
            <ListItem text="Item 11" />
            <ListItem text="Item 12" />
            <ListItem text="Item 13" />
            <ListItem text="Item 14" />
            <ListItem text="Item 15" />
            <ListItem text="Item 16" />
            <ListItem text="Item 17" />
            <ListItem text="Item 18" />
            <ListItem text="Item 19" />
            <ListItem text="Item 20" />
            <ListItem text="Item 21" />
            <ListItem text="Item 22" />
            <ListItem text="Item 23" />
            <ListItem text="Item 24" />
            <ListItem text="Item 25" />
            <ListItem text="Item 26" />
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
            <ListItem text="Item 11" />
            <ListItem text="Item 12" />
            <ListItem text="Item 13" />
            <ListItem text="Item 14" />
            <ListItem text="Item 15" />
            <ListItem text="Item 16" />
            <ListItem text="Item 17" />
            <ListItem text="Item 18" />
            <ListItem text="Item 19" />
            <ListItem text="Item 20" />
            <ListItem text="Item 21" />
            <ListItem text="Item 22" />
            <ListItem text="Item 23" />
            <ListItem text="Item 24" />
            <ListItem text="Item 25" />
            <ListItem text="Item 26" />
                        <ListItem text="Item 2" />
            <ListItem text="Item 3" />
            <ListItem text="Item 4" />
            <ListItem text="Item 5" />
            <ListItem text="Item 6" />
            <ListItem text="Item 7" />
            <ListItem text="Item 8" />
            <ListItem text="Item 9" />
            <ListItem text="Item 10" />
            <ListItem text="Item 11" />
            <ListItem text="Item 12" />
            <ListItem text="Item 13" />
            <ListItem text="Item 14" />
            <ListItem text="Item 15" />
            <ListItem text="Item 16" />
            <ListItem text="Item 17" />
            <ListItem text="Item 18" />
            <ListItem text="Item 19" />
            <ListItem text="Item 20" />
            <ListItem text="Item 21" />
            <ListItem text="Item 22" />
            <ListItem text="Item 23" />
            <ListItem text="Item 24" />
            <ListItem text="Item 25" />
            <ListItem text="Item 26" />
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
            <ListItem text="Item 11" />
            <ListItem text="Item 12" />
            <ListItem text="Item 13" />
            <ListItem text="Item 14" />
            <ListItem text="Item 15" />
            <ListItem text="Item 16" />
            <ListItem text="Item 17" />
            <ListItem text="Item 18" />
            <ListItem text="Item 19" />
            <ListItem text="Item 20" />
            <ListItem text="Item 21" />
            <ListItem text="Item 22" />
            <ListItem text="Item 23" />
            <ListItem text="Item 24" />
            <ListItem text="Item 25" />
            <ListItem text="Item 26" />
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
            <ListItem text="Item 11" />
            <ListItem text="Item 12" />
            <ListItem text="Item 13" />
            <ListItem text="Item 14" />
            <ListItem text="Item 15" />
            <ListItem text="Item 16" />
            <ListItem text="Item 17" />
            <ListItem text="Item 18" />
            <ListItem text="Item 19" />
            <ListItem text="Item 20" />
            <ListItem text="Item 21" />
            <ListItem text="Item 22" />
            <ListItem text="Item 23" />
            <ListItem text="Item 24" />
            <ListItem text="Item 25" />
            <ListItem text="Item 26" />
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
            <ListItem text="Item 11" />
            <ListItem text="Item 12" />
            <ListItem text="Item 13" />
            <ListItem text="Item 14" />
            <ListItem text="Item 15" />
            <ListItem text="Item 16" />
            <ListItem text="Item 17" />
            <ListItem text="Item 18" />
            <ListItem text="Item 19" />
            <ListItem text="Item 20" />
            <ListItem text="Item 21" />
            <ListItem text="Item 22" />
            <ListItem text="Item 23" />
            <ListItem text="Item 24" />
            <ListItem text="Item 25" />
            <ListItem text="Item 26" />
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

export default Modal;