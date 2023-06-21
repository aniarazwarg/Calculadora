
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './componetes/Botao';
import Display from './componetes/Display';

const initialState ={
  displayValue:'0',
  clearDisplay:false,
  operation:null,
  values:[0,0],
  current:0
}

export default class App extends Component{



  state = {
    // displayValue:'0'
    // nao era mais necessário pois a constante initial state já faz isso
    ...initialState
  }

  addDigit = n =>{
    // this.setState({displayValue: n})

    const clearDisplay = this.state.displayValue ==='0' || this.state.clearDisplay 
    if(n==='.'&& !clearDisplay && this.state.displayValue.includes('.')){
      return
    }

    

  }

  clearMemory = () =>{
    this.setState({displayValue: '0'}) 
  }
  setOperation = operation =>{


  }
  render(){
  return (
    <View style={styles.container}>
      <Display value={this.state.displayValue}></Display>
      <View style={styles.buttons}>
        <Botao label="AC" triple onClick={this.clearMemory}></Botao>
        <Botao label="/" operation ></Botao>
        <Botao label="7"onClick={() => this.addDigit(7)}></Botao>
        <Botao label="8"onClick={() => this.addDigit(8)}></Botao>
        <Botao label="9"onClick={() => this.addDigit(9)}></Botao>
        <Botao label="*"operation></Botao>
        <Botao label="4"onClick={() => this.addDigit(4)}></Botao>
        <Botao label="5"onClick={() => this.addDigit(5)}></Botao>
        <Botao label="6"onClick={() => this.addDigit(6)}></Botao>
        <Botao label="-" operation></Botao>
        <Botao label="1"onClick={() => this.addDigit(1)}></Botao>
        <Botao label="2"onClick={() => this.addDigit(2)}></Botao>
        <Botao label="3"onClick={() => this.addDigit(3)}></Botao>
        <Botao label="+" operation></Botao>
        <Botao label="0"onClick={() => this.addDigit(0)} double></Botao>
        <Botao label="." ></Botao>
        <Botao label="=" operation></Botao>

      </View>
      
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons:{
    flexDirection :'row',
    flexWrap:'wrap',
  }
});

