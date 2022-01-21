import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import logger from 'redux-logger';
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import reducer from './reducers';

const { worker } = require('./mocks/browser');
worker.start();

const store = createStore(reducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);
