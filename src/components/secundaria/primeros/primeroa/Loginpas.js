import React, {useState} from 'react'
import { Grid,Paper, Avatar, TextField, Typography,Link, Box } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { createTheme, Button, ThemeProvider} from '@material-ui/core';

import { purple, green, orange, lightBlue } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Swal from 'sweetalert2'
import Axios from 'axios'
import Contenedor from '../../../Contenedor'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'DevFanor@'}
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
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

 
  const BootButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '2px 15px',
      
     
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#654321',
      borderColor: '#654321',
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
        backgroundColor: '#654321',
        borderColor: '#654321',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#654321',
        borderColor: '#654321',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem #654321',
      },
    },
  })(Button);
  
  const theme = createTheme({
    palette: {
      primary:{
      main: '#FFFFFF',
    },
      
      secondary: {
      
        main: green[500],
      },
    },
  });
const Loginpas =(props)=>{
    const [correomovil, setCorreomovil] = useState('')
    const [contrasena, setContrasena]= useState('') 
  
  const login = async(e)=>{
  e.preventDefault(); 
  const usuario={correomovil,contrasena}
   const respuesta = await Axios.post('http://localhost:4000/primeroasec/login',usuario); 
    
   console.log(respuesta) 
   
   const mensaje= respuesta.data.mensaje
  if(mensaje!=='Bienvenido') {
  
    Swal.fire({
      icon: 'error', 
      title: mensaje, 
      showConfirmButton: false,
      timer: 1500 
    })
  }
    else{
  
    const token = respuesta.data.token 
    const primernombre = respuesta.data.primernombre
    const segundonombre = respuesta.data.segundonombre
    const tercernombre = respuesta.data.tercernombre
    const apellidopaterno = respuesta.data.apellidopaterno
    const apellidomaterno = respuesta.data.apellidomaterno
    const idUsuario = respuesta.data.id
  
    sessionStorage.setItem(' token',token )
    sessionStorage.setItem('primernombre',primernombre) 
    sessionStorage.setItem('segundonombre',segundonombre)
    sessionStorage.setItem('tercernombre',tercernombre)
    sessionStorage.setItem('apellidopaterno',apellidopaterno)
    sessionStorage.setItem('apellidomaterno',apellidomaterno)
    sessionStorage.setItem('idUsuario',idUsuario) 
     
     Swal.fire({
        icon:'success', 
        title: mensaje, 
        showConfirmButton: false, 
        timer: 1500
     })
   window.location.href='/dashboardpas'
    }
    }
    const salir= () =>{

      sessionStorage.clear()
      window.location.href="/"
    }
    const reg= () =>{

        sessionStorage.clear()
        window.location.href="/registerpas"
      }
    const paperStyle = { padding: '30px 20px', width: 350, margin: " 10px auto", marginTop:"40px" }
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const marginTop = { marginTop: 10 }
    return(
        <>
        <Contenedor />
        <Grid container spacing={2}>
            <Paper elevation={10} style={paperStyle}>
            <Box 
                textAlign="left"
                p={1}
                mt={-4}
                mx={-2}>
                
                <IconButton>
       
                <CloseIcon onClick={() =>salir()}/> 
           
           </IconButton>
          
                </Box>
                <Grid align='center'>
                     <Avatar >S</Avatar>
                    <h2>Primero "A"</h2>
                </Grid>
                <Grid component="form" novalidate onSubmit={login} >
                <Box >
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo o Móvil"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e)=>setCorreomovil(e.target.value)}
              />
                 <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=>setContrasena(e.target.value)}
              />
               
                <ThemeProvider theme={theme}>
                <BootstrapButton type='submit'  color="primary"  style={btnstyle} fullWidth  >ENTRAR
              
                    </BootstrapButton> 
                     
                   
                </ThemeProvider>
                </Box>
                    </Grid>
                    <Grid align="center" >
                <Typography >
                     <Link href="#" >
                     ¿Has olvidado la contraseña?
                </Link>
                </Typography>
                
                </Grid> <ThemeProvider theme={theme}>
                <Grid align="center" style={marginTop} >
               
               
                <BootButton type='submit'  color="primary"  style={btnstyle}  onClick={() =>reg()}>REGISTRARTE
              
                    </BootButton> 
                   
                    </Grid>  </ThemeProvider>
                    <Box mt={5}>
        <Copyright />
      </Box>     
            </Paper>
               
        </Grid>
        </>
    )
}

export default Loginpas