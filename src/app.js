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

function App() {
  return (
    <div className="App">
      {/* New - use BrowserRouter to provide access to /profile */}

      <Provider store={store}>
        <BrowserRouter>
        <Navbar />
            <Switch>
                <Route exact path="/pozos/:pozoId/cartas" component={Carta} />
                <Route path="/pozos" component={PozosTable} />
                <Route path="/pozos/:pozoId" component={Pozo} />
                <Route path="/login" exact component={Login} />
                <Route path="/high" component={Higchart}/>
                <Route path="/" exact />
                <Route path="/profile" component={Profile} />
                <Redirect from="/" to="/pozos" />
            </Switch>
        </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;