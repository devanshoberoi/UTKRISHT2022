import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyChsbrxmTjnEa6Kbj0qB9uQECUKm4tzTcU",
  authDomain: "utkrisht-2022.firebaseapp.com",
  projectId: "utkrisht-2022",
  storageBucket: "utkrisht-2022.appspot.com",
  messagingSenderId: "191609329945",
  appId: "1:191609329945:web:d94622cddca601f6020d88",
  measurementId: "G-X35TGCTFCD"
  };

  export const Firebase= firebase.initializeApp(firebaseConfig)//named export