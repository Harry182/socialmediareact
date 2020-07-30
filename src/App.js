import React, { useState, useEffect } from "react";
import "./globals.css";
import Header from "./components/header";
import TopCardList from "./components/topCards";
import Overview from "./components/overview";
import Switch from "./components/switch";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);

  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";

  function changeMedia(mq) {
    // setChecked(mq.matches);
    setChecked(mq.matches);
    setDarkMode(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(changeMedia);
    // ref.current.setAttribute("checked", true);
    // cambiar el estado de la aplicación con useState
    setChecked(mq.matches);
    setDarkMode(mq.matches);
  }, []);

  return (
    <main className={mainClass}>
      <Header>
        <Switch
          setDarkMode={setDarkMode}
          checked={checked}
          setChecked={setChecked}
        />
      </Header>
      <TopCardList />
      <Overview />
    </main>
  );
}

export default App;
