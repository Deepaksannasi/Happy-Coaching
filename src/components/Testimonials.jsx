import { useRef } from "react";
import "./Testimonials.css";
import user1 from "../assets/about2.svg";
import user2 from "../assets/about3.svg";

function Testimonials() {
  const rowRef = useRef(null);

  const scroll = (dir) => {
    if (!rowRef.current) return;
    const width = rowRef.current.clientWidth;
    rowRef.current.scrollBy({
      left: dir === "left" ? -width / 1.2 : width / 1.2,
      behavior: "smooth",
    });
  };

  return (
    <section className="testimonials">
      <h2>Hear out what my <br /> clients say about me.</h2>

      {/* arrows */}
      <button className="test-arrow left" onClick={() => scroll("left")}>‹</button>
      <button className="test-arrow right" onClick={() => scroll("right")}>›</button>

      <div className="testimonials-row" ref={rowRef}>
        <div className="testimonial-card">
          <span className="rating1">5/5</span>
          <p>
            "I gained so much <b>confidence</b> in my ability to connect and
            deepen my relationships with people."
          </p>
          <h4>Jane</h4>
          <img src={user1} alt="Jane" />
        </div>

        <div className="testimonial-card active">
          <span className="rating">5/5</span>
          <p>
            "Denise helped me organise my diet. Highly recommend her services!"
          </p>
          <h4>Catherine</h4>
          <img src={user2} alt="Catherine" />
        </div>

        <div className="testimonial-card">
          <span className="rating">5/5</span>
          <p>
            "I gained so much confidence in my ability to connect and
            deepen my relationships with people."
          </p>
          <h4>Jane</h4>
          <img src={user1} alt="Jane" />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
