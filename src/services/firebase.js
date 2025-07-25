import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDPJPxSGMriB5JTSfe5WgmCoaOsnHNfKIw',
  authDomain: 'todo-app-9076d.firebaseapp.com',
  projectId: 'todo-app-9076d',
  storageBucket: 'todo-app-9076d.firebasestorage.app',
  messagingSenderId: '186858367833',
  appId: '1:186858367833:web:caa17c7d22ac27b111ba48',
  measurementId: 'G-PSKSKTK9N9',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, analytics, auth, provider, signInWithPopup };
