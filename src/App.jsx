import Header from "./components/Header/Header";
import css from "./styles/app.module.scss"
import Hero from "./components/hero/Hero"
import React , { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    
    if (theme === 'dark') {
      console.log("light hai bhai")
      setTheme('light');
      document.body.style.background = "#fff";
      document.body.style.color = "#000";
      document.querySelector(".night").style.display = "initial";
      document.querySelector(".day").style.display = "none";

    } else {
      console.log("dark thi bhai")
      setTheme('dark')
      document.body.style.background = "#000";
      document.body.style.color = "#fff";
      document.querySelector(".day").style.display = "initial";
      document.querySelector(".night").style.display = "none";

    }
  }
  return(
    <div className={`${css.container}`}>
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <Hero theme={theme}/>
    </div>
  )
};

export default App;
