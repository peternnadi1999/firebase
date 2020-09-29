import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'


// Required for side-effects
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyAO-ObGblf9cB67oWB6TarEKIAZpIWwqQk",
    authDomain: "yt-firestore-chat-15112.firebaseapp.com",
    databaseURL: "https://yt-firestore-chat-15112.firebaseio.com",
    projectId: "yt-firestore-chat-15112",
    storageBucket: "yt-firestore-chat-15112.appspot.com",
    messagingSenderId: "1076055067354",
    appId: "1:1076055067354:web:d1411d1f6055f43e1273e3",
    measurementId: "G-KC7T9CWC7Y"
  };
 
  
 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();
    
  window.db = db;
  
  db.settings({
      timestampsInSnapshots:true
  });


createApp(App).use(store).use(router).mount('#app')
