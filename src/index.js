import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { createStore , compose , applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './store/reducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer , composeEnhancers(
    applyMiddleware(reduxThunk)
));
const app = (
    <Provider store={store}>
        <BrowserRouter>
                <App/>
        </BrowserRouter>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
