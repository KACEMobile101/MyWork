// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1hbaqw1DH3uWXYw920bcUsBClsiJpadY",
  AuthDomain: "mywork-71c0a.firebaseapp.com",
  projectId: "mywork-71c0a",
  storageBucket: "mywork-71c0a.appspot.com",
  messagingSenderId: "386766424926",
  appId: "1:386766424926:web:c01a407d8efd02c49e9dcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//inputs
const email = document.getElementById('email').value;
const password = document.getElmentById('password').value;
// submit button

const submit = document.getElementById('submit');
submit.addEventListener("click", (e) => {
  e.preventDefault();
  alert(50)
}