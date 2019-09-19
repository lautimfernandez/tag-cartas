import React from 'react';
import styled from 'styled-components';
import "./styles.css";
import { useAuth0 } from "../../react-auth0-wrapper";
import { Link } from "react-router-dom";


const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, loading, user } = useAuth0();


 if (loading || !user) {
   return (
   
    <div id="spinner">
    <div class="spinner-border text-primary" role="status">
    <span class="sr-only">Loading...</span>
    </div>
    </div>


   );
 }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div>
      {loading === false && !isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>
  <a className="navbar-brand" href="/">
  <img src="https://drive.google.com/uc?export=view&id=1QaJuS0yYfCgCu0I76xBOMS7qhwTUdcNM" height="60" alt="DYNACARDS" /> DYNACARDS
    </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="/pozos">POZOS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">CONFIGURACIÓN</a>
      </li>

      <li class="nav-item avatar dropdown">
        <a class="nav-link dropdown-toggle" href="/profile"  id="navbarDropdownMenuLink-55" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
              <img src={user.picture} height="50" class="rounded-circle z-depth-0"
            alt="avatar image"/>
        </a>
        <div class="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
          aria-labelledby="navbarDropdownMenuLink-55">
          <a class="dropdown-item" href="#">Mi Perfil</a>
          <a class="dropdown-item" href="#">Cerrar sesión</a>
        </div>
      </li>
   
  {isAuthenticated && (
      <span>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/profile">Profile</Link>
      </span>
    )}
    </ul>
  </div>
</nav>
  );
};

export default NavBar;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  ul li a {
    color: var(--mainGrey);
  }
  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;