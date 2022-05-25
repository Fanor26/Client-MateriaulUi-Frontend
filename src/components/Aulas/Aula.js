import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AppBar,
  Toolbar,
 Typography,
  Button, Grid, Box
} from "@material-ui/core";
import {Link} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  menuButton: {
    marginRight: "16px",
  },
  title: {
    flexGrow: 1,
  },
  imagen: {
    borderRadius: "50%",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(2),
  },
  h6:{
    fontWeight: 900,
    margin: "5px",

  },
}));
const Aula = (props) => {
  const classes = useStyles();
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  
  const [name, setName] = useState("");
  const [avatar, setImage] = useState("");

  useEffect(() => {
    

    axios
      .get(`http://localhost:5000/aula/${props.match.params.id}`)

      .then((res) => [
        setNombre(res.data.nombre),
        setCategoria(res.data.categoria),
       
        setName(res.data.name),
        setImage(res.data.avatar)
        
      ])
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <AppBar elevation={20} color="contained">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <h6 className={classes.h6}>{sessionStorage.getItem('nombre')} </h6> 

          </Typography>
          <h6 className={classes.h6}>    {sessionStorage.getItem('gestion')}</h6> 
          </Toolbar>
      </AppBar>
      
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
      <Grid item xs={12}>
      <div style={{ position: "right" }}>
             <Box mt={5}></Box>
            </div>
  </Grid>
  <Grid item xs={12}>
            <div style={{ position: "center" }}>
              <Link
                to="/register"
                className="btn btn-outline-warning float-center my-2 "
              >
                + REGISTRATE
              </Link>
            </div>
  </Grid>
      <div className="container">
    {/*  <img src={`${avatar}`} alt="" width={"100%"} height={500} />*/}
        <h2>{nombre} {categoria}</h2>
        
        <p>{name}</p>
        
        
      </div>
</div>
      
    </>
  );
};

export default Aula;
