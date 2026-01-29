import { useState } from "react";
import "./Faq.css";
import minusIcon from "../assets/Faq1.svg";
import plusIcon from "../assets/Faq2.svg";

function Faq() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      q: "How long does the coaching process take?",
      a: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      q: "What if I wanted to end my coaching engagement?",
      a: "You can cancel anytime with no extra charges."
    },
    {
      q: "Can I change through coaching?",
      a: "Yes, coaching helps you gain clarity and confidence."
    },
    {
      q: "How often do we meet?",
      a: "We meet once every week or as scheduled."
    }
  ];

  return (
    <section className="faq">
      <h2>Good to know.</h2>
      <p className="faq-sub">
        Everything you need to know about the my services.
      </p>

      <div className="faq-list">
        {faqs.map((item, i) => (
          <div className="faq-item" key={i}>
            <div
  className="faq-question"
  onClick={() => setOpen(open === i ? -1 : i)}
>
  <h4>{item.q}</h4>

  <span className="faq-icon">
    <img
      src={open === i ? minusIcon : plusIcon}
      alt="toggle"
    />
  </span>
</div>


            {open === i && <p className="faq-answer">{item.a}</p>}
          </div>
        ))}
      </div>

      <div className="faq-box">
        <h3>Still have questions?</h3>
        <p>
          Can’t find the answer you’re looking for? Please chat to our friendly team.
        </p>
        <button>Get in touch</button>
      </div>
    </section>
  );
}

export default Faq;
