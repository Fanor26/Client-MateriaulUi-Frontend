import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';


import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(3),
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
      
      
      <ListItem button onClick={handleClick}>
        
        <ListItemText primary="NIVEL" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" >
          <ListItem button className={classes.nested}>
            <ListItemText primary="INICIAL" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="PRIMARIA" />
            </ListItem>
            <ListItem button className={classes.nested}>
            <ListItemText primary="SECUNDARIA" />
          
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
export default ModalMenul