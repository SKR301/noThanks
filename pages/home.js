import React, { Component } from 'react';
import { Image, View, StyleSheet, Text, Touchable, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import board from '../assets/board_blur.png';

export default class Home extends Component{
    constructor(props){
        super(props);
    }  

    render () {
        return (
            <View style={styles.body}>
                <ImageBackground style={styles.image}>
                    <View style={styles.cntMode}>
                        <TouchableOpacity 
                            onPress={()=>{console.log('redirect to single player page')}}
                            onMouseEnter
                            style={styles.btnMode}
                        >
                            <Text style={styles.txtMode}>Single Player</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=>{console.log('redirect to multi player page')}}
                            style={styles.btnMode}
                        >
                            <Text style={styles.txtMode}>Multi Player</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=>{console.log('redirect to bot play page')}}
                            style={styles.btnMode}
                        >
                            <Text style={styles.txtMode}>Bot Play</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
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
    image: {
        backgroundImage:`url(${board})`,
        borderRadius: 25,
        flex: 1,
        position: 'absolute',
        marginHorizontal: 10,
        marginVertical: 50,
        width: 1822,
        height: 898
    },
    cntMode:{
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems:'center',
    },
    btnMode:{
        backgroundColor: 'blue',
        width: 400,
        height: 100,
        textAlign: 'center',
        borderRadius: 20,
        borderColor: 'yellow',
        borderWidth: 5,
        marginVertical: 10
    },
    txtMode:{
        fontSize: 50,
        color: 'white',
        padding: 10

    }
})