import React, { useState, useEffect } from "react";
import axios from "axios";
import Viewmusaa from "././secundaria/primeros/primeroa/Viewmusaa";
const Tarea = (props) => {
  const [titulo, setTitulo] = useState("");
  const [tarea, setTarea] = useState("");
  const [autornombre, setAutornombre] = useState("");
  const [avatar, setImage] = useState("");

  useEffect(() => {
    
    const token =sessionStorage.getItem('token')
    axios
      .get(`http://localhost:5000/tareas/${props.match.params.id}`,{
      
      headers:{'autorizacion':token}
   } )

      .then((res) => [
        setTitulo(res.data.titulo),
        setTarea(res.data.tarea),
        setAutornombre(res.data.autornombre),
        setImage(res.data.avatar),
        
      ])
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Viewmusaa />
      <div className="container">
      <img src={`${avatar}`} alt="" width={"100%"} height={500} />
        <h2>{titulo}</h2>
        <p>{tarea}</p>
        <p>{autornombre}</p>
      </div>
    </>
  );
};

export default Tarea;
