import { FaArrowRight } from 'react-icons/fa';

const CTA = () => {
  return (
    <section id="cta" className="cta-section reveal fade-scale">
      <div className="cta-container">
        <h2 className="cta-title reveal">Let AI Match You to High-Paying Remote Work</h2>
        <p className="cta-subtitle reveal">
          Join vetted platforms (Alignerr, Mercor & more) and start earning globally across tech,
          language, and specialized domains.
        </p>
        <a className="cta-button" href="#companies" aria-label="Explore freelance platforms">
          Explore Platforms <FaArrowRight />
        </a>
      </div>
    </section>
  );
};

export default CTA;