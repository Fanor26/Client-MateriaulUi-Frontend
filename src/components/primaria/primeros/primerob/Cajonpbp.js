import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Divider, Toolbar } from "@material-ui/core";

import { withStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { Typography, Button } from "@material-ui/core";

import { Box, Hidden } from "@material-ui/core";
const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    marginBottom: '5px',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
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
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
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

const Cajonpbp = (props) => {
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
        <BootstrapButton href="dashboard"  variant="contained" color="primary">ÁREA PERSONAL</BootstrapButton>
        <BootstrapButton href="dashboard"  variant="contained" color="primary">MIS TEMAS</BootstrapButton>
        <BootstrapButton href="dashboard"  variant="contained" color="primary">MIS TAREAS</BootstrapButton>
        <BootstrapButton href="dashboard"  variant="contained" color="primary">MIS VIDEOS</BootstrapButton>
        <BootstrapButton href="dashboard"  variant="contained" color="primary">MIS EVALUACIONES</BootstrapButton>
        
      </Drawer>
      
    </div>
  );
};

export default Cajonpbp;
