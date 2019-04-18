import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import AppNavigator from '../navigation/AppNavigator';
import LoginBox from './LoginBox';
import Loading from './Loading';

const mapStateToProps = state => ({
    isLoading: state.isLoading, 
    isUserLoggedIn: state.isUserLoggedIn
 });
  
//Login Box
class MainContainer extends Component {
    render() {
        if (this.props.isLoading) {
            return (
                <Loading />
            );
        } else {
            return (   
                !this.props.isUserLoggedIn ? <LoginBox /> : <AppNavigator />
            );
        }
    }
}

export default connect(mapStateToProps)(MainContainer);