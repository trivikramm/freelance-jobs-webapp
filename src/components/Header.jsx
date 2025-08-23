import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // eslint-disable-line no-unused-vars

/* eslint-disable no-undef */
const logo = (typeof document !== 'undefined' && typeof URL !== 'undefined')
  ? new URL('../assets/logo-icon.svg', import.meta.url).href
  : '/src/assets/logo-icon.svg';
/* eslint-enable no-undef */

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(o => !o);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="header-nav">
      <div className="nav-inner">
        <a href="#" className="nav-logo" aria-label="Freelance Jobs Home" onClick={closeMenu}>
          <img className="logo-image" src={logo} alt="Freelance Jobs" />
          <span className="brand-text">Freelance Jobs</span>
        </a>

        <button
          className="menu-toggle"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={toggleMenu}
          type="button"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`} role="menu">
          <a role="menuitem" onClick={closeMenu} href="#features">Benefits</a>
          <a role="menuitem" onClick={closeMenu} href="#opportunities">Opportunities</a>
            <a role="menuitem" onClick={closeMenu} href="#companies">Platforms</a>
          <a role="menuitem" onClick={closeMenu} href="#how-it-works">Process</a>
          <a role="menuitem" onClick={closeMenu} href="#contact">Contact</a>
        </div>
        <a className="cta-button-nav" href="#companies">Explore Platforms</a>
      </div>
    </nav>
  );
};

export default Header;
