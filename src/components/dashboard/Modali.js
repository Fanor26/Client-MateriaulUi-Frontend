import React from 'react';
import { createTheme, Button, ThemeProvider, Typography} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
import { red } from '@material-ui/core/colors'

import {Link} from 'react-router-dom';
const theme = createTheme({
  palette: {
    primary:{
      main: red[500],
    },
    }
    
});

const Modals = () =>{
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
      <Button variant="contained" color="primary" onClick={handleClickOpen('body')}>
       INICIAL
      </Button>
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
        
        <Button variant="contained" color="primary" >
                   <Link to="/inicial" style={{ color: '#000000' }}>  Continuar</Link>
                   </Button>
                   <ThemeProvider theme={theme}>
                   
                   <Button variant="contained" color="primary"  onClick={handleClose} autoFocus>
            Cancelar
          </Button>
          </ThemeProvider>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Modals;
