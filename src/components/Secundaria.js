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



const primeros= () =>{

  sessionStorage.clear()
  window.location.href="/forms"
}
const segundos= () =>{

  sessionStorage.clear()
  window.location.href="/forms"
}
const terceros= () =>{

    sessionStorage.clear()
    window.location.href="/forms"
  }
  const cuartos= () =>{
  
    sessionStorage.clear()
    window.location.href="/forms"
  }
  const quintos= () =>{

    sessionStorage.clear()
    window.location.href="/forms"
  }
  const sextos= () =>{
  
    sessionStorage.clear()
    window.location.href="/forms"
  }


const Secundaria = (props) => {
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
            icono={<Button className={classes.iconos} onClick={() =>primeros()}>"A"</Button>
            
        }
       
            
            titulo="PRIMERO"
           
            color="rgba(255,175,75,1)"
            font="white"
          />
           
          
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            icono={<Button className={classes.iconos} onClick={() =>primeros()}>"B"</Button>
            
        }
       
            
            titulo="PRIMERO"
           
            color="rgba(255,175,75,1)"
            font="white"
          />
           
          
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            icono={<Button className={classes.iconos} onClick={() =>primeros()}>"C"</Button>
            
        }
       
            
            titulo="PRIMERO"
           
            color="rgba(255,175,75,1)"
            font="white"
          />
           
          
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            
            titulo="SEGUNDO"
            icono={<Button className={classes.iconos} onClick={() =>segundos()}>"A"</Button>}
            color="rgba(255,175,75,1)"
            font="white"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            
            titulo="SEGUNDO"
            icono={<Button className={classes.iconos} onClick={() =>segundos()}>"B"</Button>}
            color="rgba(255,175,75,1)"
            font="white"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            
            titulo="SEGUNDO"
            icono={<Button className={classes.iconos} onClick={() =>segundos()}>"C"</Button>}
            color="rgba(255,175,75,1)"
            font="white"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            
            titulo="TERCERO"
            icono={<Button className={classes.iconos} onClick={() =>terceros()}>"A"</Button>}
            color="rgba(255,175,75,1)"
            font="white"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            
            titulo="TERCERO"
            icono={<Button className={classes.iconos} onClick={() =>terceros()}>"B"</Button>}
            color="rgba(255,175,75,1)"
            font="white"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            
            titulo="TERCERO"
            icono={<Button className={classes.iconos} onClick={() =>terceros()}>"C"</Button>}
            color="rgba(255,175,75,1)"
            font="white"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            
            titulo="CUARTO"
            icono={<Button className={classes.iconos} onClick={() =>cuartos()}>"A"</Button>}
            color="rgba(255,175,75,1)"
            font="white"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            
            titulo="CUARTO"
            icono={<Button className={classes.iconos} onClick={() =>cuartos()}>"B"</Button>}
            color="rgba(255,175,75,1)"
            font="white"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            
            titulo="CUARTO"
            icono={<Button className={classes.iconos} onClick={() =>cuartos()}>"C"</Button>}
            color="rgba(255,175,75,1)"
            font="white"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            
            titulo="QUINTO"
            icono={<Button className={classes.iconos} onClick={() =>quintos()}>"A"</Button>}
            color="rgba(255,175,75,1)"
            font="white"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            
            titulo="QUINTO"
            icono={<Button className={classes.iconos} onClick={() =>quintos()}>"B"</Button>}
            color="rgba(255,175,75,1)"
            font="white"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            
            titulo="QUINTO"
            icono={<Button className={classes.iconos} onClick={() =>quintos()}>"C"</Button>}
            color="rgba(255,175,75,1)"
            font="white"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            
            titulo="SEXTO"
            icono={<Button className={classes.iconos} onClick={() =>sextos()}>"A"</Button>}
            color="rgba(255,175,75,1)"
            font="white"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            
            titulo="SEXTO"
            icono={<Button className={classes.iconos} onClick={() =>sextos()}>"B"</Button>}
            color="rgba(255,175,75,1)"
            font="white"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            
            titulo="SEXTO"
            icono={<Button className={classes.iconos} onClick={() =>sextos()}>"C"</Button>}
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

export default Secundaria;
