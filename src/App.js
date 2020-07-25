import React, { Fragment } from "react";
import "./globals.css";
import Header from "./components/header";
import TopCardList from "./components/topCards";
import Overview from "./components/overview";

function App() {
  return (
    <Fragment>
      <Header />
      <TopCardList />
      <Overview />
    </Fragment>
  );
}

export default App;
