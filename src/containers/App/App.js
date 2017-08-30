import React, { Component } from 'react';
import {
    Route,
    Link,
} from 'react-router-dom';
import firebase from 'firebase';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import ReduxThunk from 'redux-thunk';

import reducers from './../../reducers';

import settings from './../../config/settings';

import PrivateRoute from './../PrivateRoute';
import AuthForm from './../AuthForm';
import Dashbaord from './../Dashboard';

import './App.css';

const history = createHistory()
const store = createStore(reducers, applyMiddleware(routerMiddleware(history), ReduxThunk))

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/signIn">Sign In</Link></li>
                            <li><Link to="/protected">Protected</Link></li>
                        </ul>
                        <div>
                            <Route path="/signIn" component={AuthForm}/>
                            <PrivateRoute path="/protected" component={Dashbaord}/>
                         </div>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
