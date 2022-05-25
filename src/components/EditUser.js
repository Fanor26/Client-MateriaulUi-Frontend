import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Viewmusaa from '././secundaria/primeros/primeroa/Viewmusaa'
const EditUser = ({ match }) => {
  console.log(match);
  const history = useHistory();
  const [data, setData] = useState({
    autor:"",
    curso:"",
    name: "",
    image: "",
  });
  useEffect(() => {
    fetch(`http://localhost:5000/user/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

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
      const token =sessionStorage.getItem('token')
      const res = await fetch(`https://juanor902.herokuapp.com/user/${match.params.id}`, {
        method: "PUT",
        headers:{'autorizacion':token},
        body: formData,
      });
      if (res.ok) {
        setData({ autor:"", name: "", image: "" });
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
          type="text"
          name="autor"
          value={data.autor}
          onChange={handleChange("autor")}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
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
          Update
        </button>
      </div>
    </div>
    
    </>
  );
};

export default EditUser;
