import { FaUserPlus, FaRobot, FaHandshake } from 'react-icons/fa';

const steps = [
  {
    icon: <FaUserPlus />,
    title: 'Sign Up & Verify with Digilocker',
    text: 'Create your Alignerr account and complete the identity verification process.',
  },
  {
    icon: <FaRobot />,
    title: 'AI Interview',
    text: 'Take a 15-20 minute smart assessment to showcase your skills to our AI.',
  },
  {
    icon: <FaHandshake />,
    title: 'Get Matched & Earn',
    text: 'Our AI connects you with top companies instantly. Start your remote career!',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works-section reveal fade-scale">
      <div className="container" data-steps>
        <h2 className="section-title reveal">Ready to Join?</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card reveal">
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
