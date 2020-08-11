import React,{Component} from "react";
import {View,TouchableOpacity,Text,StyleSheet,Image,TextInput, Alert} from "react-native"
import {Icon} from 'native-base'


export default class TxtInput extends Component{
    
    render(){
        // Alert.alert(this.props.value)
        return(
 
            <View style={{justifyContent:"center", borderWidth:2,height:45, width:'60%',borderColor:"pink", marginTop:20,borderRadius:10, alignSelf:'center'}}>

           <Icon name = {this.props.icn1} style={{color:"pink",position:"absolute",top:2,left:22}}
           />
            <TextInput
            style={{fontSize:13,paddingLeft:65,fontWeight:"700"}}
            placeholderTextColor={'pink'}
            placeholder= {this.props.Etext}  //can we style the placeholder text
            onChangeText={this.props.onChangeText}
            // value ={this.props.value} 
            secureTextEntry= {this.props.Etext==='Password'?true:false}
            autoCapitalize= 'words'
            autoCompleteType={this.props.Etext=='Email/UEsername'?'email':'password'}
            
            />
            
            <TouchableOpacity style ={{position:'absolute',top:8,right:12}}>
            {this.props.Etext==='Password'? <Icon name={'md-eye'} style={{color:'pink',fontSize:22}} />:false}
            </TouchableOpacity>
 </View>
            
        )
    }
}
