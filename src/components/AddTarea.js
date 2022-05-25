import React, { useState } from "react";
import styled from "styled-components";
import { Grid, TextField, Field } from "@material-ui/core";

import {
  alpha,
  ThemeProvider,
  withStyles,
  makeStyles,
  createTheme,
} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import Swal from "sweetalert2";
import Axios from "axios";
import FormControl from "@material-ui/core/FormControl";
import Viewmusaa from '././secundaria/primeros/primeroa/Viewmusaa'
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 190px 6px 10px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  margin: {
    margin: theme.spacing(2),
  },
}));

const AddTareaContainer = styled.div`
  margin: 3rem auto;
  padding: 2rem;
  width: 31.25rem;
  h2 {
    font-weight: 900;
    margin: 1rem;
    color: var(--dark-orange);
  }
`;

const AddTarea = () => {
  const classes = useStyles();
  const [titulo, setTitulo] = useState("");
  const [tarea, setTarea] = useState("");
  const [autornombre, setAutornombre] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  const changeOnClick = async (e) => {
    e.preventDefault();

    const tareas = { 
      titulo, 
      tarea, 
      autornombre,
      name,
      image,
      curso:sessionStorage.getItem('idUsuario'),
      CursoNombre:sessionStorage.getItem('nombre'), 
    };

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("tarea", tarea);
    formData.append("autornombre", autornombre);
    formData.append("name", name);
    formData.append("image", image);
    formData.append("curso", sessionStorage.getItem('idUsuario'));
    formData.append("cursoNombre", sessionStorage.getItem('nombre'));
    


    setTitulo("");
    setTarea("");
    setAutornombre("");
    setName("");
    setImage("");
    const token =sessionStorage.getItem('token')

    const respuesta = await Axios.post("http://localhost:5000/tareas/add", formData,{
      headers:{'autorizacion':token},

    } 
    );
    console.log(respuesta);

    const mensaje = respuesta.data.mensaje;

    if (mensaje !== "Lista de Tareas") {
      Swal.fire({
        icon: "success",
        title: "Tarea Agregada Correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location.href = "/evaluacionespas";
      }, 1600);
    } else {
      /*   const token = respuesta.data.token 
      const titulo = respuesta.data.titulo
      const tarea = respuesta.data.autornombre
     
      const idUsuario = respuesta.data.id
    
      sessionStorage.setItem(' token',token )
      sessionStorage.setItem('titulo',titulo)
       sessionStorage.setItem('tarea',tarea)
       sessionStorage.setItem('autornombre',autorombre)
      sessionStorage.setItem('idUsuario',idUsuario) */

      Swal.fire({
        icon: "success",
        title: "Tarea Agregado Correctamente",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        window.location.href = "/evaluacionespas";
      }, 1600);
    }
  };

  return (
    <>
    <Viewmusaa/>
      <AddTareaContainer>
        <div className="container">
          <h2>AGREGAR NUEVA TAREA</h2>
          <form onSubmit={changeOnClick} encType="multipart/form-data">
          <Grid className={classes.margin}>
              <InputLabel
                shrink
                htmlFor="bootstrap-input"
                className={classes.margin}
              >
                Elija archivo para Subir
              </InputLabel>
              <input type="file" required name="image" onChange={onChangeImage} />
            </Grid>
            
            <FormControl className={classes.margin}>
              <InputLabel shrink htmlFor="bootstrap-input">
                Titulo
              </InputLabel>
              <BootstrapInput
                onChange={(e) => setTitulo(e.target.value)}
                required
                placeholder="Título"
                id="bootstrap-input"
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel shrink htmlFor="bootstrap-input">
                Autor 
              </InputLabel>
              <BootstrapInput
                onChange={(e) => setAutornombre(e.target.value)}
                required
                placeholder="Autor"
                id="bootstrap-input"
              />
            </FormControl>
{/*
            <InputLabel
              shrink
              htmlFor="bootstrap-input"
              className={classes.margin}
            >
              Tarea
            </InputLabel>
            <Grid className={classes.margin}>
              <TextField
                onChange={(e) => setTarea(e.target.value)}
                variant="outlined"
                rows={4}
                fullWidth
                
                multiline
                placeholder="Título"
              />
  </Grid>
            <FormControl className={classes.margin}>
              <InputLabel shrink htmlFor="bootstrap-input">
                Titulo
              </InputLabel>
              <BootstrapInput
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Nombre Image"
                id="bootstrap-input"
              />
            </FormControl>*/}
            

            <button type="submit" className="btn btn-primary">
              ENTREGAR
            </button>
          </form>
        </div>
      </AddTareaContainer>
    </>
  );
};

export default AddTarea;
