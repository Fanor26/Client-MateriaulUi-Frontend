import { Link } from "react-router-dom";

const Images = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
      <div className="container">
        <Link className="navbar-brand" to="/tareas">
          IMAGES
        </Link>
        <div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/add">
                Add User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Images;
