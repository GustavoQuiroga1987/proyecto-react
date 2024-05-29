import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsqCvipf79vyudSRiC2HsmjShp_NOBzGs",
    authDomain: "primer-proyecto-react-3f811.firebaseapp.com",
    projectId: "primer-proyecto-react-3f811",
    storageBucket: "primer-proyecto-react-3f811.appspot.com",
    messagingSenderId: "716841042488",
    appId: "1:716841042488:web:d5ec353ac481ee3b76dccd"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(<App />)
