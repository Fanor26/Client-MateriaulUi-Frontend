import React, { useState, useEffect } from "react";
import axios from "axios";
import Viewmusaa from "./Viewmusaa";
const Perfilpas = (props) => {
  const [primernombre, setPrimernombre] = useState('')
  const [segundonombre, setSegundonombre] = useState('')
  const [tercernombre, setTercernombre] = useState('')
  const [apellidopaterno, setApellidopaterno] = useState('')
  const [apellidomaterno, setApellidomaterno] = useState('')

  useEffect(() => {
    const id=  sessionStorage.getItem("idUsuario")
    const token =sessionStorage.getItem('token')
    axios
      .get(`http://localhost:5000/primeroasec/listar/${props.match.params.id}`,{
      
      headers:{'autorizacion':token}
   } )

      .then((res) => [
        setPrimernombre(res.data.primernombre),
        setSegundonombre(res.data.segundonombre),
        setTercernombre(res.data.tercernombre),
        setApellidopaterno(res.data.apellidopaterno),
        setApellidomaterno(res.data.apellidomaterno),

        
      ])
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Viewmusaa />
      <div className="container">
      
        <h2>{apellidopaterno}</h2>
        <p>{apellidomaterno}</p>
        <p>{primernombre}</p>
        <p>{segundonombre}</p>
        <p>{tercernombre}</p>
      </div>
    </>
  );
};

export default Perfilpas;
