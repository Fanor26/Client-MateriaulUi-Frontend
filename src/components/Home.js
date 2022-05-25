import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Hidden, Box, Grid, Paper } from "@material-ui/core";
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

const Home = () => {
  const classes = useStyles();
  const [users, setUsers] = useState();

  

 /* useEffect(() => {
    const fetchUsers = async () => {
      
      const res = await fetch(`http://localhost:5000/user`);
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);
*/
useEffect(() => {
   
    
  const getUsers = async () => {
    const id=  sessionStorage.getItem("idUsuario")
    const token=  sessionStorage.getItem("token")
    const res = await fetch(`http://localhost:5000/user/listarUsersCurso/`+id, {
      method: "GET",
      headers:{'autorizacion':token}
     
    });
    //console.log(res);
    const response = await res.json();
    setUsers(response);
  };
  getUsers();
}, []);
  const handleDelete = async (id) => {
    try {
      const token=  sessionStorage.getItem("token")
      const res = await fetch(`http://localhost:5000/user/${id}`, {
        method: "DELETE",
        headers:{'autorizacion':token}
      });
      if (res.ok) {
        const updatedUsers = users.filter((user) => user._id !== id);
        setUsers(updatedUsers);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    
    
    
    <div className={classes.root}>
    <Grid container spacing={2} className={classes.container}>
          <Grid item xs={12}>
          </Grid>
      {users?.map((user) => (
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4} key={user._id}>
        
          <Paper elevation={10}  >
          
          <div className="container  text-center" >
      <Paper elevation={1}  variant="contained" color="primary">
          <h3>{user.autor}</h3></Paper></div>
          <img src={user.avatar} alt="" width={"100%"} height={500} />
          <div className="p-2">
            <h3>{user.name}</h3>
            <div className="d-flex justify-content-between align-items-center">
              
              <Button
                color="primary"
                variant="contained"
                
              
                 href={`/edit/${user._id}`} style={{ color: "white" }}>
              MODIFICAR
             
              </Button>
              <IconButton>
       
                <CloseIcon  onClick={() => handleDelete(user._id)}/> 
           
           </IconButton>
            </div>
          </div></Paper>
       
          </Grid>
      ))} </Grid>
    </div>

   
   
    
    </>
  );
};

export default Home;
