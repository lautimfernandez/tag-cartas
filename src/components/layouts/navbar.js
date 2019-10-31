import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import "./styles.css";
import { useAuth0 } from "../../react-auth0-wrapper";
import { Link } from 'react-router-dom';


const NavBar = () => {
  const { isAuthenticated, logout, user } = useAuth0();
  const getVisible = ()=>{
    if(isAuthenticated)
      return "visible"
    else
      return "invisible"
  }

  const getInvisible = ()=>{
    if(isAuthenticated)
      return "invisible"
    else
      return "visible"
  }
  /*
 if (loading || !user) {
   return (
    <div id="spinner">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
   );
 }
*/
  return (
    
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/*<div>
      {loading === false && !isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>
        )
      }
    </div>
     */} 
  <Link to={"/"} className="navbar-brand" >
    <img className="logo" src="https://drive.google.com/uc?export=view&id=1yWcxc3ZUZVeRFtVmZirHkvpKBoaM5Pd3" height="40" alt="DYNACARDS" /> 
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent" visibility={getVisible()} >
    <ul className="navbar-nav ml-auto">
    <li id={getInvisible()} className="nav-item" >
        <Link className="nav-link" to={"/pozos"}>INICIAR SESION</Link>
      </li>
      <li className="nav-item" id={getVisible()}>
        <Link className="nav-link" to={"/pozos"}>POZOS</Link>
      </li>
      <li className="nav-item" id={getVisible()}>
        <Link className="nav-link" to={"/diagnose"}>DIAGNOSTICAR</Link>
      </li>

      <li className="nav-item avatar dropdown" id={getVisible()}> 

        <a className="nav-link dropdown-toggle" href="/profile"  id="navbarDropdownMenuLink" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
        <img src={user ? user.picture : ""} height="40" className="rounded-circle z-depth-0"
          alt="avatar"/>
        </a>

        <div className="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
          aria-labelledby="navbarDropdownMenuLink">
          
          {isAuthenticated && <div className="dropdown-item" onClick={() => logout()}>Cerrar sesión</div>}
          
        </div>
        
      </li>
    </ul>
  </div>

 

</nav>
  );
};

export default NavBar;
