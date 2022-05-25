import { Link } from "react-router-dom";
import Home from './Home'
import AddUser from  './AddUser'
import { Hidden, Box, Grid } from "@material-ui/core";
import Viewmusaa from '././secundaria/primeros/primeroa/Viewmusaa'
const Images = () => {
  return (
      <>
        <Viewmusaa />
        <Link className="navbar-brand" to="/tareas">
          TAREASasdasdas
        </Link>
      <Box textAlign="right">
      
        <div style={{ position: "center" }}>
        
            <Link to="/add" className="btn btn-outline-warning float-center my-2 " >
                + Aregar Nueva Tarea
              </Link>
            
        </div>
      </Box>
 
   
    <Home/>
    </>
  );
};

export default Images;
