import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';

export default class Player1 extends Component{
    constructor(props){
        super(props);
        this.state = { beads: 4, cards: [1,2,3,4,5], score: 0};
    }  

    componentDidMount(){
        console.log(this.state);
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.beadsContainer}>
                    <Text style={styles.beads}>{this.state.beads}</Text>
                </View>
                <View style={styles.cardContainer}>
                    {
                        this.state.cards.map((card) => (
                            <View style={(this.state.cards.length > 10)?styles.cardFlexed:styles.cardUnflexed}>
                                <Text key={card} style={styles.cardText}>{card}</Text>
                            </View>
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
        justifyContent: 'center'
    },
    cardContainer:{
        flex: 9,
        flexDirection: 'row',
        marginLeft: 100,
    },
    cardUnflexed:{
        width: 125,
        borderColor: 'yellow',
        backgroundColor: '#29292a',
        borderWidth: 2,
        borderRadius: 15,
        marginLeft: -50
    },
    cardFlexed:{
        flex: 1,
        borderColor: 'yellow',
        backgroundColor: '#29292a',
        borderWidth: 2,
        borderRadius: 15,
        marginLeft: -50
    },
    cardText:{
        flex: 1,
        color: 'white',
        padding: 15,
        fontSize: 30
    },
    beadsContainer:{
        flex: 1,
        borderColor: 'dodgerblue',
        borderWidth: 5,
        borderRadius: 100,
        height: 105,
        width: 100,
        marginHorizontal: 20,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    beads:{
        color: 'white',
        alignSelf: 'center',
        fontSize: 50
    }
})
