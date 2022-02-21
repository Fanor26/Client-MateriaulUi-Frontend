import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "../assets/css/Dashboard.css";

import CardsHeader from "./CardsHeader";

import "bootstrap/dist/css/bootstrap.min.css";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#79593c",
    borderColor: "#79593c",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#79593c",
      borderColor: "#79593c",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#79593c",
      borderColor: "#79593c",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem #79593c",
    },
  },
})(Button);

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  iconos: {
    color: "white",
  },
  container: {
    paddingTop: "10px",
    alignItems: "center",
  },

  containerGrafica: {
    marginTop: "40px",
  },
  containerTabla: {
    marginTop: "40px",
  },
}));

const Secundaria = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={2} className={classes.container}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              icono={
                <BootstrapButton
                  BootstrapButton
                  className={classes.iconos}
                  href="/loginpas"
                  color="primary"
                  style={{ color: "#fff" }}
                >
                  "A"
                </BootstrapButton>
              }
              titulo="PRIMERO"
              color="rgba(255,175,75,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              icono={
                <BootstrapButton
                  className={classes.iconos}
                  href="/loginpbs"
                  color="primary"
                  style={{ color: "#fff" }}
                >
                  "B"
                </BootstrapButton>
              }
              titulo="PRIMERO"
              color="rgba(255,175,75,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              icono={
                <BootstrapButton
                  className={classes.iconos}
                  href="/loginpcs"
                  color="primary"
                  style={{ color: "#fff" }}
                >
                  "C"
                </BootstrapButton>
              }
              titulo="PRIMERO"
              color="rgba(255,175,75,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
            icono={
              <BootstrapButton
                className={classes.iconos}
                href="/loginsas"
                color="primary"
                style={{ color: "#fff" }}
              >
                "A"
              </BootstrapButton>
            }

              titulo="SEGUNDO" 
              color="rgba(255,175,75,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="SEGUNDO"
              icono={<Button className={classes.iconos}>"B"</Button>}
              color="rgba(255,175,75,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="SEGUNDO"
              icono={<Button className={classes.iconos}>"C"</Button>}
              color="rgba(255,175,75,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="TERCERO"
              icono={<Button className={classes.iconos}>"A"</Button>}
              color="rgba(255,175,75,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="TERCERO"
              icono={<Button className={classes.iconos}>"B"</Button>}
              color="rgba(255,175,75,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="TERCERO"
              icono={<Button className={classes.iconos}>"C"</Button>}
              color="rgba(255,175,75,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="CUARTO"
              icono={<Button className={classes.iconos}>"A"</Button>}
              color="rgba(255,175,75,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="CUARTO"
              icono={<Button className={classes.iconos}>"B"</Button>}
              color="rgba(255,175,75,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="CUARTO"
              icono={<Button className={classes.iconos}>"C"</Button>}
              color="rgba(255,175,75,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="QUINTO"
              icono={<Button className={classes.iconos}>"A"</Button>}
              color="rgba(255,175,75,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="QUINTO"
              icono={<Button className={classes.iconos}>"B"</Button>}
              color="rgba(255,175,75,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="QUINTO"
              icono={<Button className={classes.iconos}>"C"</Button>}
              color="rgba(255,175,75,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="SEXTO"
              icono={<Button className={classes.iconos}>"A"</Button>}
              color="rgba(255,175,75,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="SEXTO"
              icono={<Button className={classes.iconos}>"B"</Button>}
              color="rgba(255,175,75,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="SEXTO"
              icono={<Button className={classes.iconos}>"C"</Button>}
              color="rgba(255,175,75,1)"
              font="white"
            />
          </Grid>

          <Grid
            container
            spacing={2}
            className={classes.container}
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
          >
            <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Secundaria
