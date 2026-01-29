import "./Features.css";
import featuresImg from "../assets/process.png";
import FeaturesImg1con from "../assets/Featured1.svg";
import FeaturesImg2con from "../assets/Featured2.svg";
import FeaturesImg3con from "../assets/Featured3.svg";
import FeaturesImg4con from "../assets/Featured4.svg";

function Features() {
  return (
    <section className="features">
      <div className="features-wrapper">

        {/* LEFT CONTENT */}
        <div className="features-left">
          <p className="small-title">How does it work?</p>

          <h2>
            Are you ready to <br /> transform your life?
          </h2>

          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do
            eiusmod tempor incididunt<br /> ut labore et dolore magna aliqua minim
            veniam.
          </p>

          <div className="features-list">

            <div className="feature-item">
              <div className="icon1">
            <img src={FeaturesImg1con} alt="Group Coaching" />
          </div>
              <div>
                <h4>Talk to me first</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br></br>eiusmod tempor incididunt.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="icon2">
            <img src={FeaturesImg2con} alt="Group Coaching" />
          </div>
              <div>
                <h4>Schedule a meeting</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br></br>eiusmod tempor incididunt.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="icon3">
            <img src={FeaturesImg3con} alt="Group Coaching" />
          </div>
              <div>
                <h4>Online consultation</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br> eiusmod tempor incididunt.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="icon4">
            <img src={FeaturesImg4con} alt="Group Coaching" />
          </div>
              <div>
                <h4>Ready to start? Let’s talk!</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br></br> eiusmod tempor incididunt.</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="features-right">
          <img src={featuresImg} alt="features" />
        </div>

      </div>
    </section>
  );
}

export default Features;
