import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Button, TouchableNativeFeedback } from 'react-native';

export default class CalculatorButtons extends Component{
    constructor(props){
        super(props);
        this.state = {
            expression: ''
        }
    }
    
    onPressButton(buttonClicked){
        var lngthOfExpression = this.state.expression.length
        {/*Appends the value clicked to the expression if it is not an equal operator*/}
        if (buttonClicked != '=') {
            var tempExpression = this.state.expression;
            var newExpression = tempExpression + buttonClicked;
            this.setState({
                expression: newExpression
            })
            this.props.expression(newExpression)
        }else {
            {/*It is an equal operator, do the calculation using operator precedence*/}
            var calculate = this.state.expression;
            {/*Look for multiplication or division and calculate that first*/}
            {/*7+7*/}
            while (calculate.indexOf('+')) {
                console.log('Do we get in here')
                var multiplyIndex = calculate.indexOf('+');
                {/*Do the calculation*/}
                var leftOperand = calculate[multiplyIndex - 1] ;
                var rightOperand = calculate[multiplyIndex + 1];
                var multipliedExpression =  Number(leftOperand) + Number(rightOperand)
                {/*Put new expression back in the old expression while removing the calculated values*/}
                {/*7+7*/} 
                var rightExpression = calculate.slice(multiplyIndex+2);
                console.log('This is the rightExp: ' + rightExpression);
                var leftExpression = calculate.slice(0, multiplyIndex-1);
                console.log('This is the leftExp: ' + leftExpression);
                var newExpression = leftExpression + String(multipliedExpression) + rightExpression;
                calculate = newExpression;
                console.log(calculate)
                break;
            }
            this.setState({
                expression: newExpression
            })
            this.props.expression(newExpression)
        }
    }
    render(){
        console.log('This the the state of the left operand: ' + this.state.expression)
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
                    <View style={{height: 50, width: 70, padding: 6, backgroundColor: 'grey'}}>
                        <Button title='=' color='silver' onPress={() => this.onPressButton('=')}/>
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