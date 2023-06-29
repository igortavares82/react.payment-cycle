import React from "react";
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import AuthOrApp from './AuthOrApp'
import Dashboard from "../dashboard/Dashboard";
import BillingCycle from "../billing-cycle/BillingCycle";

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp} >
            <IndexRoute component={Dashboard} />
            <Route path='/billing-cycle' component={BillingCycle} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)