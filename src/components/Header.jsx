/* eslint-disable no-undef */
const logo = (typeof document !== 'undefined' && typeof URL !== 'undefined')
  ? new URL('../assets/logo-icon.svg', import.meta.url).href
  : '/src/assets/logo-icon.svg';
/* eslint-enable no-undef */

const Header = () => {
  return (
    <nav className="header-nav">
      <div className="nav-inner">
        <a href="#" className="nav-logo" aria-label="Freelance Jobs Home">
          <img className="logo-image" src={logo} alt="Freelance Jobs" />
          <span className="brand-text">Freelance Jobs</span>
        </a>
        <div className="nav-links">
          <a href="#features">Benefits</a>
          <a href="#opportunities">Opportunities</a>
          <a href="#companies">Platforms</a>
          <a href="#how-it-works">Process</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="cta-button-nav" href="#companies">Explore Platforms</a>
      </div>
    </nav>
  );
};

export default Header;
