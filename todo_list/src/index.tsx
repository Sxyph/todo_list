import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { firebaseConfig } from './config/firebase';
import { initializeApp } from "firebase/app";

initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
