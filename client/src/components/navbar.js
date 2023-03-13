import {NavLink} from "react-router-dom";
import "./navbar.scss";
import logo from "../assets/img/logo.png";
import logout from "../assets/img/logout.png";

const navbar = () => {
  return(
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo}/>
          </a>
          <button className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNavAltMarkup" 
            aria-controls="navbarNavAltMarkup" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav fw-semibold">
              <a className="nav-link m-2">
                <NavLink className="nav-link" to="/proyecto" activeClassName="active-link">Proyecto</NavLink>
              </a>
              <a className="nav-link m-2">
                <NavLink className="nav-link" to="/personal" activeClassName="active-link">Personal</NavLink>
              </a>
              <a className="nav-link m-2">
                <NavLink className="nav-link" to="/equipamiento" activeClassName="active-link">Equipamiento</NavLink>
              </a>
            
              <a className="nav-link m-2">
                <NavLink className="nav-link" to="/cuentas" activeClassName="active-link">Administrar Cuentas</NavLink>
              </a>
              <a className="nav-link m-2">
                <NavLink className="nav-link" to="/perfil">Mi Perfil</NavLink>
              </a>
              <a className="nav-link m-2">
                <NavLink className="nav-link" to="/login"><img src={logout} width="30" height="30"></img></NavLink> 
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
