import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

const JoinChannels = () => (
  <section className="join-wrapper">
    <div className="join-inner">
      <h2 className="join-title">For more freelance opportunities</h2>
      <p className="join-text">Join the official community channels below to get instant alerts on new premium remote roles, platform updates, and application tips. We welcome talent across all global & native languages, tech stacks, and domains.</p>
      <div className="channels">
        <a className="channel-link telegram" href="https://t.me/FreelanceJobs0" target="_blank" rel="noopener noreferrer">
          <div className="icon-wrap"><FaTelegramPlane /></div>
          <div className="content">
            <strong>Telegram Channel</strong>
            <span>Daily role drops • Fast updates • Global community</span>
          </div>
        </a>
        <a className="channel-link whatsapp" href="https://whatsapp.com/channel/0029VbAnrvxCHDysbcSp9x0r" target="_blank" rel="noopener noreferrer">
          <div className="icon-wrap"><FaWhatsapp /></div>
          <div className="content">
            <strong>WhatsApp Channel</strong>
            <span>Quick notifications • Mobile-first • Broadcast only</span>
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default JoinChannels;