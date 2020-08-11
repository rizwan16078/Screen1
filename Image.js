import React , {Component} from 'react';
import {Image, StyleSheet} from 'react-native';

const pic2 = require("./images/pic2.jpg")

export default class Img extends Component{

    render(){
        return (
            <Image source = {this.props.pic} style={{flex:1,width:130}}/>
        )
    }
}