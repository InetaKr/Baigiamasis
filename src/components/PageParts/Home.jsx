import Hero from "./Hero";
import careImg from "../../images/care.png";
import comImg from "../../images/comunnity.png";
import shareImg from "../../images/share.png";

const Home = () => {
  return (
    <>
      <Hero />

      <div className="landing-page-container">
        <div className="landing-page-header">
          <h2>Virtual Chat and Care puts your pet at the center</h2>
          <p>
            Pawzly focuses on providing pets owner with knowledge that will
            provide healthier lives of their pets. <br /> Moreover pet owners
            around the globe will be able to share their own experiences{" "}
          </p>
        </div>
        <div className="landing-page-content">
          <div className="landing-page-feature">
            <div className="feature-box">
              <img src={careImg} alt="care" />

              <div className="feature-text">
                <h3>Instant Care</h3>
                <p>Chat with our experts</p>
              </div>
            </div>
            <div className="feature-box">
              <img src={comImg} alt="community" />
              <div className="feature-text">
                <h3>Comminity</h3>
                <p>Big Friendly community with a lot of experiences</p>
              </div>
            </div>
            <div className="feature-box">
              <img src={shareImg} alt="share" />
              <div className="feature-text">
                <h3>Read and Share</h3>
                <p>
                  Read, Ask questions and <br /> Share the Love{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
