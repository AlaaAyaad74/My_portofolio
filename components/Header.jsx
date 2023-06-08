"use client";
import React, { useRef, useState } from "react";
import classes from "../components/styles/Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function Header() {
  const router = usePathname();
  const activePath = router.slice(1, router.length);

  const [state, setState] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.nav__links}>
        <ul className={`${state === false ? classes.close : classes.open}`}>
          <li onClick={() => setState(!state)}>
            <Link
              href="/"
              className={activePath === "" ? `${classes.active}` : ""}
            >
              Home
            </Link>
          </li>
          <li onClick={() => setState(!state)}>
            <Link
              href="/my_info"
              className={activePath === "my_info" ? `${classes.active}` : ""}
            >
              MY INFO
            </Link>
          </li>
          <li onClick={() => setState(!state)}>
            <Link
              href="/my_works"
              className={activePath === "my_works" ? `${classes.active}` : ""}
            >
              MY WORKS
            </Link>
          </li>
          <li onClick={() => setState(!state)}>
            <Link
              href="/my_accounts"
              className={
                activePath === "my_accounts" ? `${classes.active}` : ""
              }
            >
              MY ACOUNTS
            </Link>
          </li>
          <li onClick={() => setState(!state)}>
            <Link href="#" id={classes.LOGIN}>
              EDIT
            </Link>
          </li>
        </ul>

        <button
          id={classes.TOGGLE}
          onClick={() => {
            setState(!state);
          }}
        >
          {state === false ? (
            <MenuIcon />
          ) : (
            <CloseIcon
              style={{
                color: "black",
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 2px 0px",
                border: "1px solid black",
              }}
            />
          )}
        </button>
      </div>
    </div>
  );
}

export default Header;
/*Alaa Ayaad*/
