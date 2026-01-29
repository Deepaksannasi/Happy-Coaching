import { useRef } from "react";
import "./Logos.css";
import layersLogo from "../assets/Layers.svg";
import sisyphusLogo from "../assets/sysphus.svg";
import circoolesLogo from "../assets/circooles.svg";
import catalogLogo from "../assets/Catlog.svg";
import quotientLogo from "../assets/Quotient.svg";

function Logos() {
  const rowRef = useRef(null);

  const scroll = (dir) => {
    if (!rowRef.current) return;
    const width = rowRef.current.clientWidth;
    rowRef.current.scrollBy({
      left: dir === "left" ? -width / 2 : width / 2,
      behavior: "smooth",
    });
  };

  return (
    <section className="logos">
      <p className="logos-text">
        From startups to the world’s largest companies
      </p>

      {/* arrows (only show on mobile/tablet via CSS) */}
      <button className="logo-arrow left" onClick={() => scroll("left")}>‹</button>
      <button className="logo-arrow right" onClick={() => scroll("right")}>›</button>

      <div className="logos-row" ref={rowRef}>
        <div className="logo-item"><img src={layersLogo} alt="" />Layers</div>
        <div className="logo-item"><img src={sisyphusLogo} alt="" />Sisyphus</div>
        <div className="logo-item"><img src={circoolesLogo} alt="" />Circooles</div>
        <div className="logo-item"><img src={catalogLogo} alt="" />Catalog</div>
        <div className="logo-item"><img src={quotientLogo} alt="" />Quotient</div>
      </div>
    </section>
  );
}

export default Logos;
