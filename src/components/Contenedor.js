import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Cajon from "./Cajon";
import Tareas from './Tareas'
import { Hidden, Box, Grid } from "@material-ui/core";
import AccountBalanceSharpIcon from "@material-ui/icons/AccountBalanceSharp";
import { Button } from "@material-ui/core";

import Navbbr from "./Navbbr";

const estilos = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(2),
  },
}));

const Contenedor = () => {
  const classes = estilos();
  const [abrir, setAbrir] = React.useState(false);

  const accionAbrir = () => {
    setAbrir(!abrir);
  };

  return (
    <>
      <Navbbr accionAbrir={accionAbrir} />

      <Hidden xlDown>
        <Cajon variant="permanent" open={false} />
      </Hidden>

      <Hidden xlUp>
        <Cajon variant="temporary" open={abrir} onClose={accionAbrir} />
      </Hidden>
     
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        <Grid item xs={12} spacing={2}>
        
          <Box bgcolor="primary.main" p={1} mx={-4} my={-1} textAlign="left">
            <Button>
              <AccountBalanceSharpIcon />{" "}
              <Box mx={1} my={1}>
                PRINCIPAL
              </Box>
            </Button>
          </Box>
        
          </Grid>
          
          
  
    </div>
    </>
  );
};

export default Contenedor
