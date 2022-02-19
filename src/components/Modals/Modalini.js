import React from 'react';
import { createTheme, Button, ThemeProvider, Typography} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import { red } from '@material-ui/core/colors'

const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '2px 15px',
      
     
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#b18161',
      borderColor: '#b18161',
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
        backgroundColor: '#b18161',
        borderColor: '#b18161',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#b18161',
        borderColor: '#b18161',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem #b18161',
      },
    },
  })(Button);
  
const theme = createTheme({
  palette: {
    primary:{
      main: red[500],
    },
    }
    
});

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
        
        <Button variant="contained" color="secondary" href="#" >
                     Continuar
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
export default Modalini;
