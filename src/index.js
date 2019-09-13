import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './redux/store';
import PozosTable from "./components/pozosTable";
import Pozo from "./components/pozo";
import Carta from "./components/carta";
import Login from "./components/login";
import Higchart from "./components/highchart";

const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/pozos/:pozoId/cartas" component={Carta} />
                <Route path="/pozos" component={PozosTable} />
                <Route path="/pozos/:pozoId" component={Pozo} />
                <Route path="/login" exact component={Login} />
                <Route path="/high" component={Higchart}/>
                <Redirect from="/" to="/pozos" />
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));