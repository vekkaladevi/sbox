import React from 'react';  
import Router from "react-router";

import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import comp from './components';
let {
    Master,
    AppLeftNav
} = comp;

import pages from './components/pages';
let {
    Home,
    Login,
    Signup,
    Logout,
    Settings,
    Dashboard,
    Tenant    
} = pages;


import RouterContext from './lib/router.js';

let routes = (  
	<Route name="app" path="/" handler={Master}>
	    <Route name="signup" path="/signup" handler={Signup}/>
	    <Route name="login" path="/login" handler={Login}/>
	    <Route name="settings" path="/settings" handler={Settings}/>
	    <Route name="logout" path="/signout" handler={Logout}/>
            <Route name="tenant" path="/tenant/:tenantId" handler={Tenant}/>
            <Route name="dashboard" path="/dashboard" handler={Dashboard}/>
            <DefaultRoute handler={Home}/>
	</Route>
);

export default routes;
