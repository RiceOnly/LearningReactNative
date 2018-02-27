import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';

export default class PlusButton extends Component{
    constructor(props){
        super(props);

    }
    render(){
        console.log(this.props.count)
        return(
            <View>
                <Button title="increase" onPress={() => this.props.increase((this.props.count + 1))} />
            </View>
        );
    }
}
AppRegistry.registerComponent('PlusButton', () => PlusButton);

