import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import Board from '../components/board';
import Player1 from '../components/player1';
import Player2 from '../components/player2';
import Player3 from '../components/player3';
import Player4 from '../components/player4';


export default class Bot extends Component{
    constructor(props){
        super(props);

        this.state = {
            // board: new Board(),
            // players: {player1: new Player(),player2: new Player(),player3: new Player(),player4: new Player()}
        }
    }  

    componentDidMount(){
        // console.log(this.state);
    }

    render () {
        return (
            <View style={styles.body}>
                <View style={styles.board}>
                    <View style={styles.rowX}>
                        <View style={styles.colX}></View>
                        <View style={styles.col}><Player1 /></View>
                        <View style={styles.colX}></View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.colX}>
                            <Player2 />
                        </View>
                        <View style={styles.col}>
                            <Board />
                        </View>
                        <View style={styles.colX}>
                            <Player3 />
                        </View>
                    </View>

                    <View style={styles.rowX}>
                        <View style={styles.colX}></View>
                        <View style={styles.col}><Player4 /></View>
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
        margin: 20,
        borderColor: 'yellow',
        borderWidth: 5,
        borderRadius: 20
    },
    row:{
        flex: 0.6,
        flexDirection: 'row',
    },
    col:{
        flex: 0.6,
        // borderColor: 'white',
        // borderWidth: 2
    },
    colX:{
        flex: 0.2,
        // borderColor: 'white',
        // borderWidth: 2
    },
    rowX:{
        flex: 0.2,
        flexDirection: 'row',
    }
});

