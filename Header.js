import React,{Component} from "react";
import {View,Text,StyleSheet,Image} from "react-native"
const logo = require("./images/logo.png")

export default class Header extends Component{

    render(){
        return(

            <View style={styles.header}>
                <Image source= {logo} style = {styles.image}/>
                 <Text style = { styles.text}>
                    {this.props.title}
                </Text>      
            </View>
        )
    }
}

const styles = StyleSheet.create (
    {
        header: {
            flexDirection:"row",
            backgroundColor:"pink",
            width:'100%',
            height: 50,
            justifyContent:"center",
            alignItems:"center" 
        },
        image:{
            width:40,
            height:40,
            
        },
        text: {
            fontSize:30,
            fontWeight:"700",
            color:"white",
            alignSelf:"center"
        }
    }
)