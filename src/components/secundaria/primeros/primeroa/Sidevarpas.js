import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar} from '@material-ui/core';
import ButtonCuentaE from './ButtonCuentaE'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from "styled-components";

const estilos = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  title: {
    flexGrow: 1,
  },
  h6:{
    fontWeight: 900,
    margin: "5px",

  },
}));
const salir= () =>{

  sessionStorage.clear()
  window.location.href="/"
}

const Sidevarpas = (props) => {
  const classes = estilos();

  return (
    <div  >
      <AppBar
      
      variant="contained"
      color="contained"
      elevation={20}
    >
      <Toolbar>
        <IconButton
          edge="start"
          variant="contained"
        
          onClick={() => props.accionAbrir()}
        >
          <MenuIcon />
        </IconButton>
        
        <Typography variant="h8" className={classes.title}>
        <h6 className={classes.h6}> PRIMERO A SECUNDARIA</h6>
          
        </Typography>

        
        <ButtonCuentaE />
       
      </Toolbar>
    </AppBar>
      
    </div>
  );
}
export default Sidevarpas;