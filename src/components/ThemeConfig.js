import { createTheme } from '@material-ui/core/styles';

import { purple, green, orange, lightBlue } from '@material-ui/core/colors';


const theme = createTheme({
  palette: {
    primary: {
      
       main: '#cc5702',
    },
    secondary: {
      
      main: '#11cb5f',
    },
    "inherit": {
      
        main: orange[500],
      },
      "outlined": {
      
        main: '#39FF14',
      },
      
    
  },
});
export default theme