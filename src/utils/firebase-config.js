import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC8JiTwLrzZyRGo6wR3PrBcV1ZoFuG9hig",
  authDomain: "movies-app-694b6.firebaseapp.com",
  projectId: "movies-app-694b6",
  storageBucket: "movies-app-694b6.appspot.com",
  messagingSenderId: "1081666102753",
  appId: "1:1081666102753:web:a25bc5546d77f3fb335ea0",
  measurementId: "G-L501YWKXCR"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);