// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHhKyVdF07EFJmRwl_r7jIpKTzgk4L9rg",
    authDomain: "bbauth-2320a.firebaseapp.com",
    projectId: "bbauth-2320a",
    storageBucket: "bbauth-2320a.appspot.com",
    messagingSenderId: "748697922356",
    appId: "1:748697922356:web:8b7a415a09f8a96c195361"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app