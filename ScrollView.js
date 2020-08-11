import React,{Component} from "react";
import {View,Text,StyleSheet,Image} from "react-native"



export default class ScrlView extends Component{

    render(){
        return(
            <View style={{height:200,width:230,marginLeft:20,borderWidth:1,borderRadius:25, backgroundColor:'pink'}}>
                                    <View style={{flex:3}}>
                                       <Image source = {this.props.scrlPic} style={{flex:1,width:228,borderTopLeftRadius:24,borderTopRightRadius:25}}/>
                                           
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={{fontSize:20,alignSelf:"center",marginTop:10,fontWeight:"600"}}>
                                           {this.props.scrltext}
                                        </Text>
                                    </View>
                                </View>
        )
    }
}