import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography, Hidden, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';


const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      marginLeft:'5px',
      border: '1px solid',
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
  

const useStyles= makeStyles((theme)=>({
    root:{
        flexGrow: 1
    },
    button: {
      margin: theme.spacing(1),
    },
    menuButton:{
        marginRight: '16px'
    },
    title:{
        flexGrow: 1
    },
    imagen:{
        borderRadius: '50%'
    }
    }));

const Navbar =(props) => {
    const classes= useStyles();
    return (
      <>
        <div className={classes.root}>
            <AppBar   elevation={20} color="contained">
                <Toolbar>
                
                <Typography variant="h6" className={classes.title}>
           JESÚS DE NAZARETH 
          </Typography >
          <Hidden smDown >
          
        
        
       
          </Hidden>

                            <Hidden only={['md', 'lg']} >
          <IconButton variant="contained" aria-label="menu" onClick={() => props.accionAbrir()} >
            <MenuIcon />
            </IconButton>
            
                 
          </Hidden >
                </Toolbar>
                
            </AppBar>
           
        </div>
        </>
    );
}

export default Navbar;