import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqIdEohsT4escBwa48Tv9vVQ-YuY9_VcE",
  authDomain: "fir-fde6c.firebaseapp.com",
  projectId: "fir-fde6c",
  storageBucket: "fir-fde6c.appspot.com",
  messagingSenderId: "858969800403",
  appId: "1:858969800403:web:1d116a118fd4ffb41fde26",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
