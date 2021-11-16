import React from 'react';
import logo from './logo.svg';
import './App.css';
import { styled } from '@mui/material/styles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Bien venidos a la App React
        </p>
        <button  >Inicio</button>

      </header>
    </div>
  );
}

export default App;
