import Main from "./components/Main/Main";
import About from "./components/About/About";

import logo from "./asset/images/logo.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let words = ["Hassan", "The Whale", "Hassan - The Whale"];
  return (
    <>
      <Main image={logo} words={words} />

      <About />
    </>
  );
}

export default App;
