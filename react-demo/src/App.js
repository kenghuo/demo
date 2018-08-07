import React, { Component } from 'react';

/* redux */
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

/* 写好的redux */
import rootReducer from './reduxs/index.js';

import Demo from './component/demo.jsx';

/* 创建store */
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk) // 中间件
  )
);

class App extends Component {
  render() {
    return (
      /* 传递 store */
      <Provider store={store}>
        <Demo />
      </Provider>
    );
  }
}

export default App;
