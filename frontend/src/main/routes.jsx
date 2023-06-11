import React from "react";
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from "../dashboard/Dashboard";
import BillingCycle from "../billing-cycle/BillingCycle";

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/billing-cycle' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
)