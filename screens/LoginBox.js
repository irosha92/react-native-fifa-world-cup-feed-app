import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

//Login Box
export default class LoginBox extends Component {

    constructor(props) {
      super(props);
      this.state = {
        username : '',
        password : ''
      };
      this.submitLogin = this.submitLogin.bind(this);
    }
  
    submitLogin(event) {
      event.preventDefault();
      this.setState({isLoginSubmitted : true})
      const { username, password } = this.state;
      Alert.alert('Credentials', `${username} + ${password}`);
    }

    render() {
      return (
        <View style={styles.container}>
          <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            placeholder={'Username'}
            style={styles.input}
          />
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
          />
          
          <Button
            title={'Login'}
            style={styles.input}
            onPress={this.submitLogin}
          />
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#ecf0f1'
    },
    input: {
      width: 300,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: 'black',
      marginBottom: 10
    }
});