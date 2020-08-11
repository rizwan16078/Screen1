import React, {Component} from 'react';
import {View,Image,ScrollView, StyleSheet,Text,TouchableOpacity} from "react-native";
import {Icon} from 'native-base'
import Header from './Header';
import Button from './Button';
import Img from './Image'
import ScrlView from './ScrollView'
import TxtInput from './TextInput'


const pic1 = require("./images/pic1.jpg");
const pic2 = require("./images/pic2.jpg");
const pic3 = require ("./images/picture3.jpg");
const pic4 = require ("./images/picture4.jpg");
const google = require ("./images/google.png")



export default class MainApp extends Component {

    constructor(){

        super()
        this.state = {
            email:"",
            Password:""

        }
    }
    render(){
        return(

            <View>
                <Header 
                    title = "My Portfolio"
                />
                
                <ScrollView scrollEventThrottle= {16}>
                    <View style ={{flex:1 , }}>
                        <Text style={styles.toptext}>
                            Welcome
                        </Text>
                        <View style ={{hight:130,marginTop:20}}>
                            <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            >
                                <ScrlView
                                scrlPic = {pic1}
                                scrltext="Name"
                                />

                                <ScrlView
                                scrlPic = {pic2}
                                scrltext="Name"
                                />

                                <ScrlView
                                scrlPic = {pic3}
                                scrltext="Name"
                                />

                                <ScrlView
                                scrlPic = {pic4}
                                scrltext="Name"
                                />

                                <ScrlView
                                scrlPic = {pic1}
                                scrltext="Name"
                                />

                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>

                <TxtInput
                    icn1 = "md-person"
                    Etext = "Email/UEsername"
                    onChangeText = { email => this.setState({email})}
                    // value = {this.state.Email}
                />
                 <TxtInput
                    icn1 = "md-briefcase"
                    Etext = "Password"
                    onChangeText= {Password => this.setState({Password})}
                    
                />
                <Text>{this.state.email}</Text>

                <Button
                    txt = "Log In"
                />

               <View style={{justifyContent:'center',alignItems:"center", marginTop:20}}>
                   <Text style={{color:"pink",fontSize:20,fontWeight:"700"}}>
                       OR
                   </Text>
               </View>

                <View style={{borderRadius:25,borderWidth:1,borderColor:"pink", width:"70%",marginHorizontal:20,height:40, justifyContent:"center",alignItems:"center",alignSelf:"center",margin:20}}>
                <Image source = {google} style={{width:30,height:30, position:"absolute",left:23}} />
                
                    <TouchableOpacity style={{}}>

                            <Text style={{color:"pink"}}>SIGN UP WITH GOOGLE</Text>

                    </TouchableOpacity>



                </View>






                
            </View>


        )

    }
}

const styles = StyleSheet.create({
        toptext:{
            fontSize:50,
            fontWeight:"700",
            alignSelf:"center",
            marginTop:20,
            color:"pink"
        }
   
})