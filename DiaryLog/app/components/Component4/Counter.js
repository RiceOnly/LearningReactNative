import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: this.props.count
        }
    }
    static defaultProps = {
        count: 0
    }

    render(){
        return(
            <View>
                <Text>
                    {this.state.count}
                </Text>
            </View>
        );
    }
}
AppRegistry.registerComponent('Counter', () => Counter);