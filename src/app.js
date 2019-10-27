// src/App.js

import React from "react";
import PozosTable from "./components/pozosTable";
import Pozo from "./components/pozo";
import Diagnose from "./components/diagnose";
import Card from "./components/card";
import DashboardCartas from "./components/dashboardCartas";
import Navbar from './components/layouts/navbar';
import Home from './components/home';

// New - import the React Router components, and the Profile page component

import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import store from './redux/store';
import PrivateRoute from "./components/privateRoute";

function App() {
  return (
    <div className="App">
      {/* New - use BrowserRouter to provide access to /profile */}

      <Provider store={store}>
        <BrowserRouter>
        <Navbar />
            <Switch>
                <PrivateRoute path="/pozos/:pozoId/cartas/:cartaId" component={Card} />
                <PrivateRoute path="/pozos/:pozoId/cartas" component={DashboardCartas} /> 
                <PrivateRoute path="/diagnose" component={Diagnose} />
                <PrivateRoute exact path="/pozos/:pozoId" component={Pozo} />
                <PrivateRoute path="/pozos" component={PozosTable} />
                <PrivateRoute path="/" component={Home} />         
                <Redirect from="/" to="/" />
            </Switch>
        </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;