import React, { useState, useEffect } from "react";
import PageHeader from "../components/headers/PageHeader";

import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import useTable from "../components/headers/useTable";
import {
  makeStyles,
  Paper, Grid,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import * as employeeService from "../services/employeeService";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const headCells = [
  { id: "firstname", label: "Employee Name" },
  { id: "lastname", label: "Employee Last Name" },
  { id: "email", label: "Email Mobile" },
 
  { id: "curso", label: "Curso" },
  { id: "dateFounded", label: "Fecha" },
];

const Employees = () => {
  const [records, setEmployees] = useState(employeeService.getAllEmployees());
  const classes = useStyles();
  const { TblContainer, TblHead, TblPagination } = useTable(records, headCells);



  useEffect(() => {
   
    
    const getEmployees = async () => {
      const res = await fetch("http://localhost:4000/api/employees/", {
        method: "GET",
       
      });
      //console.log(res);
      const response = await res.json();
      setEmployees(response);
    };
    getEmployees();
  }, []);
  
const paperStyle = { padding: '30px 20px', width: 800, margin: " 10px auto", marginTop:"40px" }

  return (
    <React.Fragment>
      <PageHeader
        title="New Employee"
        subTitle="Form design with Validation"
        icon={<PeopleAltIcon fontSize="large" />}
      /><Grid container spacing={2}>
      <Paper elevation={10} style={paperStyle}>
        
        

        <TblContainer>
          <TblHead />
        
          {records?.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.firstname}</TableCell>
                <TableCell>{record.lastname}</TableCell>
                <TableCell>{record.email}</TableCell>
                <TableCell>{record.curso}</TableCell>
              </TableRow>
            ))}
       
        </TblContainer>
        <TblPagination />
       
      </Paper> </Grid>
    </React.Fragment>
  );
};

export default Employees;
