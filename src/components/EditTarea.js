
import React, {useState, useEffect} from 'react'
import { Grid,Paper, Avatar, TextField, Typography,Link, Box } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { createTheme, Button, ThemeProvider} from '@material-ui/core';

import { purple, green, orange, lightBlue } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Swal from 'sweetalert2'
import axios from 'axios'
import Viewmusaa from '././secundaria/primeros/primeroa/Viewmusaa'
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
const EditTarea = props =>{
    const [titulo, setTitulo] = useState('')
    const [autornombre, setAutornombre]= useState('') 
    const [tarea, setTarea]= useState('') 

  const entregartarea = async(e)=>{
  e.preventDefault(); 
  const tareaprimeroas={titulo, autornombre, tarea}
   const respuesta = await axios.put(`/tareas/update/${props.match.params.id}`,tareaprimeroas); 
    
   console.log(respuesta) 
   
   const mensaje= respuesta.data.mensaje
  if('Tarea actualizada Correctamente') {
  
    Swal.fire({
        icon:'success',  
      title: 'Tarea actualizada Correctamente', 
      showConfirmButton: true,
      timer: 2500 
    })
    window.location.href='/tareas'
  
   
}

    else{
  /*
    const titulo = respuesta.data.titulo
    const autornombre = respuesta.data.autornombre
    const tarea = respuesta.data.tarea
    
    const idTareaprimeroas = respuesta.data.id
  
    sessionStorage.setItem(' titulo',titulo )
    sessionStorage.setItem('autornombre',autornombre) 
    sessionStorage.setItem('tarea',tarea)
   
    
    sessionStorage.setItem('idTareaprimeroas',idTareaprimeroas) */
     
     Swal.fire({
        icon:'error', 
        title: mensaje, 
        showConfirmButton: false, 
        timer: 1500
     })
   window.location.href='/tareas'
    }
    }
    const salir= () =>{

      sessionStorage.clear()
      window.location.href="/tareas"
    }
    useEffect(()=>{
        axios
        .get(`https://juanor902.herokuapp.com/tareas/${props.match.params.id}`)
        .then(res =>[
            setTitulo(res.data.titulo),
            setTarea(res.data.tarea),
            setAutornombre(res.data.autornombre)

        ])
        .catch(error => console.log(error))
   
        }, []);
    const paperStyle = { padding: '30px 20px', width: 500, margin: " 10px auto", marginTop:"40px" }
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const marginTop = { marginTop: 10 }
    return(
        <>
        < Viewmusaa/>
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
                    
                    <h2>MODIFICAR ENTREGA</h2>
                </Grid>
                <Grid component="form" novalidate onSubmit={entregartarea} >
                <Box >
                <TextField
                margin="normal"
                required
                fullWidth
                id="titulo"
                label="Titulo"
                value={titulo}
                autoComplete="titulo"
                type="text"
                autoFocus
                onChange={(e)=>setTitulo(e.target.value)}
              />
                 <TextField
                margin="normal"
                required
                fullWidth
                id="n°tarea"
                label="Nombre Tarea"
                value={autornombre}
                autoComplete="titulo"
                type="text"
                autoFocus
                onChange={(e)=>setAutornombre(e.target.value)}
              />

<Typography variant="body2" color="textSecondary" align="center">TAREA
     
    </Typography>
    <TextField
                margin="normal"
                required
                fullWidth
                id="n°tarea"
                label="N° Tarea"
                value={tarea}
                autoComplete="titulo"
                type="text"
                autoFocus
                
                onChange={(e)=>setTarea(e.target.value)}
              />
                <ThemeProvider theme={theme}>
                <BootstrapButton type='submit'  color="primary"  style={btnstyle} fullWidth  >ACTUALIZAR ENTREGA
              
                    </BootstrapButton> 
                     
                   
                </ThemeProvider>
                </Box>
                    </Grid>
                    <Grid align="center" >
                
                
                </Grid> 
                    <Box mt={5}>
        <Copyright />
      </Box>  
            </Paper>
            
        </Grid>
        </>
    )
}

export default EditTarea