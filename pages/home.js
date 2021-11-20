import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import board from '../assets/board_blur.png';
import ModeSelect from '../components/modeSelect';

export default class Home extends Component{
    constructor(props){
        super(props);
    }  

    render () {
        return (
            <View style={styles.body}>
                <ImageBackground style={styles.image}>
                    <ModeSelect />
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body:{
        backgroundColor: '#29292a',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    image: {
        backgroundImage:`url(${board})`,
        borderRadius: 25,
        flex: 1,
        position: 'absolute',
        marginHorizontal: 10,
        marginVertical: 50,
        width: 1822,
        height: 898
    }
})