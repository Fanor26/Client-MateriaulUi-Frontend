import React, { useState, useEffect } from "react";
import PageHeader from "./../../components/headers/PageHeader";
import Barra from './Barra'
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import useTable from "./../../components/headers/useTable";
import {
  makeStyles,
  Paper, Grid,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import * as employeeService from "./../../services/employeeService";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const headCells = [
  { id: "nombres", label: "NOMBRES" },
  { id: "apellidos", label: "APELLIDOS" },
  { id: "estadoVacuna", label: "ESTADO VACUNA" },
 
  { id: "dosisAplicadas", label: "DOSIS APLICADAS" },
  { id: "date", label: "ESTADO" },
];

const VerAsistencias = () => {
  const [records, setEmployees] = useState(employeeService.getAllEmployees());
  const classes = useStyles();
  const { TblContainer, TblHead, TblPagination } = useTable(records, headCells);



  useEffect(() => {
   
    
    const getEmployees = async () => {
      const id=  sessionStorage.getItem("idUsuario")
      const token=  sessionStorage.getItem("token")
      const res = await fetch("http://localhost:5000/asistencia/listarAsistenciasEstudiante/"+id, {
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
    <Barra/>
    
      <PageHeader
        title="Lista de Asistencias"
        subTitle="Form design with Validation"
        icon={<PeopleAltIcon fontSize="large" />}
      /><Grid container spacing={2}>
      <Paper elevation={10} style={paperStyle}>
        
    

        <TblContainer>
          <TblHead />
        
          {records?.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.nombres}</TableCell>
                <TableCell>{record.apellidos}</TableCell>
                <TableCell>{record.estadoVacuna}</TableCell>
                <TableCell>{record.dosisAplicadas}</TableCell>
                <TableCell>{record.date}</TableCell>
              </TableRow>
            ))}
       
        </TblContainer>
        <TblPagination />
       
      </Paper> </Grid>
    
    </>
  );
};

export default VerAsistencias;
