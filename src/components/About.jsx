import "./About.css";
import aboutImg from "../assets/about.jpg"; 
import aboutImg1 from "../assets/about1.svg";
import aboutImg2 from "../assets/image.svg";
import aboutImg3 from "../assets/Featured2.svg";

function About() {
  return (
    <section className="about">
      <div className="about-container">

        {/* LEFT */}
        <div className="about-left">
          <p className="small-text">Proven strategies backed by science for success.</p>

          <h1>About me</h1>

          <p className="about-desc">
            I help people to discover their true potential and live a fulfilling<br /> life.
            Discover the simple 3 steps that I discovered to hack <br />productivity.
            It just works and it is begin using backed by science.<br />
            Wanna transform your life?
          </p>

          <button className="about-btn">Get your free guide now</button>
        </div>

        {/* RIGHT */}
        <div className="about-right">
          <img src={aboutImg} alt="Coach" />

          <div className="badge">
  <div className="badge-icon">
    <img src={aboutImg1} alt="icon" />
  </div>

  <p>
    More than 250+ <br />
    Online Sessions
  </p>
</div>

          <div className="calendar-icon">
            <img src={aboutImg3} alt="calendar" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
