import { Component } from 'react'
import './App.css'

export default function App() {
  return (
    <main>
      <Thermostat />
    </main>
  )
}

const tempColors = { //background colors as const
  hundred: '#de0000',
  ninety: '#e7001f',
  eighty: '#ee0036',
  seventy: '#f0004e',
  sixty: '#ed0068',
  fifty: '#e40085',
  forty: '#d200a4',
  thirty: '#b500c4',
  twenty: '#8700e2',
  ten: '#0000ff',
  zero: '#000000',
};

class Thermostat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 65,
      thermStyle: {
        backgroundColor: tempColors.sixty
      }
    };
  }

  setColor = () => {  //background colors as const
    let temp = this.state.temperature;
    if (temp < 10) {this.setState({ thermStyle: {backgroundColor: tempColors.zero}});} else 
    if (temp < 20) {this.setState({ thermStyle: {backgroundColor: tempColors.ten}});} else 
    if (temp < 30) {this.setState({ thermStyle: {backgroundColor: tempColors.twenty}});} else 
    if (temp < 40) {this.setState({ thermStyle: {backgroundColor: tempColors.thirty}});} else 
    if (temp < 50) {this.setState({ thermStyle: {backgroundColor: tempColors.forty}});} else 
    if (temp < 60) {this.setState({ thermStyle: {backgroundColor: tempColors.fifty}});} else 
    if (temp < 70) {this.setState({ thermStyle: {backgroundColor: tempColors.sixty}});} else 
    if (temp < 80) {this.setState({ thermStyle: {backgroundColor: tempColors.seventy}});} else 
    if (temp < 90) {this.setState({ thermStyle: {backgroundColor: tempColors.eighty}});} else 
    if (temp < 100) {this.setState({ thermStyle: {backgroundColor: tempColors.ninety}});} else 
    {this.setState({ thermStyle: {backgroundColor: tempColors.hundred}});}
  }

  decrease = () => {
    this.setState({ temperature: this.state.temperature - 1 }, this.setColor); //solves for async setState by passing setColor as callback
  }

  increase = () => {
    this.setState({ temperature: this.state.temperature + 1 }, this.setColor);
  }

  render() {
    return (
      <div className='thermostatUI' style={this.state.thermStyle}>
        <div className='temp'>
          {this.state.temperature} &#176;F
        </div>
        <button onClick={this.decrease}>-</button>
        <button onClick={this.increase}>+</button>
      </div>
    );
  }

}
