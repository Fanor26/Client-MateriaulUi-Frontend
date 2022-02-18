import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import "../assets/css/Dashboard.css";

import CardsHeader from "./CardsHeader";



import "bootstrap/dist/css/bootstrap.min.css";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  iconos: {
    color: "white",
  },
  container: {
    paddingTop: "10px",
    alignItems: "center",
    
  },
  
  containerGrafica: {
    marginTop: "40px",
  },
  containerTabla: {
    marginTop: "40px",
  },
}));

const data = [
  {
    id: 1,
    video:
      "Como Hacer un Split en React JS || React Split Pane || Tutorial en Español (2020)",
    fecha: "6 de sep. 2020",
    visualizaciones: 32,
    imagen: require("../assets/img/split.webp"),
  },
  
];

const entrarinicial= () =>{

  sessionStorage.clear()
  window.location.href="/inicial"
}
const entrarprimaria= () =>{

  sessionStorage.clear()
  window.location.href="/primaria"
}
const entrarsecundaria= () =>{

  sessionStorage.clear()
  window.location.href="/secundaria"
}
const Dashboard = (props) => {
  const classes = useStyles();
  return (
    
<>
    
    <div className={classes.root}>
    
    <Grid 
    
    
    
          container
          spacing={2}
          className={classes.container}
    >
      
     

     
      
      <Grid item xs={12}>
          
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            icono={<Button className={classes.iconos} onClick={() =>entrarinicial()}>VER</Button>}
            titulo="INICIAL"
           
            color="rgba(164,179,87,1)"
            font="white"
          />
           
          
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            
            titulo="PRIMARIA"
            icono={<Button className={classes.iconos} onClick={() =>entrarprimaria()}>VER</Button>}
            color="rgba(248,80,50,1)"
            font="white"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            icono={<Button className={classes.iconos} onClick={() =>entrarsecundaria()}>VER</Button>}
            titulo="SECUNDARIA"
           
            color="rgba(255,175,75,1)"
            font="white"
          />
        </Grid>

        <Grid
          container
          spacing={2}
          className={classes.container}
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
        >
          

        <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>

        
        </Grid>
       
        </Grid>
     
    </div>
    </> 
  );
};

export default Dashboard;
