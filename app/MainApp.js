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
import NoTextModal from './NoTextModal';
import AnimatedModal from './SmallModalAnimated';

class MainApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isOpenSmall: false,
      isOpenText: false,
      isOpenAnimated: false
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

  _toggleNoTextModal() {
    this.setState({
        isOpenText: !this.state.isOpenText
    }, () => {
        console.log({isOpenText: this.state.isOpenText})
    });
  }

  _toggleAnimatedModal() {
    this.setState({
        isOpenAnimated: !this.state.isOpenAnimated
    }, () => {
        console.log({isOpenAnimated: this.state.isOpenAnimated})
    });
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.isOpen ? <Modal onClose={this._toggleModal.bind(this)} /> : 
         <TouchableOpacity style={styles.button} onPress={this._toggleModal.bind(this)} >
          <Text>Open Large Modal</Text>
        </TouchableOpacity>}
        { this.state.isOpenText ? <NoTextModal onClose={this._toggleNoTextModal.bind(this)} /> : 
         <TouchableOpacity style={styles.button} onPress={this._toggleNoTextModal.bind(this)} >
          <Text>Open Large No Text Modal</Text>
        </TouchableOpacity>}
        { this.state.isOpenSmall ? <SmallModal onClose={this._toggleSmallModal.bind(this)} /> : 
         <TouchableOpacity style={styles.button} onPress={this._toggleSmallModal.bind(this)} >
          <Text>Open Small Modal</Text>
        </TouchableOpacity>}
        { this.state.isOpenAnimated ? <AnimatedModal onClose={this._toggleAnimatedModal.bind(this)} /> : 
         <TouchableOpacity style={styles.button} onPress={this._toggleAnimatedModal.bind(this)} >
          <Text>Open Animated Modal</Text>
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
    height: 40
  }
});

export default MainApp;