import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Cajonpbp from "./Cajonpbp";
import { Hidden, Box, Grid } from "@material-ui/core";
import Sidevarpbp from "./Sidevarpbp";


import AccountBalanceSharpIcon from "@material-ui/icons/AccountBalanceSharp";
import { Paper, Button } from "@material-ui/core";
const estilos = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
}));

const Contenedorpbp = () => {
  const classes = estilos();
  const [abrir, setAbrir] = React.useState(false);

  const accionAbrir = () => {
    setAbrir(!abrir);
  };
  return (
    <>   
      <Sidevarpbp accionAbrir={accionAbrir} />
     
      <Hidden xlDown>
        <Cajonpbp variant="permanent" open={true} />
      </Hidden>

      <Hidden xlUp>
        <Cajonpbp variant="temporary" open={abrir} onClose={accionAbrir} />
      </Hidden>
      
      
         
      
      <div className={classes.content}>
       
       <div className={classes.toolbar}>
     </div>
     <Grid item xs={12}>
     <Box
 bgcolor="primary.main"
 
 p={1}

 mx={-2}
 my={-2}
 textAlign="left"
>
 <Button  >

<AccountBalanceSharpIcon /> <Box mx={1} my={1} >ÁREA PERSONAL</Box>
 </Button>
</Box></Grid>
     
     </div>
        
    
        
      
    </>
  );
};

export default Contenedorpbp;
