import './Experience.css';

const experiences = [
  {
    role: 'Data Science Trainee',
    company: 'Infolabz',
    duration: 'Jan 2025 – June 2025',
    type: 'Traineeship',
    bullets: [
      'Apply data science and GenAI concepts through project-based learning, working hands-on with LLM tools and prompt engineering.',
      'Clean, preprocess, and analyze real-world datasets end-to-end, from raw data to exploratory data analysis (EDA).',
      'Build interactive dashboards and evaluate machine learning models using Python and Streamlit.',
    ],
    tags: ['Python', 'Streamlit', 'Machine Learning', 'GenAI', 'Prompt Engineering', 'EDA'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">💼 Experience</span>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Professional experience applying data science and full-stack development in real-world environments.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot">
                <div className="dot-inner" />
              </div>
              <div className="timeline-card card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">
                      <span className="company-name">{exp.company}</span>
                      <span className="exp-type">{exp.type}</span>
                    </div>
                  </div>
                  <div className="exp-duration">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {exp.duration}
                  </div>
                </div>

                <ul className="exp-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>

                <div className="exp-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="exp-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
