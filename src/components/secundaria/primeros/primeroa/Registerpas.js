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
    marginLeft:'15px',
    
   
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
const Registerpas =(props)=>{
   

 
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('') 
  
  const register = async(e)=>{
  e.preventDefault(); 
  const USER={
    email,
    password,
   
 
    
  
  }
//const token =sessionStorage.getItem('token')
   const respuesta = await Axios.post('http://localhost:5000/server/autenthication/register',USER,
   //{headers:{'autorizacion':token}}
    ); 
    
   console.log(respuesta) 
   
   const msn= respuesta.data.msn
  if(msn=='No se han enviado parametros para la autenticacion ') {
  
    Swal.fire({
      icon: 'error', 
      title: msn, 
      showConfirmButton: false,
      timer: 1500 
    })
  }
    else{
 
    Swal.fire({
      icon:'success', 
      title: 'Usuario registrado con exito', 
      showConfirmButton: false, 
      timer: 1500
   }) 
   
  setTimeout(() => {
  
    window.location.href='/dashboardpas'
  },1600)
  }
}
    const salir= () =>{

        sessionStorage.clear()
        window.location.href="/"
      }
    const paperStyle = { padding: '30px 20px', width: 350, margin: " 10px auto", marginTop:"40px" }
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0', marginLeft:"50px"}
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
                    <h2>Plagio Control</h2>
                </Grid>
                <Grid  component="form" novalidate onSubmit={register} >
                
                
             
              
            
          
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo o Móvil"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e)=>setEmail(e.target.value)}
              />
                 <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña Nueva"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=>setPassword(e.target.value)}
              />
               
                <ThemeProvider theme={theme}>
                  <Grid >
                <BootstrapButton type='submit'  color="primary"  style={btnstyle}   >Sing In
              
                    </BootstrapButton> </Grid>
                     
                   
                </ThemeProvider>
             
                    </Grid>
                    <Grid align="center" >
                <Typography >
                     <Link href="/loginpas" >
                     ¿Ya tienes una cuenta? Entrar
                </Link>
                </Typography>
                
                </Grid> 
                <Box mt={5}>
        <Copyright />
      </Box>   
            </Paper>
            
        </Grid>
        
        </>
    )
}

export default Registerpas