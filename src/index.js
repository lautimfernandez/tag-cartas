import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from "./react-auth0-wrapper";
import config from "./auth_config.json";
import App from "./app";
import { register } from './serviceWorker';



//import Footer from './components/layouts/footer';
const onRedirectCallback = appState => {
    window.history.replaceState(
      {},
      document.title,
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  };
  


const Root = (
    <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={process.env.REDIRECT_URL || "http://localhost:3000/pozos"} //CUIDADO CON EL LOCALHOST
    onRedirectCallback={onRedirectCallback}
>
    <App />
    </Auth0Provider>
    
);

register();


ReactDOM.render(Root, document.getElementById('root'));