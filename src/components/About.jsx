import './About.css';

const highlights = [
  {
    icon: '🚀',
    title: 'Full-Stack Development',
    desc: 'React, Angular, Node.js, Django REST API — frontend to backend.',
  },
  {
    icon: '🤖',
    title: 'Data Science & AI',
    desc: 'Python, ML models, LLM-based tools, Streamlit dashboards.',
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    desc: 'End-to-end data pipelines, EDA, visualization, and insights.',
  },
  {
    icon: '🛠️',
    title: 'Problem Solver',
    desc: 'From QR-based inventory systems to intelligent interview platforms.',
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-badge">⚡ About Me</span>
            <h2 className="section-title">
              Bridging <span className="gradient-text">Code</span> &amp; Data
            </h2>
            <p className="section-subtitle">
              Computer Engineering graduate (GTU, 2026) with hands-on experience across full-stack development
              (React, Angular, Node.js, Django REST API) and data analytics/machine learning (Python, Streamlit, Scikit-learn).
              Built and shipped multiple end-to-end applications spanning frontend UI, backend APIs, and data-driven features,
              including a QR-based inventory system, an NLP-powered recommendation engine, and an LLM-assisted interview platform.
            </p>
            <p className="about-extra">
              Currently applying data science and GenAI concepts through a traineeship at Infolabz, following a completed
              IBM SkillsBuild Data Analytics Internship. Comfortable working across the stack — from building responsive UIs
              to designing REST APIs to analyzing data and prototyping with LLMs (LangChain, Hugging Face) — and looking to grow
              into a role that lets that range compound.
            </p>

            <div className="about-actions">
              <a
                href="https://github.com/hetprajapati10"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                View GitHub
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="about-highlights">
            {highlights.map((h) => (
              <div key={h.title} className="highlight-card card">
                <div className="highlight-icon">{h.icon}</div>
                <div>
                  <h3 className="highlight-title">{h.title}</h3>
                  <p className="highlight-desc">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
