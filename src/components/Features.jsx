import { FaGlobe, FaDollarSign, FaBuilding, FaRobot } from 'react-icons/fa';

const features = [
  {
    icon: <FaGlobe />,
    title: '100% Remote',
    text: 'Set your own schedule and work from anywhere in the world.',
  },
  {
    icon: <FaDollarSign />,
    title: 'Competitive Pay',
    text: 'Earn up to $200/hour with a clear and competitive pay structure.',
  },
  {
    icon: <FaBuilding />,
    title: 'Top Companies',
    text: 'Get matched with Fortune 500 firms and leading Silicon Valley companies.',
  },
  {
    icon: <FaRobot />,
    title: 'AI-Powered Matching',
    text: 'Our advanced AI finds the perfect role that aligns with your skills and goals.',
  },
];

const Features = () => {
  return (
    <section id="features" className="features-section reveal fade-scale">
      <div className="container">
        <h2 className="section-title reveal">What's in it for you?</h2>
        <div className="features-grid stagger" data-grid>
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon-wrapper">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
