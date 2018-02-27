import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Button, TouchableNativeFeedback } from 'react-native';

export default class CalculatorButtons extends Component{
    constructor(props){
        super(props);
        this.state = {
            leftOperand: ''
        }
    }

    onPressButton(operand){
        this.setState({
            leftOperand: operand
        })
        if(operand != '+'){
            this.props.leftOperand(operand)
        }else{
            var operator = this.state.leftOperand
            operator = operator + operand
            this.setState({
                leftOperand: operator
            })
            this.props.leftOperand(operator)

        }
    }
    render(){
        console.log('This the the state of the left operand: ' + this.state.leftOperand)
        return(
            <View style={styles.calculatorContainter}>
                <View style={styles.firstRowContainer}>
                    <View style={{height: 50, width: 70, padding: 6, backgroundColor: 'grey'}}>       
                        <Button title='7' color='silver' onPress={() => this.onPressButton(7)}/>
                    </View>
                    <View style={{height: 50, width: 70, padding: 6, backgroundColor: 'grey'}}>       
                        <Button title='8' color='silver' onPress={() => this.onPressButton(8)}/>
                    </View>
                    <View style={{height: 50, width: 70, padding: 6, backgroundColor: 'grey'}}>       
                        <Button title='9' color='silver' onPress={() => this.onPressButton(9)}/>
                    </View>
                </View>
                
                <View style={styles.secondRowContainer}>
                    <View style={{height: 50, width: 70, padding: 6, backgroundColor: 'grey'}}>       
                        <Button title='4' color='silver'/>
                    </View>
                    <View style={{height: 50, width: 70, padding: 6, backgroundColor: 'grey'}}>       
                        <Button title='5' color='silver'/>
                    </View>
                    <View style={{height: 50, width: 70, padding: 6, backgroundColor: 'grey'}}>       
                        <Button title='6' color='silver'/>
                    </View>
                    <View style={{height: 50, width: 70, padding: 6, backgroundColor: 'grey'}}>
                        <Button title='-' color='silver' onPress={() => this.onPressButton('-')}/>
                    </View>
                </View>

                <View style={styles.thirdRowContainer}>
                    <View style={{height: 50, width: 70, padding: 6, backgroundColor: 'grey'}}>       
                        <Button title='1' color='silver'/>
                    </View>
                    <View style={{height: 50, width: 70, padding: 6, backgroundColor: 'grey'}}>       
                        <Button title='2' color='silver'/>
                    </View>
                    <View style={{height: 50, width: 70, padding: 6, backgroundColor: 'grey'}}>       
                        <Button title='3' color='silver'/>
                    </View>
                    <View style={{height: 50, width: 70, padding: 6, backgroundColor: 'grey'}}>       
                        <Button title='+' color='silver' onPress={() => this.onPressButton('+')}/>
                    </View>
                </View>

                {/* <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{width: 150, height: 100, backgroundColor: 'blue'}}>
                        <Text style={styles.textStyles}>MyButton</Text>
                    </View>
                </TouchableNativeFeedback> */} 
            </View>
        );
    }
}
const styles = StyleSheet.create({
    calculatorContainter: {
        flexDirection: 'column',
        backgroundColor: 'green',
        padding: 2,  
        
    },
    firstRowContainer:{
        flexDirection: 'row',
        backgroundColor: 'red',
        padding: 9,
    },
    secondRowContainer:{
        flexDirection: 'row',
        backgroundColor: 'yellow',
        padding: 9
    },
    thirdRowContainer:{
        flexDirection: 'row',
        backgroundColor: 'purple',
        padding: 9
    },
    textStyles: {
        textAlign: 'center', 
        color: 'white', 
        padding: 8, 
        backgroundColor:'red',
        fontWeight: '500',
    }
})

AppRegistry.registerComponent('CalculatorButtons', () => CalculatorButtons);