import Main from "./components/Main/Main";
import About from "./components/About/About";

import { useEffect } from "react";
import Aos from "aos";

import logo from "./asset/images/logo.png";
import profilePic from "./asset/images/profilePic.png";

import "./asset/files/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let words = ["Hassan", "The Whale", "Hassan - The Whale"];
  useEffect(() => {
    document.getElementById("main").scrollIntoView(false);
    Aos.init();
  }, []);

  let changeSection = (x) => {
    document.getElementById(x).scrollIntoView(true);
  };

  return (
    <>
      <Main
        image={logo}
        words={words}
        id="main"
        next="about"
        nextBtnFunction={changeSection}
      />

      <About
        title="Who am I?"
        text="Hello World!"
        image={profilePic}
        id="about"
        next="main"
        nextBtnFunction={changeSection}
      />
    </>
  );
}

export default App;
