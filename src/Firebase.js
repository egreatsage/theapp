import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA0zaUXDMg_tsuFvXOtnr7le-h9roCVyX0",
  authDomain: "theapp-360e3.firebaseapp.com",
  projectId: "theapp-360e3",
  storageBucket: "theapp-360e3.appspot.com",
  messagingSenderId: "329553535750",
  appId: "1:329553535750:web:e5a8cd0139ed0180453487"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)