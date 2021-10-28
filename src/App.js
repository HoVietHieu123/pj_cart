import React, { useEffect, useState } from "react";
import NavTop from "./components/NavTop.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import db from "./utils/firebase";
import data from "./mock/product/getData";

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      const productData = data;
    }, 3000);
    console.log(productData)
  }, []);

  return (
    <React.Fragment>
      <NavTop />
      <Main />
      <Footer />
    </React.Fragment>
  );
}
