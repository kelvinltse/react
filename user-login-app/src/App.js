import { useState } from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

export default function App() {

  

  return (
    <div className="App">
     <h1>WELCOME TO MY LOGIN APP. I AM SIMPLE APP. CLICKY CLICK.</h1>
     <br></br>
     <LoginButton />
     <LogoutButton />
     <Profile />
    </div>
  );
}


