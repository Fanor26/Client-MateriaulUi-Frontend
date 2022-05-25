import { Grid, Paper } from "@material-ui/core";
import React, {useState, useEffect} from "react";
import Controls from "../../components/controls/Controls";
import Form from "../../components/headers/Form";
import useForm from "../../components/headers/useForm";
import * as employeeService from "./../../services/employeeService";
import FormControl from "@material-ui/core/FormControl";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import Swal from 'sweetalert2'
import Axios from 'axios'
import PageHeader from "./../../components/headers/PageHeader";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Barra from '../../components/Asistencia/Barra'
import {blue,  orange} from '@material-ui/core/colors';
import {
  alpha,
  ThemeProvider,
  withStyles,
  makeStyles,
  createTheme,
} from "@material-ui/core/styles";
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
    padding: "10px 30px",
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
  slecto: {
    margin: theme.spacing(1),
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 30px",
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
}));
const theme = createTheme({
  palette: {
    primary: blue,
  },
});
const EmployeeForm = () => {
  const validate = (fieldValues = values) => {
    let temp = {};
    if ("fullName" in fieldValues)
      temp.fullName =
        fieldValues.fullName && fieldValues.fullName !== ""
          ? ""
          : "This field is required";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required";
    if ("departmentId" in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length !== 0 ? "" : "This field is required";
    setErrors({ ...temp });
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
    resetForm,
  } = useForm(employeeService.initialFValue, true, validate);
  const classes = useStyles();
  const[nombres,setNombres]=useState('')
    const[apellidos,setApellidos]=useState('')
   const [date, setDate]=useState('')
    const[estadoVacuna,setEstadoVacuna]=useState([])
    const[estadoVacunaSelect,setEstadoVacunaSelect]=useState([])
    const[dosisAplicadas,setDosisAplicadas]=useState([])
    const[dosisAplicadasSelect,setDosisAplicadasSelect]=useState([])

  useEffect(() => {
     
    setEstadoVacuna(['No Vacunado','Vacunado', 'Primera Dosis'])
    setEstadoVacunaSelect('No vacunado')

    setDosisAplicadas(['Ninguna', 'Primera Dosis','Segunda Dosis','Esquema Completo'])
    setDosisAplicadasSelect('No vacunado')


}, [])
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
      employeeService.insertEmployee(values);
      
    
    
     
      
      const usuario={

        nombres, 
        apellidos,
     
       
        estadoVacuna:estadoVacunaSelect,
        dosisAplicadas:dosisAplicadasSelect,
        estudiantetoken:sessionStorage.getItem('idUsuario'),
        cursoNombre:sessionStorage.getItem('nombre')
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
        showConfirmButton:false,
        timer:1500



       })
       setTimeout(() => {
        window.location.href = "/verasistencias";
      }, 1600);


      }

    }
  
  
  const paperStyle = { padding: '30px 20px', width: 600, margin: " 10px auto", marginTop:"40px" }
  return (
    <>
    <Barra/>
    <Form onSubmit={handleSubmit}>
      <PageHeader
        title="Registro de Asistencia"
       
        icon={<PeopleAltIcon fontSize="large" />} />
      <Grid >
      <Paper elevation={10} style={paperStyle}>
      <div className="container  text-center" >
      <Paper elevation={5}  variant="contained" color="primary">
      <ThemeProvider theme={theme}>
      <PeopleAltIcon fontSize="large" />
             
             
                <h4>Registrar Asistencia</h4></ThemeProvider></Paper>
              </div> 
        <div className="row">
        <div className="col-md-6">
        <FormControl className={classes.margin}>
              <InputLabel shrink htmlFor="bootstrap-input">
                Nombres
              </InputLabel>
              <BootstrapInput
                onChange={(e) => setNombres(e.target.value)}
                required
                placeholder="Nombres"
                id="bootstrap-input"
                multiline
              />
            </FormControl></div>
            <div className="col-md-6">
            <FormControl className={classes.margin}>
              <InputLabel shrink htmlFor="bootstrap-input">
                Apellidos 
              </InputLabel>
              <BootstrapInput
                onChange={(e) => setApellidos(e.target.value)}
                required
                multiline
                placeholder="Apellidos"
                id="bootstrap-input"
              />
            </FormControl></div>
            <div className="col-md-6">
            
                    <InputLabel shrink htmlFor="bootstrap-input" className={classes.slecto} >
                Estado Vacuna
              </InputLabel>
              <FormControl className={classes.margin}>
                      <select className="form-control" onChange={(e)=>setEstadoVacunaSelect(e.target.value)}>
                        {

                          estadoVacuna.map(estadoVacunas =>(
                            <option key={estadoVacunas}>
                                  {estadoVacunas}

                            </option>

                          ))
                        }
                        </select>
                        </FormControl>
                        </div>
            <div className="col-md-6">
            <InputLabel shrink htmlFor="bootstrap-input" className={classes.slecto}>
                Dosis Aplicadas 
              </InputLabel>
            <FormControl className={classes.margin}>
           
                      <select className="form-control" onChange={(e)=>setDosisAplicadasSelect(e.target.value)}>
                        {

                          dosisAplicadas.map(dosisAplicada =>(
                            <option key={dosisAplicada}>
                                  {dosisAplicada}

                            </option>

                          ))
                        }
                        </select>
                       </FormControl>
                    </div>
                   
            
       
       {   /*<Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={employeeService.genderItems}
          />*/}
      
       
          <Controls.DatePicker
            name="hireDate"
            value={values.hireDate}
            
            onChange={handleInputChange}
          />
         
        
         

         
         <button type="submit" className="btn btn-outline-info">
                    <span className="fa fa-save"></span> Guardar
                  </button>
           
          
          </div>
        </Paper>
      </Grid>
    </Form>
    </>
  );
};

export default EmployeeForm;