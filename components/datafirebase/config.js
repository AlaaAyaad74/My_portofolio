import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPx2iSnVQmEBMe32JaQNOmBsD1Gg2hBXo",
  authDomain: "myportofoliodata.firebaseapp.com",
  databaseURL: "https://myportofoliodata-default-rtdb.firebaseio.com",
  projectId: "myportofoliodata",
  storageBucket: "myportofoliodata.appspot.com",
  messagingSenderId: "775066595880",
  appId: "1:775066595880:web:67d7bee6da286bd7193b1d",
  measurementId: "G-TSCJETZ370",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbRef = ref(getDatabase(app));

async function sendData() {
  try {
    const snapshot = await get(child(dbRef, "/allData"));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export { sendData };
