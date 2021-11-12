import { Typewriter } from "react-simple-typewriter";
import "./Main.css";

function Main(props) {
  return (
    <section className="main d-flex justify-content-center align-items-center flex-column text-white">
      <h1>
        <Typewriter
          words={props.words}
          loop={-1}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={70}
          delaySpeed={2000}
        />
      </h1>
      <img src={props.image} className="logo" alt="logo" />
    </section>
  );
}

export default Main;
