import { FaWhatsapp, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="contact-info">
        <strong>Contact:</strong> +91-8179048058 (Direct WhatsApp).<br/>
        Join our community channels below for updates & opportunities.
      </div>
      <div className="social-links">
        <a href="https://t.me/FreelanceJobs0" aria-label="Telegram Channel" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
        <a href="https://wa.me/918179048058" aria-label="Direct WhatsApp Chat" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a href="https://www.linkedin.com/in/freelance-jobs-649348378/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
      <p className="copyright">&copy; {new Date().getFullYear()} Freelance Jobs. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
