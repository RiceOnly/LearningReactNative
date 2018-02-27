import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Display extends Component{
    constructur(props){
        super(props);
        this.state = {
            leftOperand: this.props.leftOperand,
            operator: this.props.operator,
            rightOperand: this.props.rightOperan,
            ans: this.props.ans
        }
    }

    render(){
        return(
            <View>
                <Text>
                    {this.state.leftOperand} {this.state.operator} {this.state.rightOperand}
                </Text>
                <Text>
                    {this.state.ans}
                </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('Display', () => Display);