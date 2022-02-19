import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';


import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Swal from 'sweetalert2'
import Axios from 'axios'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'DevFanor@'}
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Registerpbs = () => {
  const classes = useStyles();
  const [primernombre, setPrimernombre] = useState('')
  const [segundonombre, setSegundonombre] = useState('')
  const [tercernombre, setTercernombre] = useState('')
  const [apellidopaterno, setApellidopaterno] = useState('')
  const [apellidomaterno, setApellidomaterno] = useState('')
  
  const [correomovil, setCorreomovil] = useState('')
  const [contrasena, setContrasena]= useState('') 


  const register = async(e)=>{
    e.preventDefault(); 

    const usuario={primernombre,segundonombre,tercernombre,apellidopaterno,apellidomaterno,correomovil,contrasena}
     const respuesta = await Axios.post('/primerobsec/crear',usuario); 
     console.log(respuesta) 

     const mensaje= respuesta.data.mensaje

    if(mensaje!=='Bienvenido')
     {
    
      Swal.fire({
        icon: 'error', 
        title: mensaje, 
        showConfirmButton: false,
        timer: 1500 
      })
    }
      else{
    
   /*   const token = respuesta.data.token 
      const primernombre = respuesta.data.primernombre
      const segundonombre = respuesta.data.segundonombre
      cons tercernombre = respuesta.data.tercernombre
      const apellidopaterno = respuesta.data.apellidopaterno
      const apellidomaterno = respuesta.data.apellidomaterno
      const idUsuario = respuesta.data.id
    
      sessionStorage.setItem(' token',token )
      sessionStorage.setItem('primernombre',primernombre)
       sessionStorage.setItem('segundonombre',segundonombre)
       sessionStorage.setItem('tercernombre',tercernombre)
       sessionStorage.setItem('apellidopaterno',apellidopaterno) 
      sessionStorage.setItem('apellidomaterno',apellidomaterno) 
      sessionStorage.setItem('idUsuario',idUsuario) */
       
       Swal.fire({
          icon:'success', 
          title: 'Estudiante Creado Correctamente', 
          showConfirmButton: false, 
          timer: 1500
       }) 
       
      setTimeout(() => {
      
     window.location.href='/loginpbs'
      },1600)
      }
    }


  return (
    <>
   
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          P
        </Avatar>
        <Typography component="h1" variant="h5">
         Primero "B"
        </Typography>
        <form className={classes.form} noValidate onSubmit={register}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="pnombre"
                name="primerNombre"
                variant="outlined"
                required
                fullWidth
                id="primerNombre"
                label="1er Nombre"
                autoFocus
               onChange={(e)=>setPrimernombre(e.target.value)}

              />
              
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="snombre"
                name="segundoNombre"
                variant="outlined"
                required
                fullWidth
                id="segundoNombre"
                label="2do Nombre"
                autoFocus
                onChange={(e)=>setSegundonombre(e.target.value)}

              />
              
            </Grid>
            <Grid item xs={12} sm={4}>
            <TextField
                autoComplete="tnombre"
                name="tercerNombre"
                variant="outlined"
               
                fullWidth
                id="tercerNombre"
                label="3er Nombre"
                autoFocus
               onChange={(e)=>setTercernombre(e.target.value)}

              />
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="apellidopaterno"
                label="Apellido Paterno"
                name="apellidopaterno"
                autoComplete="apellidopaterno"
                onChange={(e)=>setApellidopaterno(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="apellidomaterno"
                label="Apellido Materno"
                name="apellidomaterno"
                autoComplete="apellidomaterno"
              onChange={(e)=>setApellidomaterno(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="correomovil"
                label="Correo o Móvil"
                name="correomovil"
                autoComplete="correomovil"
                onChange={(e)=>setCorreomovil(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="contraseña"
                label="Contraseña"
                type="password"
                id="contraseña"
                autoComplete="current-password"
               onChange={(e)=>setContrasena(e.target.value)}
              />
            </Grid>
           
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrarte
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/loginpbs" variant="body2">
              ¿Ya tienes una cuenta? Entrar
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </>
  );
}
export default Registerpbs