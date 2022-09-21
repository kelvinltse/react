import React, { useState } from 'react'
import './App.css'

export default function App() {
//function App() {
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
//set state with const
  const [temperature, setTemperature] = useState(65);
  const [thermStyle, setThermStyle] = useState({backgroundColor: tempColors.sixty}); //tempColors needed to be initialized first to be used in initial state


  function setColor(temp) {  //background colors as const

    if (temp < 10) {setThermStyle({backgroundColor: tempColors.zero});} else 
    if (temp < 20) {setThermStyle({backgroundColor: tempColors.ten});} else 
    if (temp < 30) {setThermStyle({backgroundColor: tempColors.twenty});} else 
    if (temp < 40) {setThermStyle({backgroundColor: tempColors.thirty});} else 
    if (temp < 50) {setThermStyle({backgroundColor: tempColors.forty});} else 
    if (temp < 60) {setThermStyle({backgroundColor: tempColors.fifty});} else 
    if (temp < 70) {setThermStyle({backgroundColor: tempColors.sixty});} else 
    if (temp < 80) {setThermStyle({backgroundColor: tempColors.seventy});} else 
    if (temp < 90) {setThermStyle({backgroundColor: tempColors.eighty});} else 
    if (temp < 100) {setThermStyle({backgroundColor: tempColors.ninety});} else 
    {setThermStyle({backgroundColor: tempColors.hundred});} 
  }

  function decrease() { //solve for async state updates by having newTemp and setting color based on it
    const newTemp = temperature - 1;
    setTemperature(newTemp);
    setColor(newTemp);
  }

  function increase() {
    const newTemp = temperature + 1;
    setTemperature(newTemp);
    setColor(newTemp);
    //this.setState({ temperature: this.state.temperature + 1 }, this.setColor); //solves for async setState by passing setColor as callback
  }


  return ( //return the render here
    <div className='thermostatUI' style={thermStyle}> 
      <div className='temp'>
        {temperature} &#176;F
      </div>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
    //<button>test??</button>
  );
}