import { useRef } from "react";
import "./Services.css";
import usersIcon from "../assets/users.svg";
import chatIcon from "../assets/chat.svg";
import oneIcon from "../assets/One.svg";
import BookIcon from "../assets/Book.svg";
import pointingHand from "../assets/pointinghand.svg";

function Services() {
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
    <section className="services">
      <h2>
        I can help you in these <br /> particular areas.
      </h2>

      {/* arrows */}
      <button className="service-arrow left" onClick={() => scroll("left")}>
        ‹
      </button>
      <button className="service-arrow right" onClick={() => scroll("right")}>
        ›
      </button>

      <div className="services-grid" ref={rowRef}>
        <div className="service-card active">
          <div className="icon">
            <img src={usersIcon} alt="Group Coaching" />
          </div>
          <h3>Group Coaching Sessions</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
            eiusmod tempor<br /> incididunt ut labore et dolore magna <br />aliqua minim
            veniam.
          </p>
          <img src={pointingHand} alt="pointing hand" className="pointing-hand" />
        </div>

        <div className="service-card">
          <div className="icon">
            <img src={BookIcon} alt="Online course" />
          </div>
          <h3>Online course</h3>
          <p>
             Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
            eiusmod tempor<br /> incididunt ut labore et dolore magna <br />aliqua minim
            veniam..
          </p>
        </div>

        <div className="service-card">
          <div className="icon">
            <img src={chatIcon} alt="Consultation" />
          </div>
          <h3>Consultation</h3>
          <p>
             Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
            eiusmod tempor<br /> incididunt ut labore et dolore magna <br />aliqua minim
            veniam.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">
            <img src={oneIcon} alt="1:1 Coaching" />
          </div>
          <h3>1:1 Coaching</h3>
          <p>
             Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
            eiusmod tempor<br /> incididunt ut labore et dolore magna <br />aliqua minim
            veniam.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
