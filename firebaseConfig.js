// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBG54eWFnu1lTb0CI8wqhlhJLXoH-KVzRE",

  authDomain: "pinterest-demo-6f567.firebaseapp.com",

  databaseURL: "https://pinterest-demo-6f567-default-rtdb.firebaseio.com",

  projectId: "pinterest-demo-6f567",

  storageBucket: "pinterest-demo-6f567.appspot.com",

  messagingSenderId: "652644717249",

  appId: "1:652644717249:web:d043073f89ebcc94753a40",

  measurementId: "G-NECE4B0ZV1"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


export default app;