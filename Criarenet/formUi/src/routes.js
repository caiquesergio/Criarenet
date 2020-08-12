import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './features/Home/platform/home-platform';
import Register from './features/Register/plataform/registerUser-plataform';


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Register" component={Register} />
           </Switch>
        </BrowserRouter>
    );
}