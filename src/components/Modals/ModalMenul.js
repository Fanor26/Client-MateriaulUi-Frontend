import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

import Collapse from '@material-ui/core/Collapse';


import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Modalini from './Modalini'
import Modalprim from './Modalprim'
import Modalsec from './Modalsec'
const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '2px 60px',
    
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
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(-7)
  },
}));

const ModalMenul = () => {
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
      
      
      <BootstrapButton variant="contained" color="secondary" onClick={handleClick}>
      
        NIVEL
        {open ? <ExpandLess className={classes.button}/> : <ExpandMore className={classes.button}/>}
      </BootstrapButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" >
        <ListItem className={classes.nested}>
           <Modalini />
          
          </ListItem>
          <ListItem className={classes.nested}>
           <Modalprim />
          
          </ListItem>
          <ListItem className={classes.nested}>
           <Modalsec />
          
          </ListItem>
          
        </List>
      </Collapse>
    </List>
  );
}
export default ModalMenul