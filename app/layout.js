"use client";
import { useEffect, useState, createContext } from "react";
import { usePathname } from "next/navigation";
import { sendData } from "../components/datafirebase/config";
import Aside from "../components/Aside";
import Header from "../components/Header";
import Spinner from "../components/spinner/Spinner";
import Asidedashboard from "../components/Asidedashboard";
import "./globals.css";
// Create the DataContext and export it for use in child components
export const DataContext = createContext();

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const router = usePathname();
  const activePath = router.slice(1);

  useEffect(() => {
    async function fetchData() {
      console.log("Starting data fetch..."); // Log when fetch starts
      try {
        const fetchedData = await sendData();
        console.log("Fetched data:", fetchedData); // Log the fetched data
        setData(fetchedData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        console.log("Setting loading to false");
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Alaa Ayaad</title>
      </head>
      <DataContext.Provider value={data}>
        <body>
          {loading ? (
            <div >
              <Spinner />
            </div>
          ) : activePath.endsWith("_") ? (
            <div className="main_Wrapper flex__reverse">
              {!activePath.includes("login_") && <Asidedashboard />}
              <div className="main">
                <div className="res__div">{children}</div>
              </div>
            </div>
          ) : (
            <div className="main_Wrapper">
              <Aside />
              <div className="main">
                <Header />
                <div className="res__div">{children}</div>
              </div>
            </div>
          )}
        </body>
      </DataContext.Provider>
    </html>
  );
}
