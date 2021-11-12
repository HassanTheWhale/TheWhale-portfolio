import Main from "./components/Main/Main";
import About from "./components/About/About";
import Copyright from "./components/Copyright/Copyright";

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
        text="Hassan. A humble writer and Programmer.
        I like coffee, ice-creams & Cold Drinks. I am also a a story-teller and a voice-over man. I guess that's me :D"
        image={profilePic}
        id="about"
        next="main"
        nextBtnFunction={changeSection}
      />

      <Copyright>
        Built with <span>❤</span> by{" "}
        <a
          href="https://twitter.com/hassan_thewhale"
          target="_blank"
          rel="noreferrer"
        >
          Hassan_TheWhale
        </a>
      </Copyright>
    </>
  );
}

export default App;
