import { FaCode, FaCloud, FaPen, FaFlask, FaLanguage } from 'react-icons/fa';

const opportunities = [
  {
    icon: <FaLanguage />,
    title: 'Language Specialists',
    items: ['All global & native languages supported', 'Regional + emerging dialect coverage', 'Cultural & linguistic quality tasks', 'High-demand projects with premium rates!'],
  },
  {
    icon: <FaCode />,
    title: 'Technical Projects',
    items: ['All programming languages', 'Web Development (React, Angular, etc.)', 'Mobile App Development', 'AI and Machine Learning'],
  },
  {
    icon: <FaCloud />,
    title: 'Cloud & DevOps',
    items: ['Docker', 'AWS', 'Terraform', 'CI/CD Pipelines'],
  },
  {
    icon: <FaPen />,
    title: 'Content & Writing',
    items: ['Technical Writing', 'Content Creation', 'English Editing', 'Copywriting'],
  },
  {
    icon: <FaFlask />,
    title: 'STEM Fields',
    items: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
  },
];

const Opportunities = () => {
  return (
    <section id="opportunities" className="opportunities-section reveal fade-scale">
      <div className="container">
        <h2 className="section-title reveal">Special Opportunities Available</h2>
        <div className="opportunities-grid stagger" data-grid>
          {opportunities.map((opp, index) => (
            <div className="opportunity-card" key={index}>
              <div className="card-header">
                {opp.icon}
                <h3 className="opportunity-title">{opp.title}</h3>
              </div>
              <div className="card-body">
                <ul className="opportunity-list">
                  {opp.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
