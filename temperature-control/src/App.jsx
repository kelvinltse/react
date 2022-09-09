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
    };
  }

  increase = () => {
    this.setState({ temperature: this.state.temperature + 1 });
  }

  decrease = () => {
    this.setState({ temperature: this.state.temperature - 1 });
  }

  render() {
    return (
      <div className='thermostatUI'>
        <div className='temp'>
          {this.state.temperature} &#176;F
        </div>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }

}
