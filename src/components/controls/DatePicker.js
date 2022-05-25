/*import React from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const DatePicker = (props) => {
  const { name, label, value, onChange } = props;

  const convertToDefEventParam = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        format="dd/MM/yyyy"
        name={name}
        value={value}
        onChange={(value) => {
          onChange({ target: { name, value } });
        }}
      ></KeyboardDatePicker>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;*/



import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import {
  alpha,
  ThemeProvider,
  withStyles,
  makeStyles,
  createTheme,
} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
const useStyles = makeStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  margin: {
    marginLeft: theme.spacing(1),
  },

  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    margin: theme.spacing(2),
    padding: '10px 20px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
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
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.4rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))

const DatePicker = (props) => {
  const { name, label, value, onChange } = props;

  const convertToDefEventParam = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  const classes = useStyles();
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider  utils={DateFnsUtils}>
      <Grid container xs={6}>
         <InputLabel  className={classes.margin} shrink htmlFor="bootstrap-input">
                Datos
              </InputLabel>
        
        <KeyboardDatePicker
          className={classes.input}
          label={label}
        format="dd/MM/yyyy"
        name={name}
        value={value}
        onChange={(value) => {
          onChange({ target: { name, value } });
        }}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
export default DatePicker;