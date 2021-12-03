import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import Board from '../components/board';
import Player1 from '../components/player1';
import Player2 from '../components/player2';
import Player3 from '../components/player3';
import Player4 from '../components/player4';
import Winner from '../components/winner';


export default class Multi extends Component{
    constructor(props){
        super(props);

        this.state = {
            playerTurn: Math.floor(Math.random() * 4) + 1,
            currCard: 0,
            boardBeads: 0,
            endGame: false,
            endScore: {'1':0,'2':0,'3':'0',4:0},
        }
    }  

    componentDidMount(){
    }

    drawCard = (currCard, boardBeads) => {
        if(currCard == 0){
            this.setState({
                playerTurn: this.state.playerTurn, 
                currCard: currCard, 
                boardBeads: boardBeads,
                endGame: true,
                endScore: this.state.endScore
            });
        } else {
            this.setState({
                playerTurn: this.state.playerTurn, 
                currCard: currCard, 
                boardBeads: boardBeads,
                endGame: false,
                endScore: this.state.endScore,
            });
        }
    }

    playerChoice = (choice) => {
        if(choice == 'add'){
            this.setState({
                playerTurn: this.state.playerTurn,
                currCard: 0,
                boardBeads: 0,
                endGame: this.state.endGame,
                endScore: this.state.endScore,
            });
        }
        if(choice == 'pass'){
            this.setState({
                playerTurn: ((this.state.playerTurn + 1) % 5 == 0)? 1: (this.state.playerTurn + 1) % 5,
                currCard: this.state.currCard,
                boardBeads: this.state.boardBeads + 1,
                endGame: this.state.endGame,
                endScore: this.state.endScore,
            });
        }
    }

    calcScores = (playerIndex, score) => {
        var scores = this.state.endScore;
        if(playerIndex == 1){
            scores['1'] = score;
        }
        if(playerIndex == 2){
            scores['2'] = score;
        }
        if(playerIndex == 3){
            scores['3'] = score;
        }
        if(playerIndex == 4){
            scores['4'] = score;
        }

        this.setState({
            playerTurn: this.state.playerTurn,
            currCard: 0,
            boardBeads: 0,
            endGame: true,
            endScore: scores,
        });
    }

    render () {
        return (
            <View style={styles.body}>
                <View style={styles.board}>
                    <View style={styles.rowX}>
                        <View style={styles.colX}></View>
                        <View style={styles.col}>
                            {
                                (this.state.playerTurn == 1)?<Player1 isMyTurn = {true} boardBeads = {this.state.boardBeads} currCard = {this.state.currCard} playerChoice = {this.playerChoice} endGame = {this.state.endGame} calcScores = {this.calcScores}/>:<Player1 isMyTurn = {false} endGame = {this.state.endGame} calcScores = {this.calcScores}/>
                            }
                        </View>
                        <View style={styles.colX}></View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.colX}>
                            {
                                (this.state.playerTurn == 4)?<Player4 isMyTurn = {true} boardBeads = {this.state.boardBeads} currCard = {this.state.currCard} playerChoice = {this.playerChoice} endGame = {this.state.endGame} calcScores = {this.calcScores}/>:<Player4 isMyTurn = {false} endGame = {this.state.endGame} calcScores = {this.calcScores}/>
                            }
                        </View>
                        <View style={styles.col}>
                            {
                                (this.state.endGame)?<Winner scores = {this.state.endScore}/>:<Board drawCard = {this.drawCard} boardState = {this.state}/>
                            }
                        </View>
                        <View style={styles.colX}>
                            {
                                (this.state.playerTurn == 2)?<Player2 isMyTurn = {true} boardBeads = {this.state.boardBeads} currCard = {this.state.currCard} playerChoice = {this.playerChoice} endGame = {this.state.endGame} calcScores = {this.calcScores}/>:<Player2 isMyTurn = {false} endGame = {this.state.endGame} calcScores = {this.calcScores}/>
                            }
                        </View>
                    </View>

                    <View style={styles.rowX}>
                        <View style={styles.colX}></View>
                        <View style={styles.col}>
                            {
                                (this.state.playerTurn == 3)?<Player3 isMyTurn = {true} boardBeads = {this.state.boardBeads} currCard = {this.state.currCard} playerChoice = {this.playerChoice} endGame = {this.state.endGame} calcScores = {this.calcScores}/>:<Player3 isMyTurn = {false} endGame = {this.state.endGame} calcScores = {this.calcScores}/>
                            }
                        </View>
                        <View style={styles.colX}></View>
                    </View>
                </View>
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
    board:{
        flex: 1,
        marginVertical: 50,
        marginHorizontal: 10,
        borderColor: 'yellow',
        borderWidth: 5,
        borderRadius: 20
    },
    row:{
        flex: 0.6,
        flexDirection: 'row',
    },
    col:{
        flex: 0.6
    },
    colX:{
        flex: 0.2
    },
    rowX:{
        flex: 0.2,
        flexDirection: 'row',
    }
});

