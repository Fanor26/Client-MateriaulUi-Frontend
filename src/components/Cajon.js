import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Divider, Toolbar } from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";

import { Hidden } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ModalEntrar from "./Modals/ModalEntrar";

const estilos = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xlUp")]: {
      display: "flex",
    },
  },

  title: {
    flexGrow: 1,
  },
  drawer: {
    width: 210,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 210,
  },
}));

const Cajon = (props) => {
  const classes = estilos();

  return (
    <div className={classes.root}>
      <Hidden only={["md", "lg"]}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="right"
          variant={props.variant}
          open={props.open}
          onClose={props.onClose ? props.onClose : null}
        >
          <Toolbar>
            <IconButton edge="start" onClick={props.onClose} color="contained">
              <ArrowForwardIosIcon />
            </IconButton>
          </Toolbar>

          <Divider />
          <ModalEntrar />
        </Drawer>
      </Hidden>
    </div>
  );
};

export default Cajon
