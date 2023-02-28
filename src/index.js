import React from "react";
import ReactDOM from 'react-dom/client';
import { persistor, store } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  <Provider store={store}>
    <PersistGate loading='loading' persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)