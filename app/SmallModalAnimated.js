import React, { Component } from 'react';
import {
  Animated,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

import ListItem from './ListItem';

class SmallModalAnimated extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedItem: null,
      isVisible: false
    }

    this.offsetTop = new Animated.Value(0);
  }

  componentDidMount() {
    this.setState({
      isVisible: true
    }, () => {
      Animated.spring(this.offsetTop, {
        toValue: 1,
        friction: 26,
        tension: 200,
        velocity: 1.5
      }).start();
    })
  }

  _selectItem(item) {
    this.setState({
      selectedItem: item
    })
  }

  _renderContent() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.onClose()} >
          <Text>Close Animated Modal</Text>
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
    )
  }

  render() {

    const translateY = this.offsetTop.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 200]
    })

    console.log({translateY})

    return (
      <Animated.View style={[styles.container, {transform: [{translateY}]}]}>
        {this.state.isVisible ? React.cloneElement(this._renderContent()) : <View />}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    position: 'absolute',
    left: -100,
    top: 0
  },

  ScrollView: {
      flex: 1,
      marginTop: 20,
      width: 400,
      height: 300,
      backgroundColor: 'green'
  }
});

export default SmallModalAnimated;