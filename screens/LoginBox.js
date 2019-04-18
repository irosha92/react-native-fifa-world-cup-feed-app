import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

//Login Box
class LoginBox extends Component {

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
      setTimeout(() => {
        this.props.dispatch({
          type: 'LOGIN_SUCCESS'
        })
      }, 1000);
      this.props.dispatch({
        type: 'LOADING'
      });
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

export default connect()(LoginBox);