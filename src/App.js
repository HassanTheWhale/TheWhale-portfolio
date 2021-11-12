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
    Aos.init();
  }, []);

  return (
    <>
      <section id="element1">
        <Main image={logo} words={words} />
      </section>

      <section id="element2">
        <About title="Who am I?" text="Hello World!" image={profilePic} />
      </section>
    </>
  );
}

export default App;
