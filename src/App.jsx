import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
// import More from "../public/Component/more";
import Header from "../public/Component/Header";
import Footer from "../public/Component/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      {/* <More /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
