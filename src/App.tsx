import React from 'react';
import './App.css';
import { ThemeProvider } from "@mui/material";
import theme from './consts/temaConfig';
import Componente from './components/common/Drawer';


function App() {
  return (
    <ThemeProvider theme={theme}>

      <Componente />

    </ThemeProvider>

  );
}

export default App;
