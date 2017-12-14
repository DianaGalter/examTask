// main.js
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import loadNews from './loadNews';
import './index.css';
import newsApp from './reducers'
import Routes from './Routes';

export const history = createHistory();

const store = createStore(newsApp, applyMiddleware(thunk, routerMiddleware(history)));
store.dispatch(loadNews('all-sections'));

const render = Component => {
  ReactDOM.render(
	<AppContainer>
		<Provider store={store}>
			<Component history={ history } />
		</Provider>
	</AppContainer>
  , document.getElementById('root')
  )
}

render(Routes)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Routes', () => { render(Routes) })
};
