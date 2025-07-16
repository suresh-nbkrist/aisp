import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCbEoR07MXBiYZZ1HM3aEzP0GzNpJOulsY",
  authDomain: "aisp-lab.firebaseapp.com",
  projectId: "aisp-lab",
  storageBucket: "aisp-lab.firebasestorage.app",
  messagingSenderId: "412257840376",
  appId: "1:412257840376:web:8bc3debdb459bb72dd9f0d",
  measurementId: "G-YZ1QG04P9L"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);