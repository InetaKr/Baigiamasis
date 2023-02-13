import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <h1>Talk to someone about  <br /> Your Pet,<span> anytime. </span></h1>
        <p>
         At Pazwly you can talk with your fellow pet Owners 24/7. <br /> Our community includes a team of veterinary doctors & nurses. <br />
         Whether you  want to talk about your pet, share info or get valuable advice — <br /> we’ve got your back. 
        </p>
        <Link to ="/forum">
        <button>Start Talking</button>
        </Link>
      </div>
    </>
  );
};

export default Hero;
