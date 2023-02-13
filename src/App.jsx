import Header from "./components/Header/Header";
import css from "./styles/app.module.scss"
import Hero from "./components/hero/Hero"
import Experties from "./components/Experties/Experties";
import Work from "./components/Work/Work";
import React, { useState } from "react";
import Portfolio from "./components/Portfolio/Portfolio";
import People from "./components/People/People";
import Footer from "./components/Footer/Footer";
import Explore from "./components/Explore/Explore";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


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
      document.querySelector("#menu").style.background = "#fff";
      if (window.innerWidth <= 768) {
        document.querySelector("#menu").style.boxShadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px";
      }

    } else {
      console.log("dark thi bhai")
      setTheme('dark')
      document.body.style.background = "#000";
      document.body.style.color = "#fff";
      document.querySelector(".day").style.display = "initial";
      document.querySelector(".night").style.display = "none";
      document.querySelector("#menu").style.background = "#000";
      if (window.innerWidth <= 768) {
        document.querySelector("#menu").style.boxShadow = "rgba(255, 255, 255, 0.15) 1.95px 1.95px 2.6px";
      }


    }
  }
  return (
    <Router>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className={`${css.container}`}>
        <Routes>
          <Route path="/home">
            <Hero theme={theme} />
            <Experties theme={theme} />
            <Work theme={theme} />
            <Portfolio theme={theme} />
            <People theme={theme} />
            <Footer theme={theme} />
          </Route>
          <Route path="/exploremore">
            <Explore />
          </Route>
        </Routes>
      </div>
    </Router>
  )
};

export default App;
