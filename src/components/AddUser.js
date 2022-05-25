import { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Viewmusaa from '././secundaria/primeros/primeroa/Viewmusaa'
const AddUser = (props) => {
  const history = useHistory();
  
  const [data, setData] = useState({
 
    autor:"",
    curso:"",
    ciudadNombre:"",
    name: "",
    image: "",
  });
  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append("autor", data.autor);
      
      formData.append("image", data.image);
      formData.append("name", data.name);
      formData.append("curso", sessionStorage.getItem('idUsuario'));
    formData.append("cursoNombre", sessionStorage.getItem('nombre'));
    const token =sessionStorage.getItem('token')
      const res = await fetch(`http://localhost:5000/user`, {
        method: "POST",
        headers:{'autorizacion':token},
        body: formData,
      });
      if (res.ok) {
        setData({autor:"", name: "", image: "" });
        history.replace("/tareas");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
    <Viewmusaa/>
    <div style={{ maxWidth: 500, margin: "auto" }}>
    <div className="mb-3">
        <input
          className="form-control"
          placeholder="Enter Autor"
          type="text"
          name="autor"
          value={data.autor}
          onChange={handleChange("autor")}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Enter name"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange("name")}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="file"
          accept="image/*"
          name="image"
          onChange={handleChange("image")}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
    
    </>
  );
};

export default AddUser;
