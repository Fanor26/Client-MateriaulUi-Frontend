import React from "react";
import { Button, Box, Grid, Paper, Popover } from "@material-ui/core/";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "right",

    color: theme.palette.text.secondary,
    marginTop: "10px",
  },
}));
const ButtonCuentaE = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const classes = useStyles();
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const salir= () =>{

    sessionStorage.clear()
    window.location.href="/"
  }
  //navbar

  return (
    <>
      <Button color="default" onClick={handleToggle} ref={anchorRef} >
      {sessionStorage.getItem('primernombre')}
        <ArrowDropDownIcon />
      </Button>

      <Popper open={open} color="contained" anchorEl={anchorRef.current}>
        <Paper elevation={20} className={classes.paper}>
          <ClickAwayListener onClickAway={handleClose}>
            <ButtonGroup
              orientation="vertical"
              color="contained"
              variant="contained"
            >
              <Button variant="text">
                <Link to="/contenedorpas" style={{ color: "#000000" }}>
                  {" "}
                  Área personal
                </Link>
              </Button>
             
              <Button variant="text">
                <Link to="/" style={{ color: "#000000" }}>
                  {" "}
                  Calificaciones
                </Link>
              </Button>
              <Button variant="text" onClick={() =>salir()}>
                
                  Cerrar Sesion
                
              </Button>
            </ButtonGroup>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </>
  );
};
export default ButtonCuentaE;
