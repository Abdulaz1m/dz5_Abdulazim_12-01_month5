import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/store';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';



const store = createStore(rootReducer, applyMiddleware(thunk, logger))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
            <App />
      </Provider>
);
