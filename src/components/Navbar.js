import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography, Hidden} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import BottomRF from "./dashboard/BottomRF"


  

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