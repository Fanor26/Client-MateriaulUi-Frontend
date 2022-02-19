import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/ThemeConfig";


import Contenedor from "./components/Contenedor";

import Primaria from "./components/Primaria";




import Loginpbp from './components/primaria/primeros/primerob/Loginpbp'
import Registerpbp from './components/primaria/primeros/primerob/Registerpbp'
import Contenedorpbp from './components/primaria/primeros/primerob/Contenedorpbp'

import Loginpcp from './components/primaria/primeros/primeroc/Loginpcp'
import Registerpcp from './components/primaria/primeros/primeroc/Registerpcp'
import Contenedorpcp from './components/primaria/primeros/primeroc/Contenedorpcp'

function App() {
  return (
    <ThemeProvider theme={theme}>
      
    <Router>
      <Route path="/" exact component={Contenedor} />

     
      <Route path="/primaria" exact component={Primaria} />


      <Route   path='/loginpbp' exact component={Loginpbp}/>
    <Route   path='/registerpbp' exact component={Registerpbp}/>
    <Route   path='/contenedorpbp' exact component={Contenedorpbp}/>


  <Route   path='/loginpcp' exact component={Loginpcp}/>
    <Route   path='/registerpcp' exact component={Registerpcp}/>
    <Route   path='/contenedorpcp' exact component={Contenedorpcp}/>
     
    </Router>
    </ThemeProvider>
  );
}

export default App;
