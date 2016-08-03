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

  constructor(props) {
    super(props);

    this.state = {
      selectedItem: null
    }
  }

  _selectItem(item) {
    this.setState({
      selectedItem: item
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.onClose()} >
          <Text>Close Small Modal</Text>
        </TouchableOpacity>
        <View>
          <Text>Selected Item: {this.state.selectedItem}</Text>
        </View>
        <ScrollView style={styles.ScrollView}>
            <ListItem text="Item 1" onPress={this._selectItem.bind(this)} />
            <ListItem text="Item 2" onPress={this._selectItem.bind(this)} />
            <ListItem text="Item 3" onPress={this._selectItem.bind(this)} />
            <ListItem text="Item 4" onPress={this._selectItem.bind(this)} />
            <ListItem text="Item 5" onPress={this._selectItem.bind(this)} />
            <ListItem text="Item 6" onPress={this._selectItem.bind(this)} />
            <ListItem text="Item 7" onPress={this._selectItem.bind(this)} />
            <ListItem text="Item 8" onPress={this._selectItem.bind(this)} />
            <ListItem text="Item 9" onPress={this._selectItem.bind(this)} />
            <ListItem text="Item 10" onPress={this._selectItem.bind(this)} />
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
    position: 'absolute',
    top: 200,
    left: -100
  },

  ScrollView: {
      marginTop: 20,
      width: 400,
      height: 300,
      backgroundColor: 'green'
  } 
});

export default SmallModal;