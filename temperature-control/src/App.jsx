import { Component } from 'react'
import './App.css'

export default function App() {
  return (
    <main>
      <Counter />
    </main>
  )
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  changeCounter(button) {
    var count = this.state.count;
    if (button == "plus") {
      count++;
    } else {
      count--;
    }
    this.setState({count: count});   
  }

  render() {
    return (
      <div>
        Current Count: {this.state.count}
        <Button direction="+" onBoop = {() => this.changeCounter("plus")}/>
        <Button direction="-"onBoop = {() => this.changeCounter("minus")}/>
      </div>
    );
  }
}

class Button extends Component {
  render(props) {
    return (
      <button onClick = {this.props.onBoop}>{this.props.direction}</button>
    )
  }
}

