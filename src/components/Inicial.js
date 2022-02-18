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



const primeraseccion= () =>{

  sessionStorage.clear()
  window.location.href="/forms"
}
const segundaseccion= () =>{

  sessionStorage.clear()
  window.location.href="/forms"
}


const Inicial = (props) => {
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
            icono={<Button className={classes.iconos} onClick={() =>primeraseccion()}>"A"</Button>
            
        }
       
            
            titulo="PRIMERA SECCIÓN"
           
            color="rgba(164,179,87,1)"
            font="white"
          />
           
          
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            icono={<Button className={classes.iconos} onClick={() =>primeraseccion()}>"B"</Button>
            
        }
       
            
            titulo="PRIMERA SECCIÓN"
           
            color="rgba(164,179,87,1)"
            font="white"
          />
           
          
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            icono={<Button className={classes.iconos} onClick={() =>primeraseccion()}>"C"</Button>
            
        }
       
            
            titulo="PRIMERA SECCIÓN"
           
            color="rgba(164,179,87,1)"
            font="white"
          />
           
          
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            
            titulo="SEGUNDA SECCIÓN"
            icono={<Button className={classes.iconos} onClick={() =>segundaseccion()}>"A"</Button>}
            color="rgba(164,179,87,1)"
            font="white"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            
            titulo="SEGUNDA SECCIÓN"
            icono={<Button className={classes.iconos} onClick={() =>segundaseccion()}>"B"</Button>}
            color="rgba(164,179,87,1)"
            font="white"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            
            titulo="SEGUNDA SECCIÓN"
            icono={<Button className={classes.iconos} onClick={() =>segundaseccion()}>"C"</Button>}
            color="rgba(164,179,87,1)"
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

export default Inicial;
