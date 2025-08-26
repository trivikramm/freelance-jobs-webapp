import { FaCode, FaCloud, FaPen, FaFlask, FaLanguage, FaTasks } from 'react-icons/fa'; // eslint-disable-line no-unused-vars

const opportunities = [
  {
    icon: <FaLanguage />,
    title: 'Language Specialists',
    items: [
      'High-demand languages: Arabic, Bulgarian, Vietnamese, Catalan, Norwegian, Dutch, Khmer, Czech, Hungarian, Marathi, Cantonese, Swedish, Danish, Finnish, Hebrew, Ukrainian, Croatian, Italian, German, Punjabi, Malayalam, Tamil, Telugu, Hindi, Urdu, English',
      'Native fluency + cultural insight tasks',
      'Language data annotation, evaluation & QA',
      'Premium rates for rare / emerging dialects'
    ],
  },
  {
    icon: <FaCode />,
    title: 'Technical Projects',
    items: [
      'Core languages: Python, JavaScript, Java, TypeScript, C#, Swift, Kotlin, Ruby, Go, Rust',
      'Frontend & Web: HTML, CSS, React, Angular',
      'Backend & Frameworks: .NET, Spring Boot, API development (REST / JSON)',
      'Mobile, AI/ML, automation & integration projects'
    ],
  },
  {
    icon: <FaCloud />,
    title: 'Cloud & DevOps',
    items: [
      'Docker containerization & orchestration',
      'AWS services & cloud architecture',
      'Infrastructure as Code: Terraform',
      'CI/CD pipelines, reliability & observability'
    ],
  },
  {
    icon: <FaTasks />,
    title: 'Non‑Tech & Evaluation Tracks',
    items: [
      'Content writing, English editing & copy refinement',
      'Language data annotation & linguist evaluator tasks',
      'Content moderation & AI output quality review',
      'Market research, survey & feedback tasks',
      'Customer support QA / evaluator & generalist micro‑tasks',
      'Transcription, business / legal / medical expert feedback'
    ],
  },
  {
    icon: <FaFlask />,
    title: 'STEM & Academic',
    items: [
      'Mathematics, Physics, Chemistry, Biology domains',
      'STEM content writing & structured explanations',
      'Essay scoring & academic evaluation',
      'Quality assurance for AI‑generated technical content'
    ],
  },
  {
    icon: <FaPen />,
    title: 'Creative & Specialized',
    items: [
      'Editorial refinement & style consistency',
      'Multilingual cultural adaptation',
      'Long‑form & niche domain content',
      'Ongoing expert feedback loops'
    ],
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
