import "./Process.css";
import FeaturedIcon1 from "../assets/Featured1.svg";
import FeaturedIcon2 from "../assets/Featured2.svg";
import FeaturedIcon3 from "../assets/Featured3.svg";
import FeaturedIcon4 from "../assets/Featured4.svg";
import FeaturedIcon5 from "../assets/Featured5.svg";
import FeaturedIcon6 from "../assets/Featured6.svg";

function Process() {
  return (
    <section className="process">
      <p className="process-small">How does it work?</p>
      <h2>Are you ready to transform your life?</h2>
      <p className="process-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor <br />incididunt ut labore et dolore magna aliqua minim veniam.
      </p>

      <div className="process-grid">
          <div className="process-card" >
            <div className="icon-circle">
              <img src={FeaturedIcon1} alt="Featured" />
            </div>
            <h4>Ready to start? Let’s talk!</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit, sed do eiusmod tempor incididunt. Lorem <br/>ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="process-card" >
            <div className="icon-circle">
              <img src={FeaturedIcon2} alt="Featured" />
            </div>
            <h4>Ready to start? Let’s talk!</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit, sed do eiusmod tempor incididunt. Lorem <br/>ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="process-card" >
            <div className="icon-circle">
              <img src={FeaturedIcon3} alt="Featured" />
            </div>
            <h4>Ready to start? Let’s talk!</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit, sed do eiusmod tempor incididunt. Lorem <br/>ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="process-card" >
            <div className="icon-circle">
              <img src={FeaturedIcon4} alt="Featured" />
            </div>
            <h4>Ready to start? Let’s talk!</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit, sed do eiusmod tempor incididunt. Lorem <br/>ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="process-card" >
            <div className="icon-circle">
              <img src={FeaturedIcon5} alt="Featured" />
            </div>
            <h4>Ready to start? Let’s talk!</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit, sed do eiusmod tempor incididunt. Lorem <br/>ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="process-card" >
            <div className="icon-circle">
              <img src={FeaturedIcon6} alt="Featured" />
            </div>
            <h4>Ready to start? Let’s talk!</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit, sed do eiusmod tempor incididunt. Lorem <br/>ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          
      </div>
    </section>
  );
}

export default Process;

