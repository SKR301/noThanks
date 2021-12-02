import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';

export default class Winner extends Component{
    constructor(props){
        super(props);
        console.log(this.props.scores);
    }  
    render(){
        return(
            <View>
                <Text>WINNER</Text>
            </View>
        );
    }
}

