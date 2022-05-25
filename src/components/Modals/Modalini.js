import React from 'react';
import {Button, Typography} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';

const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '2px 15px',
      
     
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#B6C278',
      borderColor: '#B6C278',
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
        backgroundColor: '#B6C278',
        borderColor: '#B6C278',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#B6C278',
        borderColor: '#B6C278',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem #B6C278',
      },
    },
  })(Button);
  

  
  
  const BootstrappButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '2px 15px',
      
     
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#ff0003',
      borderColor: '#ff0003',
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
        backgroundColor: '#ff0003',
        borderColor: '#ff0003',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#ff0003',
        borderColor: '#ff0003',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem #ff0003',
      },
    },
  })(Button);
  
const Modalini = () =>{
  const [open, setOpen] = React.useState(false);

  const [scroll, setScroll] = React.useState();

  
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BootstrapButton variant="contained" color="primary" onClick={handleClickOpen('body')}>
        INICIAL
      </BootstrapButton>
      <Dialog
        open={open}
        scroll={scroll}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">
          {"¿Usas el servicio de ubicación de Google?"}
        </DialogTitle>
        <DialogContent dividers>
        <Typography  gutterBottom>
        Google permite que las aplicaciones determinen tu ubicación. Esto significa que al  introducir  datos sospechosos, inmediantamente seran enviados a los administradores del Sistema y Google, incluso cuando no se esté ejecutando ninguna aplicación.
          </Typography >
          
          </DialogContent>

         
       
        <DialogActions>
        
        <BootstrapButton variant="contained" href="login" color="primary"
style={{ color: '#fff'}}>
        CONTINUAR
                   </BootstrapButton>
                   
                   
                   <BootstrappButton variant="contained" color="secondary"  onClick={handleClose} >
            CANCELAR
          </BootstrappButton>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Modalini;
