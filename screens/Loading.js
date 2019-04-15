import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Spinner } from 'native-base';

export default class Loading extends Component {
    render () {
        return (   
            <View style={styles.container}>
                <Spinner color={'black'} />
            <Text>
                {`©${new Date().getFullYear()} All Rights Reserved, Irosha Alahakoon`}
            </Text>
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
    },
  });

