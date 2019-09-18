// src/App.js

import React from "react";
import PozosTable from "./components/pozosTable";
import Pozo from "./components/pozo";
import Carta from "./components/carta";
import Login from "./components/login";
import Higchart from "./components/highchart";
import Navbar from './components/layouts/navbar';

// New - import the React Router components, and the Profile page component
import Profile from "./components/profile";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './redux/store';
import PrivateRoute from "./components/privateRoute";
import { useAuth0 } from "./react-auth0-wrapper";

function App() {
  return (
    <div className="App">
      {/* New - use BrowserRouter to provide access to /profile */}

      <Provider store={store}>
        <BrowserRouter>
        <Navbar />
            <Switch>
                <PrivateRoute exact path="/pozos/:pozoId/cartas" component={Carta} />
                <PrivateRoute path="/pozos" component={PozosTable} />
                <PrivateRoute path="/pozos/:pozoId" component={Pozo} />
                <Route path="/login" exact component={Login} />
                <PrivateRoute path="/high" component={Higchart}/>
                <PrivateRoute path="/" exact />
                <PrivateRoute path="/profile" component={Profile} />
                <Redirect from="/" to="/pozos" />
            </Switch>
        </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;