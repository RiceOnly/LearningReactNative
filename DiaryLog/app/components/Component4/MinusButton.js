import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';

export default class MinusButton extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Button title='Decrease' 
                        onPress={ () => this.props.decrease(this.props.count - 1)}
                        color="#841584"
                        accessibilityLabel="Learn more about this"/>
            </View>
        );
    }
}

AppRegistry.registerComponent('MinusButton', () => MinusButton);