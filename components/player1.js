import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';

export default class Player1 extends Component{
    constructor(props){
        super(props);
        this.state = { beads: 4, cards: [1,2,3,4,5,6,7,8,9,0], score: 0};
    }  

    componentDidMount(){
        console.log(this.state)
    }

    render () {
        return (
            <View style={styles.container}>
                {
                    <Text style={styles.beads}>{this.state.beads}</Text>
                }
                <View style={styles.cardContainer}>
                    {
                        this.state.cards.map((card) => (
                            <Text key={card} style={styles.cardText}>{card}</Text>
                        ))
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
    },
    // cardContainer:{
    //     flex: 4,
    //     flexDirection: 'row',
    // },
    // cardText:{
    //     flex: 1,
    //     color: 'yellow',
    //     borderColor: 'blue',
    //     borderWidth: 2
    // },
    // beadsContainer:{
    //     flex: 1,
    // },
    // beads:{
    //     flex: 1,
    //     color: 'white'
    // }
})
