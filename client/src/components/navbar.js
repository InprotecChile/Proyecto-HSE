import {Link} from "react-router-dom";
import "./navbar.scss";
import logo from "../assets/img/logo.png";
import logout from "../assets/img/logout.png";

const navbar = () => {
  return(
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo}></img>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link m-2">
                <Link to="/proyecto">Proyecto</Link>
              </a>
              <a className="nav-link m-2">
                <Link to="/personal">Personal</Link>
              </a>
              <a className="nav-link m-2">
                <Link to="/equipamiento">Equipamiento</Link>
              </a>
              <a className="nav-link m-2">
                <Link to="/cuentas">Administrar Cuentas</Link>
              </a>
              <a className="nav-link m-2">
                <Link to="/perfil">Mi Perfil</Link>
              </a>
              <a className="nav-link m-2">
                <img src={logout} width="30" height="30"></img>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
