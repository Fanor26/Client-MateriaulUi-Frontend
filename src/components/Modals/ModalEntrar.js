import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import { Hidden} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Menur from './Menur'
const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 40px',
    
    marginBottom: '5px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
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
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),

  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(-2)
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const ModalEntrar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [scroll, setScroll] = React.useState();

  
  
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      
      <BootstrapButton className={classes.button} variant="contained" color="primary" onClick={handleClickOpen('body')}>
     ESTUDIANTES
      </BootstrapButton>
      
      <Dialog 
     
      aria-labelledby="customized-dialog-title" 
      open={open}
      scroll={scroll}
      >
<Hidden>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Exclusivo para miembros 
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
           Todo lo que hay aqui esta diseñado para hacerte mejor!!!
          </Typography>
          
          <Typography gutterBottom>
          Comience con un excelente proceso de registro
          </Typography>
         
          <Typography gutterBottom>
          <form className={classes.form} noValidate>
            <FormControl className={classes.formControl}>
             
              <Menur />
            </FormControl>
            
          </form>
          </Typography>
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
        </Hidden>
      </Dialog>
      
    </div>
  );
}
export default ModalEntrar