import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Grid, TextField, Field } from "@material-ui/core";
import axios from 'axios'
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

const EditTarea = (props) => {
  const classes = useStyles();
  const [titulo, setTitulo] = useState("");
  const [tarea, setTarea] = useState("");
  const [autornombre, setAutornombre] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [cloudinary_id, setCloudinary_id] = useState("");
  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  const changeOnClick = async (e) => {
    e.preventDefault();

    const tareas = { titulo, tarea, autornombre };


    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("tarea", tarea);
    formData.append("autornombre", autornombre);
    formData.append("name", name);
    formData.append("image", image);
    formData.append("cloudinary_id", cloudinary_id);

    setTitulo("");
    setTarea("");
    setAutornombre("");
    setName("");
    setImage("");
    
    const respuesta = await axios.put(`http://localhost:5000/tareas/update/${props.match.params.id}`,formData,
    
    );
    console.log(respuesta);

    const mensaje = respuesta.data.mensaje;

    if (mensaje !== "Lista de Tareas") {
      Swal.fire({
        icon: "success",
        title: "Tarea Actulizada  Correctamente",
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
        title: "Tarea Actualizado Correctamente",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        window.location.href = "/evaluacionespas";
      }, 1600);
    }
  };
  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/tareas/${props.match.params.id}`)
      .then((res) => [
        setTitulo(res.data.titulo),
        setTarea(res.data.tarea),
        setAutornombre(res.data.autornombre),
        setName(res.data.name),
        setImage(res.data.image),
        setCloudinary_id(res.data.cloudinary_id),
      ])
      .catch((error) => console.log(error));
  }, [`${props.match.params.id}`]);


  return (
    <>
      <AddTareaContainer>
        <div className="container">
          <h2>ACTUALIZAR TAREA</h2>
          <form onSubmit={changeOnClick} encType="multipart/form-data">
          <FormControl className={classes.margin}>
              <InputLabel shrink htmlFor="bootstrap-input">
                Titulo
              </InputLabel>
              <BootstrapInput
                onChange={(e) => setTitulo(e.target.value)}
                required
                value={titulo}
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
                value={autornombre}
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
              value={tarea}
                onChange={(e) => setTarea(e.target.value)}
                variant="outlined"
                rows={4}
                fullWidth
                
                multiline
                placeholder="Descripcion"
              />
  </Grid>  */}
           
            <FormControl className={classes.margin}>
              <InputLabel shrink htmlFor="bootstrap-input">
                Nombre Archivo
              </InputLabel>
              <BootstrapInput
                onChange={(e) => setCloudinary_id(e.target.value)}
                required
                value={cloudinary_id}
                placeholder="Nombre Imagn"
                id="bootstrap-input"
              />
            </FormControl>
            <Grid className={classes.margin}>
              <InputLabel
                shrink
                htmlFor="bootstrap-input"
                className={classes.margin}
              >
                Elija archivo para Subir
              </InputLabel>
              <input type="file" filename="image"  required className="form-control-file" onChange={onChangeImage} />
            </Grid>

            <button type="submit"  required className="btn btn-primary">
              ACTUALIZAR
            </button>
          </form>
        </div>
      </AddTareaContainer>
    </>
  );
};

export default EditTarea;

  