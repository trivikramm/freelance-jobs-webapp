import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero-section reveal">
      <div className="hero-inner">
        <h1 className="hero-title">Freelance Jobs – Remote Roles Powered by AI Matching</h1>
        <p className="hero-subtitle">Discover premium remote opportunities via platforms like Alignerr & Mercor. Earn up to $200/hour across tech, language, and domain projects.</p>
        <a className="cta-button" href="#companies">
          View Platforms <FaArrowRight />
        </a>
        <p className="hero-note">Use a single laptop device for registration. Multiple devices / duplicate accounts may cause permanent bans.</p>
      </div>
    </section>
  );
};

export default Hero;
