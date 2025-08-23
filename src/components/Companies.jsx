import { FaBriefcase } from 'react-icons/fa';

const companies = [
  {
    id:'alignerr',
    name:'Alignerr',
    pay:'$150 - $200 / hour',
    referral:'https://app.alignerr.com/signin?referral-code=ea824a91-dea0-4ccb-afa4-a2a984330ab1',
  languages:['All global & native languages','Regional & emerging dialect coverage','End-to-end linguistic + cultural tasks','Premium language rates'],
  // ...languages replaced below
    tech:['All programming languages','Cloud: Docker, AWS, Terraform','Content & English Editing','STEM: Math, Physics, Chemistry'],
    process:['Sign up & verify identity','AI interview (15–20 mins)','Matched & start earning'],
  },
  {
    id:'mercor',
    name:'Mercor',
    pay:'Up to $200 / hour',
    referral:'https://work.mercor.com/?referralCode=b43ec6ae-a7d6-48c5-93e2-3582f2221fdb',
  languages:['All global & native languages','Regional & emerging dialect coverage','End-to-end linguistic + cultural tasks','High-demand language projects'],
    tech:['All programming languages','Cloud: Docker, AWS, Terraform','Content Writing & Editing','STEM: Math, Physics, Chemistry'],
    process:['Create account','AI smart assessment','Connect with companies'],
  }
];

const Companies = () => {
  return (
    <section id="companies" className="companies-section reveal fade-scale">
      <div className="container">
        <h2 className="companies-title reveal">Featured Remote Talent Platforms</h2>
        <div className="companies-grid">
          {companies.map(c => (
            <article key={c.id} id={c.id} className="company-card reveal">
              <span className="company-badge"><FaBriefcase/> Remote • Global</span>
              <h3 className="company-name">{c.name}</h3>
              <div className="company-pay">{c.pay}</div>
              {c.id === 'alignerr' && (
                <div className="company-note">Register on laptop only — if you register on mobile, your account may be banned.</div>
              )}
              <div className="list-block">
                <h4 className="block-title">Language Opportunities</h4>
                <ul className="bullet-list">{c.languages.map(l=> <li key={l}>{l}</li>)}</ul>
              </div>
              <div className="list-block">
                <h4 className="block-title">Technical & Domain Work</h4>
                <ul className="bullet-list">{c.tech.map(l=> <li key={l}>{l}</li>)}</ul>
              </div>
              <div className="list-block">
                <h4 className="block-title">Fast 3-Step Path</h4>
                <ul className="bullet-list">{c.process.map(l=> <li key={l}>{l}</li>)}</ul>
              </div>
              <div className="company-actions">
                <a href={c.referral} className="company-button" target="_blank" rel="noopener noreferrer">Apply to {c.name}</a>
              </div>
            </article>
          ))}
        </div>
        <p className="disclaimer">Use a single laptop device for registration & assessments. Multiple devices / duplicate accounts may trigger permanent bans. Remote friendly for students, freelancers & professionals worldwide.</p>
      </div>
    </section>
  );
};

export default Companies;
