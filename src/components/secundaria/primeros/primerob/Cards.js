import React from 'react';
import {Card, Typography, CardContent, CardActions} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles= makeStyles(()=>({
    root:{
        textAlign: 'center',
        backgroundColor: '#644126'
    },
    texto:{
        fontSize: 18,
        color: 'white'
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white'
    }
    }));

const Cardspbs = (props) => {

    const classes=useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
           
                <Typography  className={classes.titulo}>
                {props.titulo}
                </Typography>
                {props.icono}
                <Typography  className={classes.texto}>
                {props.texto}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Cardspbs;