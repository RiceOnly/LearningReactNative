import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Component1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'Aaron',
            showName: true,
            message: this.props.message
        }
    }

    static defaultProps = {
      message: 'Hi There'
    }
  render(){
      // If this.state.name is true, then set name to 
      // whatever is after the '?', 
      // If not, then set it to whatever is after the 
      // ':'
      let name = this.state.showName ? this.state.name : 'No name';
    return(
      <View>
        <Text>{this.state.message}</Text>
        <Text>{name}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component1', ()=> Component1);