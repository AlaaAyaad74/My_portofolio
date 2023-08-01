// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, child, get } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
let data;
function sendData() {
 
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const dbRef = ref(getDatabase());
  get(child(dbRef, "/allData"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        data = snapshot.val();
        console.log(data.infoData.Name);
        return data;
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
    return data;
}

export { sendData };
// const analytics = getAnalytics(app);
// export default db;
