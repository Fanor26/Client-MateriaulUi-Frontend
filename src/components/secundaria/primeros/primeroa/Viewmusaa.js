import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Cajonmus from "./Cajonmus";
import { Hidden, Box, Grid, Typography } from "@material-ui/core";
import Sidevarpas from "./Sidevarpas";

import styled from "styled-components";
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
const AddTareaContainer = styled.div`
 

  width: 31.25rem;
  h6 {
    font-weight: 900;
    margin: 1rem;
    color: var(--dark-orange);
  }
`;
const Viewmusaa = () => {
  const classes = estilos();
  const [abrir, setAbrir] = React.useState(false);

  const accionAbrir = () => {
    setAbrir(!abrir);
  };
  return (
    <>   
      <Sidevarpas accionAbrir={accionAbrir} />
     
      <Hidden xlDown>
        <Cajonmus variant="permanent" open={true} />
      </Hidden>

      <Hidden xlUp>
        <Cajonmus variant="temporary" open={abrir} onClose={accionAbrir} />
      </Hidden>
      
      
         
      
      <div className={classes.content}>
       
       <div className={classes.toolbar}>
     </div>
     <Grid item xs={12}>
     <Box
 bgcolor="primary.main"
 
 p={1}

 mx={-6}
 my={-1}
 textAlign="left"
>
 <Button  >

<AccountBalanceSharpIcon /> <Box mx={1} my={1} >MÚSICA</Box>
 </Button>
</Box></Grid>
     
     </div>
        
     <AddTareaContainer>
       <Typography variant="h8" className={classes.title}>
          <h6>{sessionStorage.getItem('primernombre')} {sessionStorage.getItem('segundonombre')} {sessionStorage.getItem('tercernombre')} {sessionStorage.getItem('apellidopaterno')} {sessionStorage.getItem('apellidomaterno')}</h6>
          
        </Typography>
        </AddTareaContainer>
        
      
    </>
  );
};

export default Viewmusaa;
