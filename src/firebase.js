// firebase.js
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC_gy00kx7DTIobe791VqHHmqx-XS-yI9A",
    authDomain: "kriyeta-3e235.firebaseapp.com",
    projectId: "kriyeta-3e235",
    databaseURL: "https://kriyeta-3e235-default-rtdb.firebaseio.com",
    storageBucket: "kriyeta-3e235.appspot.com",
    messagingSenderId: "575633214148",
    appId: "1:575633214148:web:27ec985b2db18bc2819791",
    measurementId: "G-GZEPJNDXFP"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const database = getDatabase(app);
