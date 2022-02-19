import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar} from '@material-ui/core';
import ButtonCuentaE from '../../../Modals/ButtonCuentaE'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const estilos = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  
  title: {
    flexGrow: 1,
  },
}));

const Sidevarpbp = (props) => {
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
          <Button> PRIMERO B PRIMARIA</Button>
          
        </Typography>
        

       <ButtonCuentaE />
      </Toolbar>
    </AppBar>
      
    </div>
  );
}
export default Sidevarpbp