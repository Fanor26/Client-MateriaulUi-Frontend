import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/ThemeConfig";


import Contenedor from "./components/Contenedor";

import Primaria from "./components/Primaria";

import Secundaria from "./components/Secundaria";

import Loginpap from './components/primaria/primeros/primeroa/Loginpap'
import Registerpap from './components/primaria/primeros/primeroa/Registerpap'
import Contenedorpap from './components/primaria/primeros/primeroa/Contenedorpap'

import Loginpbp from './components/primaria/primeros/primerob/Loginpbp'
import Registerpbp from './components/primaria/primeros/primerob/Registerpbp'
import Contenedorpbp from './components/primaria/primeros/primerob/Contenedorpbp'

import Loginpcp from './components/primaria/primeros/primeroc/Loginpcp'
import Registerpcp from './components/primaria/primeros/primeroc/Registerpcp'
import Contenedorpcp from './components/primaria/primeros/primeroc/Contenedorpcp'


import Loginpas from './components/secundaria/primeros/primeroa/Loginpas'
import Registerpas from './components/secundaria/primeros/primeroa/Registerpas'
import Contenedorpas from './components/secundaria/primeros/primeroa/Contenedorpas'

import Loginpbs from './components/secundaria/primeros/primerob/Loginpbs'
import Registerpbs from './components/secundaria/primeros/primerob/Registerpbs'
import Contenedorpbs from './components/secundaria/primeros/primerob/Contenedorpbs'

import Loginpcs from './components/secundaria/primeros/primeroc/Loginpcs'
import Registerpcs from './components/secundaria/primeros/primeroc/Registerpcs'
import Contenedorpcs from './components/secundaria/primeros/primeroc/Contenedorpcs'


import Loginsas from './components/secundaria/segundos/segundoa/Loginsas'
import Registersas from './components/secundaria/segundos/segundoa/Registersas'
import Contenedorsas from './components/secundaria/segundos/segundoa/Contenedorsas'


import Logintas from './components/secundaria/terceross/terceroa/Logintas'
import Registertas from './components/secundaria/terceross/terceroa/Registertas'
import Contenedortas from './components/secundaria/terceross/terceroa/Contenedortas'

import Logincas from './components/secundaria/cuartos/cuartoa/Logincas'
import Registercas from './components/secundaria/cuartos/cuartoa/Registercas'
import Contenedorcas from './components/secundaria/cuartos/cuartoa/Contenedorcas'


import Loginqas from './components/secundaria/quintos/quintoa/Loginqas'
import Registerqas from './components/secundaria/quintos/quintoa/Registerqas'
import Contenedorqas from './components/secundaria/quintos/quintoa/Contenedorqas'


import Loginstas from './components/secundaria/sextos/sextoa/Loginstas'
import Registerstas from './components/secundaria/sextos/sextoa/Registerstas'
import Contenedorstas from './components/secundaria/sextos/sextoa/Contenedorstas'


import Signupe from './components/secundaria/primeros/primeroc/Signupe'

function App() {
  return (
    <ThemeProvider theme={theme}>
      
    <Router>
      <Route path="/" exact component={Contenedor} />

     
      <Route path="/primaria" exact component={Primaria} />
      <Route path="/secundaria" exact component={Secundaria} />


      <Route   path='/loginpap' exact component={Loginpap}/>
    <Route   path='/registerpap' exact component={Registerpap}/>
    <Route   path='/contenedorpap' exact component={Contenedorpap}/>

      <Route   path='/loginpbp' exact component={Loginpbp}/>
    <Route   path='/registerpbp' exact component={Registerpbp}/>
    <Route   path='/contenedorpbp' exact component={Contenedorpbp}/>

    <Route   path='/loginpcp' exact component={Loginpcp}/>
    <Route   path='/registerpcp' exact component={Registerpcp}/>
    <Route   path='/contenedorpcp' exact component={Contenedorpcp}/>


    <Route   path='/loginpas' exact component={Loginpas}/>
    <Route   path='/registerpas' exact component={Registerpas}/>
    <Route   path='/contenedorpas' exact component={Contenedorpas}/>

      <Route   path='/loginpbs' exact component={Loginpbs}/>
    <Route   path='/registerpbs' exact component={Registerpbs}/>
    <Route   path='/contenedorpbs' exact component={Contenedorpbs}/>

    <Route   path='/loginpcs' exact component={Loginpcs}/>
    <Route   path='/registerpcs' exact component={Registerpcs}/>
    <Route   path='/contenedorpcs' exact component={Contenedorpcs}/>


    <Route   path='/loginsas' exact component={Loginsas}/>
    <Route   path='/registersas' exact component={Registersas}/>
    <Route   path='/contenedorsas' exact component={Contenedorsas}/>


    <Route   path='/logintas' exact component={Logintas}/>
    <Route   path='/registertas' exact component={Registertas}/>
    <Route   path='/contenedortas' exact component={Contenedortas}/>


    <Route   path='/logincas' exact component={Logincas}/>
    <Route   path='/registercas' exact component={Registercas}/>
    <Route   path='/contenedorcas' exact component={Contenedorcas}/>

    <Route   path='/loginqas' exact component={Loginqas}/>
    <Route   path='/registerqas' exact component={Registerqas}/>
    <Route   path='/contenedorqas' exact component={Contenedorqas}/>


    <Route   path='/loginstas' exact component={Loginstas}/>
    <Route   path='/registerstas' exact component={Registerstas}/>
    <Route   path='/contenedorstas' exact component={Contenedorstas}/>

    <Route   path='/signupe' exact component={Signupe}/>
     
    </Router>
    </ThemeProvider>
  );
}

export default App;
