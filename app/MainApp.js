import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

class MainApp extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isPressed: false
    };
  }

  _togglePress() {
    this.setState({isPressed: !this.state.isPressed});
  }

  render() {
    const pressed = this.state.isPressed ? "YES" : "NO";

    return (
      <View style={styles.container}>
        <Text>Pressed: {pressed}</Text>
        <TouchableOpacity style={{backgroundColor: 'green'}} onPress={this._togglePress.bind(this)} >
          <Text>Press Me</Text>
        </TouchableOpacity>
        <Text>If you're on mobile - you'll probably need to click here</Text>
        <Text>Despite the fact that I'm just text</Text>
        <Text>Isn't this weird?</Text>
        <TextInput style={{width: 20, minWidth: 20}} value="I'm long text input"/>
        <Text>And this is textInput that doesn't support minWidth property</Text>
        <Text>Which is sad, especially on mobile devices</Text>
        <Text>As minWidth by default is 64 px :(</Text>
        <Text style={{olor: 'red'}}>BTW, why there is a top margin of appx 22px at the top?</Text>
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
  }
});

export default MainApp;