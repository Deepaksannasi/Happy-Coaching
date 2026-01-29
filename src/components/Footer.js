import "./Footer.css";
import LinkedinIcon from "../assets/Linkedin.svg";
import FacebookIcon from "../assets/facebook.svg";
import GlobeIcon from "../assets/globe.svg";
import logo from "../assets/Logo.png";
import footer from "../assets/footer.svg"

function Footer() {
  return (
    <footer className="footer">

      <div className="newsletter-wrap">
  <div className="newsletter">
    <div>
      <h3>Get notified when I publish new articles</h3>
      <p>Stay up to date with the latest news, announcements, and articles.</p>
    </div>

    <div className="newsletter-form">
      <input type="email" placeholder="Enter your email" />
      <button>Subscribe</button>
    </div>
  </div>
</div>


      {/* FOOTER MAIN */}
      <div className="footer-main">

        <div className="footer-col footer-brand">
  <div className="footer-brand-title">
    <img src={logo} alt="Logo" className="footer-logo" />
    <h4>Happy Coaching</h4>
  </div>

  <p className="footer-desc">
    Design amazing digital experiences that <br />
    create more happy in the world.
  </p>
</div>



        <div className="footer-col">
          <h4>Pages</h4>
          <p>Home</p>
          <p>Services</p>
          <p>About us</p>
          <p>Extra Sales/Landingpage</p>
          <p>Free guide</p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>+123 456 789</p>
          <p>hello@happydigital.nl</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
        </div>

      </div>

     <div className="footer-bottom">
  <p>Made with a <img src={footer} alt="Heart" /> by HappyDigital</p>

  <div className="socials">
    <img src={LinkedinIcon} alt="LinkedIn" />
    <img src={FacebookIcon} alt="Facebook" />
    <img src={GlobeIcon} alt="Website" />
  </div>
</div>

    </footer>
  );
}

export default Footer;
