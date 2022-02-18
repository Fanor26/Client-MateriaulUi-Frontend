import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import "../assets/css/Dashboard.css";

import CardsHeader from "./CardsHeader";

import "bootstrap/dist/css/bootstrap.min.css";

const useStyles = makeStyles((theme) => ({
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

const Primaria = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={2} className={classes.container}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              icono={
                <Button className={classes.iconos} href="loginpap">
                  "A"
                </Button>
              }
              titulo="PRIMERO"
              color="rgba(248,80,50,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              icono={
                <Button className={classes.iconos} href="loginpbp">
                  "B"
                </Button>
              }
              titulo="PRIMERO"
              color="rgba(248,80,50,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              icono={
                <Button className={classes.iconos} href="loginpcp">
                  "C"
                </Button>
              }
              titulo="PRIMERO"
              color="rgba(248,80,50,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="SEGUNDO"
              icono={
                <Button className={classes.iconos} >
                  "A"
                </Button>
              }
              color="rgba(248,80,50,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="SEGUNDO"
              icono={
                <Button className={classes.iconos} >
                  "B"
                </Button>
              }
              color="rgba(248,80,50,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="SEGUNDO"
              icono={<Button className={classes.iconos}>"C"</Button>}
              color="rgba(248,80,50,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="TERCERO"
              icono={<Button className={classes.iconos}>"A"</Button>}
              color="rgba(248,80,50,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="TERCERO"
              icono={<Button className={classes.iconos}>"B"</Button>}
              color="rgba(248,80,50,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="TERCERO"
              icono={<Button className={classes.iconos}>"C"</Button>}
              color="rgba(248,80,50,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="CUARTO"
              icono={<Button className={classes.iconos}>"A"</Button>}
              color="rgba(248,80,50,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="CUARTO"
              icono={<Button className={classes.iconos}>"B"</Button>}
              color="rgba(248,80,50,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="CUARTO"
              icono={<Button className={classes.iconos}>"C"</Button>}
              color="rgba(248,80,50,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="QUINTO"
              icono={<Button className={classes.iconos}>"A"</Button>}
              color="rgba(248,80,50,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="QUINTO"
              icono={<Button className={classes.iconos}>"B"</Button>}
              color="rgba(248,80,50,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="QUINTO"
              icono={<Button className={classes.iconos}>"C"</Button>}
              color="rgba(248,80,50,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="SEXTO"
              icono={<Button className={classes.iconos}>"A"</Button>}
              color="rgba(248,80,50,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="SEXTO"
              icono={<Button className={classes.iconos}>"B"</Button>}
              color="rgba(248,80,50,1)"
              font="white"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader
              titulo="SEXTO"
              icono={<Button className={classes.iconos}>"C"</Button>}
              color="rgba(248,80,50,1)"
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

export default Primaria;
