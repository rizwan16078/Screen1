import React , {Component} from 'react';
import {View, StyleSheet,Text} from 'react-native';
import {Button} from "native-base";

export default class Butn extends Component{
    render(){
        return(
            
            <Button style={styles.btn}>
                <Text style={styles.txt}>
                    {this.props.txt}
                </Text>
            </Button>
        )
    }
}

const styles = StyleSheet.create ({
    btn:{
        backgroundColor:"pink",
        borderRadius :15,
        width:200,
        alignSelf:"center",
        marginTop:20,
        justifyContent:"center" 
    },
    txt:{
        color:"white",
        fontSize:20,
        fontWeight:"700"    
    },
})