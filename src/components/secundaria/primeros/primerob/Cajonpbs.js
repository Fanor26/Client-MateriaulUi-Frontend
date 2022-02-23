import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Divider, Toolbar } from "@material-ui/core";

import { withStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { Typography, Button } from "@material-ui/core";
import ListMaterias from './ListMaterias'

import { Box, Hidden } from "@material-ui/core";
const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '2px 50px',
    
    marginTop: '2px',
    border: '1px solid',
    lineHeight: 2,
    backgroundColor: '#816550',
    borderColor: '#816550',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#816550',
      borderColor: '#816550',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#816550',
      borderColor: '#654321',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem #816550',
    },
  },
})(Button);


const estilos = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xlUp")]: {
      display: "flex",
    },
  },

  title: {
    flexGrow: 1,
  },
  drawer: {
    width: 210,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 210,
  },
}));

const regresarprincipal = () => {
  
  window.location.href='/dashboardpcs'
   }
const Cajonpbs = (props) => {
  const classes = estilos();

  return (
    <div className={classes.root}>
      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        variant={props.variant}
        open={props.open}
        onClose={props.onClose ? props.onClose : null}
      >
       
        <Toolbar>
          
            <IconButton edge="start" onClick={props.onClose} color="contained">
              <MenuIcon />
            </IconButton>
           
        
          </Toolbar>
         
        
        <Divider />
        <BootstrapButton onClick={() =>regresarprincipal()}  variant="contained" color="secondary">PRINCIPAL</BootstrapButton>
       
        <ListMaterias />
     
      </Drawer>
      
    </div>
  );
};

export default Cajonpbs;
