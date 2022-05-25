import React, {useState,useEffect}from 'react'
import Swal from 'sweetalert2'
import Axios from 'axios'
import Barra from './Barra'
import InputLabel from "@material-ui/core/InputLabel";
import { Grid, TextField, Field } from "@material-ui/core";
const RegistrarAsistencia = () => {
    const[nombres,setNombres]=useState('')
    const[apellidos,setApellidos]=useState('')
   
    const[estadoVacuna,setEstadoVacuna]=useState([])
    const[estadoVacunaSelect,setEstadoVacunaSelect]=useState([])
    const[dosisAplicadas,setDosisAplicadas]=useState([])
    const[dosisAplicadasSelect,setDosisAplicadasSelect]=useState([])
  /*  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
  };*/


    useEffect(() => {
     
        setEstadoVacuna(['No Vacunado','Vacunado', 'Primera Dosis'])
        setEstadoVacunaSelect('No vacunado')

        setDosisAplicadas(['Ninguna', 'Primera Dosis','Segunda Dosis','Esquema Completo'])
        setDosisAplicadasSelect('No vacunado')


    }, [])
    const guardar= async(e)=>{


      e.preventDefault()
      const usuario={

        nombres, 
        apellidos,
       
        estadoVacuna:estadoVacunaSelect,
        dosisAplicadas:dosisAplicadasSelect,
        curso:sessionStorage.getItem('idUsuario'),
        CursoNombre:sessionStorage.getItem('nombre')
      }/*
      const formData = new FormData();
    formData.append("nombres", nombres);
    formData.append("apellidos", apellidos);
    formData.append("estadoVacuna", estadoVacunaSelect);
    formData.append("dosisAplicadas", dosisAplicadasSelect);
    formData.append("name", name);
    formData.append("image", image);
    formData.append("curso", sessionStorage.getItem('idUsuario'));
    formData.append("cursoNombre", sessionStorage.getItem('nombre'));*/

      if(nombres===""){
         Swal.fire({
          icon:'error',
          title:'Debe Escribir un Nombre',
          showConfirmButton:'false',
          timer:1500



         })


      }
     else if(apellidos===""){
        Swal.fire({
         icon:'error',
         title:'Debe Escribir un Apellido',
         showConfirmButton:'false',
         timer:1500



        })
      }
      else{
        const token =sessionStorage.getItem('token')
        const respuesta= await Axios.post('http://localhost:5000/asistencia/crear',usuario,{
        headers:{'autorizacion':token}

        

       } )
       const mensaje= respuesta.data.mensaje
       console.log(mensaje)
       Swal.fire({
        icon:'success',
        title:mensaje,
        showConfirmButton:'false',
        timer:1500



       })
       e.target.reset();
       setNombres("");
       setApellidos("");


      }

    }
    
  return (
    <>
    <Barra/>
    
<div className="container mt-4">
        <div className="row">
          <div className="col-md-7  mx-auto">
            <div className="card">
              <div className="container text-center fa-5x">
                <i className="fas fa-user-plus"></i>
              </div>
              <div className="card-header bg-info text-center">
                <h4>Registrar Asistencia</h4>
              </div>
              <div className="card-body">
                <form onSubmit={guardar}>
                  <div className="row">
                    {/*
                  <div className="col-md-6">
                  <Grid >
              <InputLabel
                shrink
                htmlFor="bootstrap-input"
                
              >
                Elija archivo para Subir
              </InputLabel>
              <input type="file" required name="image" onChange={onChangeImage} />
            </Grid></div>

                  <div className="col-md-6">
                      <label>Name Image</label>
                      <input type="text" className="form-control required" onChange={(e)=>setName(e.target.value)}/>
  </div>*/}

                    <div className="col-md-6">
                      <label>Nombres</label>
                      <input type="text" className="form-control required" onChange={(e)=>setNombres(e.target.value)}/>
                    </div>
                  
                  <div className="col-md-6">
                      <label>Apellidos</label>
                      <input type="text" className="form-control required"onChange={(e)=>setApellidos(e.target.value)} />
                    </div>
                    
                    <div className="col-md-6">
                      <label>Dosis Aplicadas</label>
                      <select className="form-control" onChange={(e)=>setDosisAplicadasSelect(e.target.value)}>
                        {

                          dosisAplicadas.map(dosisAplicada =>(
                            <option key={dosisAplicada}>
                                  {dosisAplicada}

                            </option>

                          ))
                        }
                        </select>
                    </div>
                    <div className="col-md-6">
                      <label>Estado de Vacuna</label>
                      <select className="form-control" onChange={(e)=>setEstadoVacunaSelect(e.target.value)}>
                        {

                          estadoVacuna.map(estadoVacunas =>(
                            <option key={estadoVacunas}>
                                  {estadoVacunas}

                            </option>

                          ))
                        }
                        </select>
                        </div>
                    </div>
                    
                  

                  <button type="submit" className="btn btn-outline-info">
                    <span className="fa fa-save"></span> Guardar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default RegistrarAsistencia