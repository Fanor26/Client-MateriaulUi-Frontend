import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, Collapse } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingleft: theme.spacing(0),
  },
}));

const ModalMenul = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
      <>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <Button onClick={handleClick}>
        NIVEL
        {open ? <ExpandLess /> : <ExpandMore />}
      </Button>

      <Collapse in={open} tiemout="auto" unmountOnExit>
        <List component="div">fanor</List>
      </Collapse>
    </List>
    </>
  );
};

export default ModalMenul
