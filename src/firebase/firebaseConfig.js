
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMyqTMQWTmXBcI3K7H_0xRGJkv_5EsA3o",
  authDomain: "spotifyconsumer-ab51e.firebaseapp.com",
  projectId: "spotifyconsumer-ab51e",
  storageBucket: "spotifyconsumer-ab51e.firebasestorage.app",
  messagingSenderId: "315581273481",
  appId: "1:315581273481:web:cb54fd5eda86952ce1fd58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
