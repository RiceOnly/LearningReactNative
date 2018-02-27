import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput } from 'react-native';

export default class Component3 extends Component{
    constructor(){
        super();
        this.state = {
            textValue:'What up'
        }
    }

    onChangeText(value){
        this.setState({
            textValue:value
        });
    }

    onSubmit(){
        console.log('Input SUbmitted...');
    }

    render(){
        return(
            <View>
                <TextInput 
                    placeholder="Enter Text"
                    value={this.state.textValue}
                    onChangeText={(value) => this.onChangeText(value)}
                    onSubmitEditing={this.onSubmit}
                />
                <Text>{this.state.textValue}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('Component3', () => Component3);