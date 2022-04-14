import React from 'react';

import Home from '../pages/home/Home';
import Works from '../pages/works/Works';

import { Switch, Route, Redirect } from 'react-router-dom';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/trabalhos" exact component={Works} />

            <Route path="/chuva_slaca" exact>
                <Redirect to="/" />
            </Route>

        </Switch>
    );
}

export default Routes;
