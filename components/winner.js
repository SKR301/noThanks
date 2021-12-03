import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';

export default class Winner extends Component{
    constructor(props){
        super(props);
        this.state = {winner: 0};
    }  

    componentDidMount(){
        var pos = 1;
        var min = this.props.scores['1'];
        for(var a=1; a<5; a++){
            if(this.props.scores[a] < min){
                pos = a;
                min = this.props.scores[a];
            }
        }

        this.setState({winner: pos});
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.winnerTextContainer}>
                    <Text style={styles.winnerText}>¡¡¡ win !!!</Text>
                </View>
                <View style={styles.scoreCard}>
                    <View style={(this.state.winner == 1)?styles.playerScoreContainerWinner:styles.playerScoreContainer}>
                        <Text style={(this.state.winner == 1)?styles.playerScoreTextWinner:styles.playerScoreText}>{this.props.scores['1']}</Text>
                    </View>
                    <View style={(this.state.winner == 2)?styles.playerScoreContainerWinner:styles.playerScoreContainer}>
                        <Text style={(this.state.winner == 2)?styles.playerScoreTextWinner:styles.playerScoreText}>{this.props.scores['2']}</Text>
                    </View>
                    <View style={(this.state.winner == 3)?styles.playerScoreContainerWinner:styles.playerScoreContainer}>
                        <Text style={(this.state.winner == 3)?styles.playerScoreTextWinner:styles.playerScoreText}>{this.props.scores['3']}</Text>
                    </View>
                    <View style={(this.state.winner == 4)?styles.playerScoreContainerWinner:styles.playerScoreContainer}>
                        <Text style={(this.state.winner == 4)?styles.playerScoreTextWinner:styles.playerScoreText}>{this.props.scores['4']}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'cloumn',
        justifyContent: 'center'
    },
    winnerTextContainer:{
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    winnerText:{
        fontSize: 100,
        color: 'white'
    },
    scoreCard:{
        flex: 5,
        flexDirection: 'row',
        marginHorizontal: 50,
    },
    playerScoreContainer:{
        flex: 2,
        borderColor: 'indianred',
        borderWidth: 5,
        borderRadius: 25,
        marginHorizontal: 10,
        marginTop: 50,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    playerScoreText:{
        color: 'yellow',
        fontSize: 75,

    },
    playerScoreContainerWinner:{
        flex: 4,
        borderColor: 'palegreen',
        borderWidth: 5,
        borderRadius: 50,
        marginHorizontal: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    playerScoreTextWinner:{
        color: 'aqua',
        fontSize: 200,
    },


})

