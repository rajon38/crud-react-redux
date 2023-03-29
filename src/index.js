import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./Assets/css/bootstrap.min.css";
import "./Assets/css/progress.css";
import {Provider} from "react-redux";
import store from "./Redux/store/store"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);