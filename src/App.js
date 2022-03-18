import React, {useState, useEffect} from "react";
import axios from 'axios';
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
//import Contenedorpas from './components/secundaria/primeros/primeroa/Contenedorpas'

import Dashboardpas from './components/secundaria/primeros/primeroa/Dashboardpas'
import Viewmusaa from './components/secundaria/primeros/primeroa/Viewmusaa'

import Loginpbs from './components/secundaria/primeros/primerob/Loginpbs'
import Registerpbs from './components/secundaria/primeros/primerob/Registerpbs'
//import Contenedorpbs from './components/secundaria/primeros/primerob/Contenedorpbs'
import Dashboardpbs from './components/secundaria/primeros/primerob/Dashboardpbs'
import Viewmusa from './components/secundaria/primeros/primerob/Viewmusa'



import Loginpcs from './components/secundaria/primeros/primeroc/Loginpcs'
import Registerpcs from './components/secundaria/primeros/primeroc/Registerpcs'
//import Contenedorpcs from './components/secundaria/primeros/primeroc/Contenedorpcs'
import Dashboardpcs from './components/secundaria/primeros/primeroc/Dashboardpcs'
import Viewmus from './components/secundaria/primeros/primeroc/Viewmus'



import Loginsas from './components/secundaria/segundos/segundoa/Loginsas'
import Registersas from './components/secundaria/segundos/segundoa/Registersas'
//import Contenedorsas from './components/secundaria/segundos/segundoa/Contenedorsas'
import Dashboardsas from './components/secundaria/segundos/segundoa/Dashboardsas'
import Viewmusea from './components/secundaria/segundos/segundoa/Viewmusea'



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

import Images from './components/Images'
import AddTarea from './components/AddTarea'
import Tarea from './components/Tarea'
import EditTarea from './components/EditTarea'



import './App.css';

import CreateBook from './components/imagetareas/CreateBook';
import ShowBookList from './components/imagetareas/ShowBookList';
import ShowBookDetails from './components/imagetareas/ShowBookDetails';
import UpdateBookInfo from './components/imagetareas/UpdateBookInfo';

import Home from "./components/Home";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";


function App() {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
axios
.get("/tareas/")
.then(res => setPosts(res.data))
.catch(error => console.log(error));

  });


  
  return (
    <ThemeProvider theme={theme}>
      
    <Router>
    
    <Route exact path="/tareas" component={Images} />
    <Route exact path="/viewmusaa" component={Home} />
          <Route path="/add" component={AddUser} />
          <Route path="/edit/:id" component={EditUser} />

      <Route path="/" exact component={Contenedor} />
      
      <Route exact path='/asistencia' component={ShowBookList} />
          <Route path='/create-book' component={CreateBook} />
          <Route path='/edit-book/:id' component={UpdateBookInfo} />
          <Route path='/show-book/:id' component={ShowBookDetails} />


          

     
      
      <Route path="/tarea/:id"
     exact render={props => <Tarea {...props} posts={posts}/>} /> 

<Route path="/update/:id"
    exact  render={props => <EditTarea {...props} posts={posts}/>} /> 
      
      <Route path="/addtarea" exact component={AddTarea} />
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
    <Route   path='/dashboardpas' exact component={Dashboardpas}/>

<Route   path='/viewmusaa' exact component={Viewmusaa}/>

      <Route   path='/loginpbs' exact component={Loginpbs}/>
    <Route   path='/registerpbs' exact component={Registerpbs}/>
    <Route   path='/dashboardpbs' exact component={Dashboardpbs}/>

<Route   path='/viewmusa' exact component={Viewmusa}/>

    <Route   path='/loginpcs' exact component={Loginpcs}/>
    <Route   path='/registerpcs' exact component={Registerpcs}/>
    <Route   path='/dashboardpcs' exact component={Dashboardpcs}/>

<Route   path='/viewmus' exact component={Viewmus}/>

    <Route   path='/loginsas' exact component={Loginsas}/>
    <Route   path='/registersas' exact component={Registersas}/>
    <Route   path='/dashboardsas' exact component={Dashboardsas}/>

<Route   path='/viewmusea' exact component={Viewmusea}/>


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

    
     
    </Router>
    </ThemeProvider>
  );
}

export default App;
