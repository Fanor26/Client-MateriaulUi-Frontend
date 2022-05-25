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

const AddAula = () => {
  const classes = useStyles();
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  
  
  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  const changeOnClick = async (e) => {
    e.preventDefault();

    const tareas = { 
      nombre, 
      categoria, 
      name,
      image,
      escuela:sessionStorage.getItem('idAula'),
        escuelaNombre:sessionStorage.getItem('nombre')
      
    };

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("categoria", categoria);
    
    formData.append("name", name);
    formData.append("image", image);

    formData.append("escuela", sessionStorage.getItem('idEscuela'));
    formData.append("escuelaNombre", sessionStorage.getItem('nombre'));

   
    


    setNombre("");
    setCategoria("");
    
    setName("");
    setImage("");

 

    
    const token =sessionStorage.getItem('token')
    const respuesta = await Axios.post("http://localhost:5000/aula/crear", formData,{
      headers:{'autorizacion':token}

      

     } )

    console.log(respuesta);

    const mensaje = respuesta.data.mensaje;

    if (mensaje !== 'Bienvenido') {
      Swal.fire({
        icon: "success",
        title: mensaje,
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location.href = "/inicial";
      }, 1600);
    } else {
      /*   const token = respuesta.data.token 
      const nombre = respuesta.data.nombre
      const categoria = respuesta.data.categoria
      const idAula = respuesta.data.id
    
      sessionStorage.setItem(' token',token )
      sessionStorage.setItem('nombre',nombre)
       sessionStorage.setItem('categoria',categoria)
      
      sessionStorage.setItem('idAula',idAula) */

      Swal.fire({
        icon: "success",
        title: "Tarea Creado Correctamente",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        window.location.href = "/inicial";
      }, 1600);
    }
  };

  return (
    <>
    <Contenedor/>
      <AddTareaContainer>
        <div className="container">
          <h2>AGREGAR NUEVA AULA</h2>
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
                Nombre Aula
              </InputLabel>
              <BootstrapInput
                onChange={(e) => setNombre(e.target.value)}
                required
                placeholder="Nombre Aula"
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
              REGISTRAR AULA
            </button>
          </form>
        </div>
      </AddTareaContainer>
    </>
  );
};

export default AddAula;
