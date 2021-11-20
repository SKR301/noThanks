import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import Board from '../components/board';


export default class Single extends Component{
    constructor(props){
        super(props);

        this.state = {
            // board: new Board(),
            // players: {player1: new Player(),player2: new Player(),player3: new Player(),player4: new Player()}
        }
    }  

    componentDidMount(){
        console.log(this.state);
    }

    render () {
        return (
            <View style={styles.body}>
                {/* <ImageBackground style={styles.image}>
                    <Text style={styles.player1BeadsCount}>{this.state.players.player1.beads}</Text>
                    <Text style={styles.player2BeadsCount}>{this.state.players.player2.beads}</Text>
                    <Text style={styles.player3BeadsCount}>{this.state.players.player3.beads}</Text>
                    <Text style={styles.player4BeadsCount}>{this.state.players.player4.beads}</Text>
                </ImageBackground> */}
                <Board/>
                
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
    // image: {
    //     backgroundImage:`url(${board})`,
    //     borderRadius: 25,
    //     flex: 1,
    //     position: 'absolute',
    //     marginHorizontal: 10,
    //     marginVertical: 50,
    //     width: 1822,
    //     height: 898
    // },
    // player1BeadsCount:{
    //     marginTop: 40,
    //     marginLeft: 580,
    //     fontSize: 25,
    //     color: 'white',
    // },
    // player2BeadsCount:{
    //     marginTop: 750,
    //     marginLeft: 50,
    //     fontSize: 25,
    //     color: 'white',
    // },
    // player3BeadsCount:{
    //     marginTop: 808,
    //     marginLeft: 1301,
    //     fontSize: 25,
    //     color: 'white',
    // },
    // player4BeadsCount:{
    //     marginTop: 808,
    //     marginLeft: 1301,
    //     fontSize: 25,
    //     color: 'white',
    // }
});

