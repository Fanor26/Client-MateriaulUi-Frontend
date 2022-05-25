import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Paper, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

/*const [posts,setPosts]=useState([])

useEffect(() => {
  axios
  .get('http://localhost:5000/tareas')
  .then(res =>setPosts(res.data))
  .catch(error => console.log(error));

});
*/
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  iconos: {
    color: "white",
  },
  container: {
    paddingTop: "10px",
    alignItems: "center",
  },

  containerGrafica: {
    marginTop: "40px",
  },
  containerTabla: {
    marginTop: "40px",
  },
}));

const Aulas = (props) => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [Aulas, setAulas] = useState();


  useEffect(() => {
    
    axios
      .get("http://localhost:5000/aula/listarAulas")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  });/*
  useEffect(() => {
    const id=  sessionStorage.getItem("idUsuario")
      const token=  sessionStorage.getItem("token")
    axios
      .get("http://localhost:5000/tareas/listarTareasEstudiante/"+id,{
        headers:{'autorizacion':token}
      })
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  });
  

  const deleteTarea = async (id) => {
    try {
      const token=  sessionStorage.getItem("token")
      const res = await fetch(`http://localhost:5000/tareas/${id}`, {
        method: "DELETE",
        headers:{'autorizacion':token}
      });
      if (res.ok) {
        const updatedTareas = tareas.filter((tarea) => tarea._id !== id);
        setTareas(updatedTareas);
      }
    } catch (error) {
      console.log(error);
    }
  };*/
  return (
    <>
     
      
      <div className={classes.root}>
        <Grid container spacing={2} className={classes.container}>
          <Grid item xs={12}>
            <div style={{ position: "center" }}>
              <Link
                to="/addaula"
                className="btn btn-outline-warning float-center my-2 "
              >
                + Aregar Nueva Aula
              </Link>
            </div>
  </Grid>
          {posts.map((aula, key) => (
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4} key={key}>
              <Link
                to={{
                  pathname: `/aula/${aula._id}`,
                }}
              >
                <h2>{aula.nombre} {aula.categoria}</h2>
              </Link>

              <Paper elevation={10}>
                <img src={aula.avatar} alt="" width={"100%"} height={500} />
                <div className="p-2">
                 
                </div>
                <h2>{aula.name}</h2>
              
             
                
                {/*<div className="d-flex justify-content-between align-items-center row">
                  <Grid item xs={12} spacing={2}>
                    <div className="m-2">
                      <Link
                        to={{
                          pathname: `/update/${tarea._id}`}}
                        className="btn btn-outline-success m-2"
                      >
                        Modificar
                      </Link>

                      <button
                        onClick={() => deleteTarea(tarea._id)}
                        className="btn btn-outline-danger align-items-center"
                      >
                        Eliminar
                      </button>
                    </div>
                  </Grid>
                        </div>*/}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Aulas;
