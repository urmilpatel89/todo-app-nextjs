import React from "react";
import styles from "../../../styles/Home.module.css";

const Header = () => {
  return (
    <>
      <header>
        <h1 className={styles.title}>
          TODO App with <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </header>
    </>
  );
};

export default Header;
