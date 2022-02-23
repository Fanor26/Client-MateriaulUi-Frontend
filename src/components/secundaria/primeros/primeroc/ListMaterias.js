import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarBorder from '@material-ui/icons/StarBorder';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '2px 50px',
    
    marginBottom: '2px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#816550',
    borderColor: '#816550',
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
      backgroundColor: '#816550',
      borderColor: '#816550',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#816550',
      borderColor: '#654321',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem #816550',
    },
  },
})(Button);




const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(3),
  },
  button: {
    
    marginRight: theme.spacing(5),
    marginTop: theme.spacing(-1)
  },
  buttoni: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(-4),
    
  },
  buttonm: {
    marginTop: theme.spacing(-1)
    
  },
}));

const emus = () => {
  
    window.location.href='/viewmus'
     }
    
const ListMaterias = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      
      className={classes.root}
    >
        
      <ListItem>
      
      <BootstrapButton  variant="contained"  className={classes.buttonm}color="secondary" onClick={handleClick}>
      
        MATERIAS
        {open ? <ExpandLess className={classes.buttoni}/> : <ExpandMore className={classes.buttoni}/>}
      </BootstrapButton></ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
        <ListItem className={classes.nested} >
           <BootstrapButton className={classes.button} variant="contained" color="secondary">FIL_PSICOL</BootstrapButton>
          
          </ListItem>
          <ListItem className={classes.nested} >
           <BootstrapButton className={classes.button} variant="contained" color="secondary">ED_FIS</BootstrapButton>
          
          </ListItem>
        
          <ListItem className={classes.nested} >
           <BootstrapButton className={classes.button} variant="contained" color="secondary">LENG</BootstrapButton>
          
          </ListItem>
          <ListItem className={classes.nested} >
           <BootstrapButton className={classes.button} variant="contained" color="secondary">ART_P</BootstrapButton>
          
          </ListItem>
          <ListItem className={classes.nested} >
           <BootstrapButton className={classes.button} variant="contained" color="secondary">MAT</BootstrapButton>
           </ListItem>
           <ListItem className={classes.nested} >
           <BootstrapButton className={classes.button} variant="contained" color="secondary">TEC_TECNOL</BootstrapButton>
          
          </ListItem>
          <ListItem className={classes.nested} >
           <BootstrapButton className={classes.button} variant="contained" color="secondary">REL</BootstrapButton>
          
          </ListItem>
          <ListItem className={classes.nested} >
           <BootstrapButton className={classes.button} variant="contained" onClick={() =>emus()}color="secondary">MÚS</BootstrapButton>
          
          </ListItem>
          <ListItem className={classes.nested} >
           <BootstrapButton className={classes.button} variant="contained" color="secondary">BIO_GEO</BootstrapButton>
           </ListItem>
           <ListItem className={classes.nested} >
           <BootstrapButton className={classes.button} variant="contained" color="secondary">C_S</BootstrapButton>
          
          
          
          </ListItem>
          <ListItem className={classes.nested} >
           <BootstrapButton className={classes.button} variant="contained" color="secondary">LEN_EXT</BootstrapButton>
          
          
          
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
export default ListMaterias