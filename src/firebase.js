import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  databaseURL: 'https://{israel-food-blog}.firebaseio.com',
  apiKey: "AIzaSyCfAjrdJpX9bEvka7zarMYNSzhE9fWz-6s",
  authDomain: "israel-food-blog.firebaseapp.com",
  projectId: "israel-food-blog",
  storageBucket: "israel-food-blog.appspot.com",
  messagingSenderId: "1048509857124",
  appId: "1:1048509857124:web:9bd3920a6bbab1bfad8e71",
  measurementId: "G-V6EFY5Z127",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
