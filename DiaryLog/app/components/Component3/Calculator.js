import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet} from 'react-native';

import Counter from '../Component4/Counter';
import PlusButton from '../Component4/PlusButton';
import MinusButton from '../Component4/MinusButton';
import CalculatorButtons from '../Component4/CalculatorButtons';

export default class Calculate extends Component{
    constructor(props){
        super(props);
        this.state = {
            operator: '',
            operand: 0,
            expression: '',
            RightOperand: 0,
            count: 0
        };
    }

    increaseCount = (upcount) => this.setState({count: upcount});
    decreaseCount = (downcount) => this.setState({count: downcount});

    render() {
        {/*console.log('This is in the calculator component, the count here is: ', this.state.count)*/}
        return(
            <View style={{flexDirection: 'column'}}>
                {/* <Display leftOperand='' operator='' rightOperand='' ans=''/> */}
                {/* <CalculatorButtons operand={this.state.operand} 
                electedValue={ (operand) => this.setState({operand})} /> */}
                {/* <Counter count={this.state.count} /> */}
                {/* Figure out why when i use the component it doesn't work */}
                <View style={styles.countContainer}>
                    <Text> {this.state.count} </Text>
                </View>
                <View style={{justifyContent: 'center', margin: 20}}>
                    <PlusButton count={this.state.count} increase={this.increaseCount}/>
                    <MinusButton count={this.state.count} decrease={this.decreaseCount}/>
                </View>

                <View style={{backgroundColor: 'pink', height: 100}}>
                    <Text style={{textAlign: 'center', fontSize: 50}}>
                        {this.state.expression}
                    </Text>
                </View>
                <View>
                    <CalculatorButtons expression={(tmpExpression) => this.setState({expression: tmpExpression})}/>
                </View>
                
                
            </View>
    
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    countContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 100,
        backgroundColor: 'skyblue'
    },
    detailContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
})
AppRegistry.registerComponent('Calculator', () => Calculator);