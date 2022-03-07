import '../styles/globals.css'
import type { AppProps } from 'next/app'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "nextjs-maps-firebase.firebaseapp.com",
  projectId: "nextjs-maps-firebase",
  storageBucket: "nextjs-maps-firebase.appspot.com",
  messagingSenderId: "798905247131",
  appId: "1:798905247131:web:b653f5946b2c0587e2ed3e",
  measurementId: "G-QBW17JCPTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
