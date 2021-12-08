import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD4tHNDMiENgvHd7r6DGjUgtAorkpv76HQ",
    authDomain: "car-parking-d8b15.firebaseapp.com",
    databaseURL: "https://car-parking-d8b15-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "car-parking-d8b15",
    storageBucket: "car-parking-d8b15.appspot.com",
    messagingSenderId: "378714438794"
  };
firebase.initializeApp(config);
injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('root'));

