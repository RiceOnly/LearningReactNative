import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';

import Component3 from './app/components/Component3/Component3';
import Component1 from './app/components/Component1/Component1';
import Calculator from './app/components/Component3/Calculator';

export default class DiaryLog extends Component{
  render(){
    return(
      <View>
        {/* <Component3 /> */}
       {/* <Bananas/> */}
       {/* <Component1/> */}
       <Calculator />
      </View>
    );
  }
}

class Bananas extends Component{
  render(){
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return(
      <Image source={pic} style={{width: 400, height: 300}} /> 
    );
  }
}

AppRegistry.registerComponent('DiaryLog', ()=> DiaryLog);