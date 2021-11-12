import "./Copyright.css";

function Copyright(props) {
  return (
    <div className="copyright bg-black py-3 text-white text-center">
      {props.children}
    </div>
  );
}

export default Copyright;
