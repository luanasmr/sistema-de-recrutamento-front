import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Paginas/Home';
import Empresa from './Paginas/Admin/Empresa';

export default () => {
    return(
        <Switch>
            <Route exact path="/">
               <Home>Início</Home>
            </Route>

            <Route exact path="/Empresa">
                <Empresa>Empresas</Empresa>
            </Route>

            <Route exact path="/vagas">
                Vagas
            </Route>
        </Switch>
    );
}