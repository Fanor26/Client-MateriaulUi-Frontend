import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, Hidden} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core/styles';
import ModalEntrar from './ModalEntrar'
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

const Navbbr = (props) => {
    const classes= useStyles();
  return (
    <>
    <AppBar   elevation={20} color="contained">
                <Toolbar>
                
                <Typography variant="h6" className={classes.title} >
           JESÚS DE NAZARETH 
          </Typography >

          
<ModalEntrar />
                            <Hidden only={['md', 'lg']} >
          <IconButton variant="contained" aria-label="menu" onClick={() => props.accionAbrir()} >
            <MenuIcon />
            </IconButton>
            
                 
          </Hidden >
          </Toolbar>
          </AppBar>
    </>
  )
}

export default Navbbr