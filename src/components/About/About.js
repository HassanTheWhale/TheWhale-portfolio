import "./About.css";

function About(props) {
  return (
    <section
      className="about d-flex justify-content-center align-items-center flex-column text-white"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <div className="container">
        <h1 className="mb-0">{props.title}</h1>
        <hr className="mt-1 mb-5" />

        <div className="row">
          <div className="col-md-6 mb-md-0 order-1 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            molestias dicta, animi atque cumque deleniti a repellendus quaerat,
            pariatur dolore illum numquam quos sapiente cum. Soluta, a. Eius
            aliquam, unde non ex earum ad ducimus nam quasi possimus natus
            facere. Eveniet autem placeat architecto cumque ad voluptatibus quae
            numquam delectus.
          </div>
          <div className="col-md-6 mb-4 mb-md-0 text-center order-0 order-md-2">
            <img
              src={props.image}
              alt={props.title}
              className="img-fluid profilePic"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
