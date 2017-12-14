
import React from 'react';
import { Router, Switch, Route } from 'react-router';
import App from "./App"

const Routes = (props) => (
	<Router history={ props.history }>
      	<Switch>
      		<Route exact path='/' component={App} />
      		<Route path='/:tag' component={App} />
      	</Switch>
	</Router>
);

export default Routes;

