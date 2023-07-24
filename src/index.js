import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createRoot } from 'react-dom/client';

import App from './App';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={ store }>
        <App/>
    </Provider>
);
