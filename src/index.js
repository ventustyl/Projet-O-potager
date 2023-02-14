
// Outil de dev a supprimer lors de la mise en ligne

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// We'll use redux-logger just as an example of adding another middleware
import logger from 'redux-logger'

import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from "./reducers";

import { configureStore } from '@reduxjs/toolkit';
import { getUsers } from './actions/users.action';
import { getPosts } from './actions/post.action';


export const store = configureStore({
  reducer: {rootReducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

})

  store.dispatch(getUsers())
  store.dispatch(getPosts)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>

);

reportWebVitals();
