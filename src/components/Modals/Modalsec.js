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
      backgroundColor: '#ffa420',
      borderColor: '#ffa420',
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
        backgroundColor: '#ffa420',
        borderColor: '#ffa420',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#ffa420',
        borderColor: '#ffa420',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem #ffa420',
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
  
const Modalsec = () =>{
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
        SECUNDARIA
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
        
        <BootstrapButton variant="contained" href="/secundaria" color="primary"
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
export default Modalsec;
