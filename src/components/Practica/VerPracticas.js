
import React, { useState, useEffect } from "react";
import PageHeader from "../headers/PageHeader";

import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import useTable from "../headers/useTable";
import NavbarPractica from './NavbarPractica'
import {
  makeStyles,
  Paper, Grid,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import * as employeeService from "../../services/employeeService";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const headCells = [
  { id: "nombres", label: "NOMBRES" },
  { id: "apellidos", label: "APELLIDOS" },
  { id: "dosisAplicadas", label: "DOSIS APLICADAS" },
  { id: "estadoVacuna", label: "ESTADO VACUNA" },
  { id: "name", label: "NAME" },
  { id: "image", label: "IMAGE" },
  { id: "avatar", label: "AVATAR" },

  
];


const VerPracticas = () => {
  const [records, setEmployees] = useState(employeeService.getAllEmployees());
  const classes = useStyles();
  const { TblContainer, TblHead, TblPagination } = useTable(records, headCells);

  
  useEffect(() => {
   
    
    const getEmployees = async () => {
      const id=  sessionStorage.getItem("idUsuario")
      const token=  sessionStorage.getItem("token")
      const res = await fetch("http://localhost:5000/practica/listarPracticasCurso/"+id, {
        method: "GET",
        headers:{'autorizacion':token}
       
      });
      //console.log(res);
      const response = await res.json();
      setEmployees(response);
    };
    getEmployees();
  }, []);
  
const paperStyle = { padding: '30px 20px', width: 800, margin: " 10px auto", marginTop:"40px" }

  return (
    <>
  <NavbarPractica/>
      <PageHeader
        title="Lista de Practicas"
       
        icon={<PeopleAltIcon fontSize="large" />}
      /> <Grid container spacing={2}>
    <Paper elevation={10} style={paperStyle}>
      
  

   
  <Grid container spacing={2} className={classes.container}>
        <Grid item xs={12}>
        </Grid>
          {records?.map((record) => (
            
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4} key={record.id}>
      
      <Paper elevation={10}  >
             
              <h6>{record.nombres}</h6>
              <img src={record.avatar} alt="" width={"100%"} height={500} />
        <div className="p-2">
          <h3>{record.name}</h3>
          
        </div>
        </Paper>
        </Grid>
    ))} </Grid>
  
  </Paper>
    </Grid>
 
    </>
  );
};

export default VerPracticas;

