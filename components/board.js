import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';

export default class Board extends Component{
    constructor(props){
        super(props);
        this.state = { beads: 0, cards: Array(35 - 3 + 1).fill().map((item, index) => 3 + index), currCard: 0 };

        this.drawCard = this.drawCard.bind(this);
    }  

    componentDidMount(){
    }

    drawCard(){
        var index = Math.floor(Math.random() * this.state.cards.length);
        this.setState({beads: 0, cards: this.state.cards.filter( (ele) => { return (ele != this.state.currCard) }), currCard: (this.state.cards[index] != undefined)? this.state.cards[index]: 0})
        console.log(this.state.cards);
    }

    render () {
        if(this.state.currCard == 0){
            return (
                <View style={styles.container}>
                    <TouchableOpacity style={styles.currCard} onPress={this.drawCard} disabled={!(this.state.currCard==0)}>
                        <Text style={styles.currCardText}>{this.state.currCard}</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <TouchableOpacity style={styles.currCard} onPress={this.drawCard} disabled={!(this.state.currCard==0)}>
                        <Text style={styles.currCardText}>{this.state.currCard}</Text>
                    </TouchableOpacity>
                    <View style={styles.beadsContainer}>
                        <Text style={styles.beads}>{this.state.beads}</Text>
                    </View>
                </View>
            );

        }
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    currCard:{
        borderColor: 'yellow',
        borderWidth: 10,
        borderRadius: 10,
        width: 100,
        height: 150,
        justifyContent: 'center',
    },
    currCardText:{
        color: 'white',
        alignSelf: 'center',
        fontSize: 50
    },
    beadsContainer:{
        borderColor: 'dodgerblue',
        borderWidth: 5,
        borderRadius: 100,
        height: 100,
        width: 100,
        marginTop: 10,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    beads:{
        color: 'white',
        alignSelf: 'center',
        fontSize: 50
    }
})
