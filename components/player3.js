import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';

export default class Player3 extends Component{
    constructor(props){
        super(props);
        this.state = { beads: 4, cards: [1,2,3,4,5], score: 0};
    }  

    componentDidMount(){
        console.log(this.state)
    }

    render () {
        return (
            <View style={styles.container}>
                <Text>Player3</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        // backgroundColor: 'red'
    },
    currCardText:{
        
    },
    beads:{
        color: 'white'
    }
})
