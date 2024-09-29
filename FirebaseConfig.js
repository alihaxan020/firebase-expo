// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy9lHEZg8E6gwh-NUPqrftWPCHfT6NPz4",
  authDomain: "fir-auth-ddefb.firebaseapp.com",
  projectId: "fir-auth-ddefb",
  storageBucket: "fir-auth-ddefb.appspot.com",
  messagingSenderId: "503215458664",
  appId: "1:503215458664:web:964ae4d635a5f56f92aedd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
