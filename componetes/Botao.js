import React from 'react';
import { StyleSheet, Text, TouchableHighlight,Dimensions  } from 'react-native';

const styles = StyleSheet.create({
    botao: {
        fontSize: 30,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding:20,
        backgroundColor:'#f0f0f0',
        textAlign:'center',
        borderWidth:1,
        borderColor:'#888',

    },
    operationButton:{
        color:'#fff',
        backgroundColor:'#fa8321',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width/4)*2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width/4)*3,
    }

})

export default props => {
    const styleButton = [styles.botao]
    if(props.double) styleButton.push(styles.buttonDouble)
    if(props.triple) styleButton.push(styles.buttonTriple)
    if(props.operation) styleButton.push(styles.operationButton)
    return(
        <TouchableHighlight onPress={props.onClick}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}