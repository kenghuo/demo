import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

/* router */
import { BrowserRouter, Route } from 'react-router-dom';

/* redux */
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

/* reducer */
import rootReducer from './reduxs/index.js';

import 'bootstrap/dist/css/bootstrap.css';

import App from './router/App';
import Index from './router/Index';

/* 创建store */
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk), // 中间件
    applyMiddleware(logger)
  )
);

ReactDOM.render((
    <Provider store={store} >
        <BrowserRouter basename='/' >
            <div>
                <Route path="/" component={App}/>
                <Route path="/index" component={Index}/>
            </div>
        </BrowserRouter>
    </Provider>
    
), document.getElementById('root'));
registerServiceWorker();
