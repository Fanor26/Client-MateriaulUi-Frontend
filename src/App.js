
import React from 'react';


import {BrowserRouter as Router, Route} from 'react-router-dom';


import Contenedor from './components/Contenedor'







import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/ThemeConfig";

import Inicial from './components/Inicial'
import Primaria from './components/Primaria'
import Secundaria from './components/Secundaria'




function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
    
    
  
    <Route   path='/' exact component={Contenedor}/>

  
   
    </Router>
    </ThemeProvider>
  );
}

export default App;
