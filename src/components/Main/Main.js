import { Typewriter } from "react-simple-typewriter";
import { Button } from "react-bootstrap";
import "./Main.css";

function Main(props) {
  return (
    <section
      className="main container d-flex justify-content-center align-items-center flex-column text-white"
      id={props.id}
    >
      <h1 className="mb-4">
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

      <img src={props.image} className="img-fluid my-5" alt="logo" />

      <Button
        className="mt-5"
        variant="outline-info"
        size="lg"
        onClick={() => {
          props.nextBtnFunction(props.next);
        }}
      >
        See Next
      </Button>
    </section>
  );
}

export default Main;
