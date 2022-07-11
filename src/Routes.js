import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Config from './pages/Config';

export default () => {
    return(
        <Switch>
            <Route exact path="/">
               <Home>Início</Home>
            </Route>

            <Route exact path="/config">
                <Config>Configuração</Config>
            </Route>

            <Route exact path="/vagas">
                Vagas
            </Route>
        </Switch>
    );
}