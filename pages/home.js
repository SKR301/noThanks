import React, { Component } from 'react';
import { Image, View, StyleSheet, Text, Touchable, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import board from '../assets/board.png';

export default class Home extends Component{
    constructor(props){
        super(props);
    }  

    render () {
        
        return (
            <View>
                <Image style={styles.image} blurRadius={10}>
                    {/* <View style={styles.cntMode}>
                        <TouchableOpacity 
                            onPress={()=>{console.log('redirect to single player page')}}
                            style={styles.btnMode}
                        >
                            <Text>SinglePlayer</Text>
                        </TouchableOpacity>
                    </View> */}
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        backgroundImage:`url(${board})`,
        flex: 1,
        position: 'absolute',
        resizeMode: 'cover',
        marginHorizontal: 10,
        marginVertical: 50,
        width: 1822,
        height: 898
      },
    btnMode:{
        backgroundColor: 'skyblue',
        width: 500,
        height: 100,
        padding: 20,
        textAlign: 'center'
    },
})