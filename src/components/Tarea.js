import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';

import {Grid,Paper, Button, Box} from '@material-ui/core';
import Viewmusaa from '././secundaria/primeros/primeroa/Viewmusaa'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(-2),
        marginTop: theme.spacing(2),
        width: theme.spacing(160),
        
      },
    },
  }));
  
const Tarea = props =>{
    const classes = useStyles();
    const [titulo, setTitulo]= useState("");
    const [tarea, setTarea]=useState("");
    const [autornombre, setAutornombre]=useState("");
    const [tareaImage, setTareaimage]=useState("");
    useEffect(()=>{
        axios
        .get(`/tareas/${props.match.params.id}`)
        .then(res =>[
            setTitulo(res.data.titulo),
            setTarea(res.data.tarea),
            setAutornombre(res.data.autornombre),
            setTareaimage(res.data.tareaImage)

        ])
        .catch(error => console.log(error))
   
        }, [props]);

        const paperStyle = { padding: '30px 20px', width: 500, margin: " 10px auto", marginTop:"40px" }
        const avatarStyle={backgroundColor:'#1bbd7e'}
        const btnstyle={margin:'8px 0'}
        const marginTop = { marginTop: 10 }

        const salir= () =>{

            sessionStorage.clear()
            window.location.href="/tareas"
          }
    return(
        <>
        <Viewmusaa />
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
        <div className={classes.root}>
      
    
    
        <h2>{titulo}</h2>
<p>{tarea}</p>

<p>{autornombre}</p>


</div>
</Paper>
</Grid>
</>
    );
}
export default Tarea;