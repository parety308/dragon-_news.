// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAr3V4ID9iu2KbrmFe99WJWwrWwhN-f2TI",
    authDomain: "the-dragon-news-39670.firebaseapp.com",
    projectId: "the-dragon-news-39670",
    storageBucket: "the-dragon-news-39670.firebasestorage.app",
    messagingSenderId: "531681766472",
    appId: "1:531681766472:web:b98decba792907c4203c7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;