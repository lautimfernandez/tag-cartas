// src/App.js

import React from "react";
import PozosTable from "./components/pozosTable";
import Pozo from "./components/pozo";
import Carta from "./components/carta";


import Navbar from './components/layouts/navbar';

// New - import the React Router components, and the Profile page component

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
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
                <PrivateRoute path="/diagnose" component={Carta} />
                <PrivateRoute exact path="/pozos/:pozoId" component={Pozo} />
                <PrivateRoute path="/pozos" component={PozosTable} />
                
                <PrivateRoute path="/" exact />
                
                <Redirect from="/" to="/pozos" />
            </Switch>
        </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;