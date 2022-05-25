import React from "react";
import {
  AppBar,
  Toolbar,
 Typography,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Aulas from './Aulas/Aulas'
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
const Inicial = () => {
    const classes = useStyles();
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

        
        Inicial
        </div>
        <Aulas/>
       
        
</>
)
}

export default Inicial