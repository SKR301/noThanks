import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';

export default class Board extends Component{
    constructor(props){
        super(props);
        this.state = { 
            beads: 0, 
            cards: Array(35 - 3 + 1).fill().map((item, index) => 3 + index), 
            currCard: 0 
        };
    }  

    componentDidMount(){
    }

    drawCard = () => {
        var index = Math.floor(Math.random() * this.state.cards.length);
        this.setState({
            beads: 0, 
            cards: this.state.cards.filter( (ele) => { return (ele != this.state.currCard) }), 
            currCard: (this.state.cards[index] != undefined)? this.state.cards[index]: 0
        }, () => {
            this.props.sendCurrCard(this.state.currCard);
        });
    }

    render () {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.currCard} onPress={this.drawCard} disabled={!(this.state.currCard==0)}>
                    <Text style={styles.currCardText}>{this.state.currCard}</Text>
                </TouchableOpacity>
            </View>
        );
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
    beads:{
        color: 'white'
    }
})
