"use client";
import React, { useEffect } from "react";
import MainpageStyle from "../../../components/styles/MainpageStyle";
import db  from "../../../components/datafirebase/config";
// import { onValue, ref } from "firebase/database";
import axios from "axios";
import { getDatabase, ref, child, get } from "firebase/database";
function page() {
  // useEffect(() => {
    // const starCountRef = ref(db, "allData/");
    // onValue(starCountRef, (snapshot) => {
    //   const data = snapshot.val();
    //   console.log(data, "Alaa");

    // async () =>
    //   await fetch("https://myportofoliodata-default-rtdb.firebaseio.com", {
    //     mode: "no-cors",
    //   }).then((res) => {
    //     if (res.ok) {
    //       console.log(res.json());
    //     } else {
    //       console.log("Alaa");
    //     }
    //   });
    // axios("https://jsonplaceholder.typicode.com/users").then(res=>console.log(res.data))
    // async () => {
    //   const res = db.collection("allData");
    //   const data = await res.get();
    //   console.log(data);
    // };

  // }, []);
  const dbRef = ref(getDatabase());
get(child(dbRef,'/allData')).then((snapshot) => {
  if (snapshot.exists()) {
    const data=snapshot.val();
    console.log(data);
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
  return (
    <MainpageStyle>
      <div className="container">
        <h1>EDIT MY ACCOUNTS</h1>
      </div>
      {/* {console.log(db.allData)} */}
    </MainpageStyle>
  );
}

export default page;
