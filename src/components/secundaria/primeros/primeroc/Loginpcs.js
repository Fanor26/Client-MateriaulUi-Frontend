import React, {useState} from 'react'
import { Grid,Paper, Avatar, TextField, Typography,Link, Box } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { createTheme, Button, ThemeProvider} from '@material-ui/core';

import { purple, green, orange, lightBlue } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Swal from 'sweetalert2'
import Axios from 'axios'


const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
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
        backgroundColor: '#FFFFFF',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);
 
  const BootButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#39FF14',
      borderColor: '#39FF14',
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
        backgroundColor: '#39FF14',
        borderColor: '#39FF14',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#FFFFFF',
        borderColor: '#39FF14',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem #39FF14',
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
const Loginpcs =(props)=>{
    const [correomovil, setCorreomovil] = useState('')
    const [contrasena, setContrasena]= useState('') 
  
  const login = async(e)=>{
  e.preventDefault(); 
  const usuario={correomovil,contrasena}
   const respuesta = await Axios.post('/primerocsec/login',usuario); 
    
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
   window.location.href='/contenedorpcs'
    }
    }
    const salir= () =>{

        sessionStorage.clear()
        window.location.href="/"
      }
    const paperStyle = { padding: '30px 20px', width: 350, margin: " 10px auto", marginTop:"40px" }
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const marginTop = { marginTop: 10 }
    return(
        <>
        
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
                    <h2>Primero "C"</h2>
                </Grid>
                <Grid component="form" novalidate onSubmit={login} >
                <Box >
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
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
                label="Password"
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
               
               
                <BootButton type='submit'  color="primary"  style={btnstyle}  href="/registerpcs" >CREAR NUEVA CUENTA
              
                    </BootButton> 
                   
                    </Grid>  </ThemeProvider>
                    
            </Paper>
            
        </Grid>
        </>
    )
}

export default Loginpcs