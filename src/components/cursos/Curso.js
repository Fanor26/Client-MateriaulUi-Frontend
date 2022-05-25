import React, { useState, useEffect } from "react";
import axios from "axios";
import Contenedor from '../Contenedor'
import {Link} from 'react-router-dom'
import {Grid, Box} from "@material-ui/core";
import Register from '../RegistroLogin/Register'
const Curso = (props) => {
  const [cursonombre, setCursonombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [profesor, setProfesor] = useState("");
  const [name, setName] = useState("");
  const [avatar, setImage] = useState("");

  useEffect(() => {
    

    axios
      .get(`http://localhost:5000/curso/${props.match.params.id}`)

      .then((res) => [
        setCursonombre(res.data.cursonombre),
        setCategoria(res.data.categoria),
        setProfesor(res.data.profesor),
        setName(res.data.name),
        setImage(res.data.avatar)
        
      ])
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Contenedor />
      
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
        <h2>{cursonombre} {categoria}</h2>
        
        <p>{name}</p>
        <p>{cursonombre._id}</p>
        
      </div>
    
      
    </>
  );
};

export default Curso;
