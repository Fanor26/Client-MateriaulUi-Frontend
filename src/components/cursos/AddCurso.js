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
import Contenedor from '../Contenedor'
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

const AddCurso = () => {
  const classes = useStyles();
  const [cursonombre, setCursonombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [profesor, setProfesor] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  const changeOnClick = async (e) => {
    e.preventDefault();

    const tareas = { 
      cursonombre, 
      categoria, 
      profesor,
      name,
      image,
      
    };

    const formData = new FormData();
    formData.append("cursonombre", cursonombre);
    formData.append("categoria", categoria);
    formData.append("profesor", profesor);
    formData.append("name", name);
    formData.append("image", image);
   
    


    setCursonombre("");
    setCategoria("");
    setProfesor("");
    setName("");
    setImage("");
    

    const respuesta = await Axios.post("http://localhost:5000/curso/crear", formData,


    );
    console.log(respuesta);

    const mensaje = respuesta.data.mensaje;

    if (mensaje !== "Lista de Cursos") {
      Swal.fire({
        icon: "success",
        title: "Curso Creado Correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location.href = "/cursos";
      }, 1600);
    } else {
      /*   const token = respuesta.data.token 
      const cursonombre = respuesta.data.cursonombre
      const categoria = respuesta.data.categoria
     const profesor = respuesta.data.profesor
      const idCurso = respuesta.data.id
    
      sessionStorage.setItem(' token',token )
      sessionStorage.setItem('cursonombre',cursonombre)
       sessionStorage.setItem('profesor',categoria)
       sessionStorage.setItem('profesor',autorombre)
      sessionStorage.setItem('idCurso',idCurso) */

      Swal.fire({
        icon: "success",
        title: "Tarea Creado Correctamente",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        window.location.href = "/cursos";
      }, 1600);
    }
  };

  return (
    <>
    <Contenedor/>
      <AddTareaContainer>
        <div className="container">
          <h2>AGREGAR NUEVO CURSO</h2>
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
                Nombre Curso
              </InputLabel>
              <BootstrapInput
                onChange={(e) => setCursonombre(e.target.value)}
                required
                placeholder="Curso Nombre"
                id="bootstrap-input"
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel shrink htmlFor="bootstrap-input">
                Categoria
              </InputLabel>
              <BootstrapInput
                onChange={(e) => setCategoria(e.target.value)}
                required
                placeholder="Categoria"
                id="bootstrap-input"
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel shrink htmlFor="bootstrap-input">
                Name Image
              </InputLabel>
              <BootstrapInput
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Name Image"
                id="bootstrap-input"
              />
            </FormControl>


            <button type="submit" className="btn btn-primary">
              REGISTRAR CURSO
            </button>
          </form>
        </div>
      </AddTareaContainer>
    </>
  );
};

export default AddCurso;
