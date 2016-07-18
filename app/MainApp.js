import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Modal from './Modal';
import SmallModal from './SmallModal';

class MainApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isOpenSmall: false
    }
  }

  _toggleModal() {
    this.setState({
        isOpen: !this.state.isOpen
    }, () => {
        console.log({isOpen: this.state})
    });
  }

  _toggleSmallModal() {
    this.setState({
        isOpenSmall: !this.state.isOpenSmall
    }, () => {
        console.log({isOpenSmall: this.state.isOpenSmall})
    });
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.isOpen ? <Modal onClose={this._toggleModal.bind(this)} /> : 
         <TouchableOpacity style={styles.button} onPress={this._toggleModal.bind(this)} >
          <Text>Open Large Modal</Text>
        </TouchableOpacity>}
        { this.state.isOpenSmall ? <SmallModal onClose={this._toggleSmallModal.bind(this)} /> : 
         <TouchableOpacity style={styles.button} onPress={this._toggleSmallModal.bind(this)} >
          <Text>Open Small Modal</Text>
        </TouchableOpacity>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {

  }
});

export default MainApp;