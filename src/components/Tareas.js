import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Paper, Button} from '@material-ui/core';
import Viewmusaa from '././secundaria/primeros/primeroa/Viewmusaa'

import {Link} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
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
const agregartarea = () => {
  
  window.location.href='/addtarea'
   }
const Tareas =({posts}) => {
  const classes = useStyles();
  const [tarea, setTarea]= useState("");

  const deleteTarea = id => {

    axios.delete(`/tareas/${id}`)

    
      
      
  if('Tarea eliminada Correctamente') {
  
    Swal.fire({
        icon:'success',  
      title: 'Tarea eliminada Correctamente', 
      showConfirmButton: true,
      timer: 2500 
    })
    window.location.href='/tareas'
    setTarea(tarea.filter(elem => elem._id !== id));
  }
   
}
      
      
      
   

  return (
      <>
      <Viewmusaa />
    <div className={classes.root}>
      
      <Paper elevation={3} >
      TAREAS
      <Grid align="right" > <Button  onClick={() =>agregartarea()}

color="secondary" variant="contained">Agregar Tarea</Button></Grid>
     
      {posts.map((tarea, key) =>(
        <Grid align="center" item xs={12} key={key}>
            <div>
              <img src={`/uploads/${tarea.tareaImage}`} alt="..." />
         <Link
         to={{
           pathname: `/tarea/${tarea._id}`

         }}
         >
         <h2>{tarea.titulo}</h2>
         </Link>  
     
      
      <h4>{tarea.autornombre}</h4>
      <Grid align="left"  >
      <span className="badge badge-primary p-2">{tarea.tarea}</span> </Grid>
      <div className="row my-5">
           
           <div className="col-sm-2">
             <Link  to={`/update/${tarea._id}`}
             
             
             className="btn btn-outline-success">Editar Tarea </Link>
      </div>
      <div className="col-sm-2">
             <a onClick={() => deleteTarea(tarea._id)} className="btn btn-outline-danger">Eliminar Tarea </a>
      </div>
      </div> </div>
      </Grid>
      
      
      ))}
      
          </Paper>
    </div>
    </>
  );
}
export default Tareas;

//Main Container