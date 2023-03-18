// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ7Qx7OYZnM3AQPzibzCey5D-kCJNhxHw",
  authDomain: "fir-init-e4877.firebaseapp.com",
  projectId: "fir-init-e4877",
  storageBucket: "fir-init-e4877.appspot.com",
  messagingSenderId: "740513615364",
  appId: "1:740513615364:web:281c053662b4ddc1986f51",
  measurementId: "G-MTXTQ63HEN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
