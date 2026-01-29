import "./Hero.css";
import heroImg from "../assets/hero.jpg"; 

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="small-text">I can help you in these particular areas.</p>

        <h1>
          I help people to <br />
          discover their <br />
          true potential
        </h1>

        <p className="desc">
          I help people to discover their true potential and live a fulfilling<br />
          life. Discover the simple 3 steps that I discovered to hack<br />
          productivity. It just works and it is being backed by science. <br/>
          Wanna transform your life?
        </p>
      </div>

      <div className="hero-img">
        <img src={heroImg} alt="hero" />
      </div>
    </section>
  );
}

export default Hero;
