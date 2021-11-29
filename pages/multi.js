import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import Board from '../components/board';
import Player1 from '../components/player1';
import Player2 from '../components/player2';
import Player3 from '../components/player3';
import Player4 from '../components/player4';


export default class Multi extends Component{
    constructor(props){
        super(props);

        this.state = {
            // playerTurn: Math.floor(Math.random() * 4) + 1,
            playerTurn: 1,
            currCard: 0,
            boardBeads: 0,
        }
    }  

    componentDidMount(){
    }

    drawCard = (currCard, boardBeads) => {
        this.setState({ 
            playerTurn: this.state.playerTurn, 
            currCard: currCard, 
            boardBeads: boardBeads 
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
                                (this.state.playerTurn == 1)?<Player1 isMyTurn = {true} boardBeads = {this.state.boardBeads} currCard = {this.state.currCard} />:<Player1 isMyTurn = {false}/>
                            }
                        </View>
                        <View style={styles.colX}></View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.colX}>
                            {
                                (this.state.playerTurn == 4)?<Player4 isMyTurn = {true}/>:<Player4 isMyTurn = {false}/>
                            }
                        </View>
                        <View style={styles.col}>
                            <Board drawCard = {this.drawCard}/>
                        </View>
                        <View style={styles.colX}>
                            {
                                (this.state.playerTurn == 2)?<Player2 isMyTurn = {true}/>:<Player2 isMyTurn = {false}/>
                            }
                        </View>
                    </View>

                    <View style={styles.rowX}>
                        <View style={styles.colX}></View>
                        <View style={styles.col}>
                            {
                                (this.state.playerTurn == 3)?<Player3 isMyTurn = {true}/>:<Player3 isMyTurn = {false}/>
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

