import React from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import "../../../../assets/css/Dashboard.css";

import Cards from "./Cards";


import Contenedorsas from "./Contenedorsas";

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '2px 15px',
    marginTop: '10px',
   
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#ffa420',
    borderColor: '#ffa420',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#ffa420',
      borderColor: '#ffa420',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#ffa420',
      borderColor: '#ffa420',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem #ffa420',
    },
  },
})(Button);


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  iconos: {
    color: "white",
  },
  container: {
    paddingTop: "10px",
    paddingLeft:"10px",
    paddingBottom:"10px",
    alignItems: "center",
    
  },
  
  containerGrafica: {
    marginTop: "40px",
  },
  containerTabla: {
    marginTop: "40px",
  },
  
}));


const Dashboardsas = (props) => {
  const classes = useStyles();
  return (
    
<>
    
    <div className={classes.root}>
    
    <Grid 
    
    
    
          container
          spacing={2}
          className={classes.container}
    >
      
      <Grid item xs={12}>
                    <Contenedorsas />
                  
                </Grid>
                <Paper elevation={10}  >
                <Grid
          container
          spacing={1}
          className={classes.container}
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={8}
        >
      
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Cards titulo="FILOSOFÍA-PSICOLOGÍA" 
            icono={
              <BootstrapButton
                className={classes.iconos}
               
                color="primary"
                style={{ color: "#fff" }}
              >
                <FolderSpecialIcon />
              </BootstrapButton>
            }/>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Cards titulo="EDUCACION FÍSICA"
            icono={
              <BootstrapButton
                className={classes.iconos}
               
                color="primary"
                style={{ color: "#fff" }}
              >
                <FolderSpecialIcon />
              </BootstrapButton>
            }/>
          </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Cards titulo="COMUNICACIÓN Y LENGUAJE" 
            icono={
              <BootstrapButton
                className={classes.iconos}
               
                color="primary"
                style={{ color: "#fff" }}
              >
                <FolderSpecialIcon />
              </BootstrapButton>
            }/>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Cards titulo="ARTES PLÁSTICAS" 
            icono={
              <BootstrapButton
                className={classes.iconos}
               
                color="primary"
                style={{ color: "#fff" }}
              >
                <FolderSpecialIcon />
              </BootstrapButton>
            } />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Cards titulo="MATEMÁTICAS" 
            icono={
              <BootstrapButton
                className={classes.iconos}
               
                color="primary"
                style={{ color: "#fff" }}
              >
                <FolderSpecialIcon />
              </BootstrapButton>
            } />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Cards titulo="TÉCNICA TECNOLÓGICA" 
            
            icono={
              <BootstrapButton
                className={classes.iconos}
               
                color="primary"
                style={{ color: "#fff" }}
              >
                <FolderSpecialIcon />
              </BootstrapButton>
            }/>
          </Grid>
      
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Cards titulo="RELIGÍON " 
            icono={
              <BootstrapButton
                className={classes.iconos}
               
                color="primary"
                style={{ color: "#fff" }}
              >
                <FolderSpecialIcon />
              </BootstrapButton>
            } />
          </Grid>

          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Cards titulo="EDUCACIÓN MUSICAL"
           

            icono={
              <BootstrapButton
                className={classes.iconos}
                href="/viewmusea"
                color="primary"
                style={{ color: "#fff" }}
              >
                <FolderSpecialIcon />
              </BootstrapButton>
            }
            />
           
          </Grid>

          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Cards titulo="BIOLOGÍA-GEOGRAFÍA" 
            icono={
              <BootstrapButton
                className={classes.iconos}
               
                color="primary"
                style={{ color: "#fff" }}
              >
                <FolderSpecialIcon />
              </BootstrapButton>
            }
            
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Cards titulo="CIENCIAS SOCIALES" 
            icono={
              <BootstrapButton
                className={classes.iconos}
               
                color="primary"
                style={{ color: "#fff" }}
              >
                <FolderSpecialIcon />
              </BootstrapButton>
            }
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Cards titulo="LENGUA EXTRANJERA" 
            
            icono={
              <BootstrapButton
                className={classes.iconos}
               
                color="primary"
                style={{ color: "#fff" }}
              >
                <FolderSpecialIcon />
              </BootstrapButton>
            }/>
          </Grid>
          
        
          </Grid>
         
          </Paper>
       
          
          
        </Grid>

        

       
      
     
    </div>
    </> 
  );
};

export default Dashboardsas;
