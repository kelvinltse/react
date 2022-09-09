import { Component } from 'react'
import './App.css'

export default function App() {
  return (
    <main>
      <Thermostat />
    </main>
  )
}

class Thermostat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 65,
      thermStyle: {
        backgroundColor: 'green'
      }
    };
  }

  setColor = () => { 
    if (this.state.temperature < 60) {
      this.setState({ thermStyle: {backgroundColor: 'blue'}});
    } else if (this.state.temperature <70) {
      this.setState({ thermStyle: {backgroundColor: 'green'}});
    } else {
      this.setState({thermStyle: {backgroundColor: 'red'}});
    } 
    console.log(this.state.temperature);
  }

  decrease = () => {
    this.setState({ temperature: this.state.temperature - 1 }, this.setColor); //solves for async setState by passing setColor as callback
    console.log(this.state.temperature); //temperature state shows original temp rather than new temperature
  }

  increase = () => {
    this.setState({ temperature: this.state.temperature + 1 }, this.setColor);
    console.log(this.state.temperature);
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
