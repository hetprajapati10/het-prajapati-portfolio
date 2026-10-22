import './Education.css';

const education = [
  {
    degree: 'B.E. in Computer Engineering',
    institution: 'SAL Institute of Technology and Engineering Research — GTU',
    duration: '2022 – 2026',
    grade: 'CGPA: 7.99',
    icon: '🎓',
    type: 'Degree',
  },
  {
    degree: '12th (Science)',
    institution: 'Shree New Vidhya Vihar',
    duration: '2022',
    grade: 'Percentage: 67%',
    icon: '📚',
    type: 'Higher Secondary',
  },
  {
    degree: '10th',
    institution: 'Shree New Vidhya Vihar',
    duration: '2020',
    grade: 'Percentage: 78%',
    icon: '🏫',
    type: 'Secondary',
  },
];

const certifications = [
  {
    name: 'Data Analytics Certification',
    issuer: 'CSRBOX in collaboration with IBM SkillsBuild (2023)',
    icon: '📊',
  },
  {
    name: 'Deloitte Data Analytics Job Simulation',
    issuer: 'Deloitte / Forage (June 2026)',
    icon: '🏢',
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">🎓 Education</span>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Academic foundation combined with industry certifications in data science and AI.
          </p>
        </div>

        <div className="edu-grid">
          <div className="edu-column">
            <h3 className="edu-col-title">
              <span>🏛️</span> Academic
            </h3>
            <div className="edu-cards">
              {education.map((edu) => (
                <div key={edu.degree} className="edu-card card">
                  <div className="edu-icon">{edu.icon}</div>
                  <div className="edu-info">
                    <span className="edu-type">{edu.type}</span>
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <p className="edu-institution">{edu.institution}</p>
                    <div className="edu-meta">
                      <span className="edu-duration">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                          <rect x="3" y="4" width="18" height="18" rx="2"/>
                          <line x1="16" y1="2" x2="16" y2="6"/>
                          <line x1="8" y1="2" x2="8" y2="6"/>
                          <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        {edu.duration}
                      </span>
                      <span className="edu-grade gradient-text">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="edu-column">
            <h3 className="edu-col-title">
              <span>🏆</span> Certifications
            </h3>
            <div className="cert-cards">
              {certifications.map((cert) => (
                <div key={cert.name} className="cert-card card">
                  <div className="cert-icon">{cert.icon}</div>
                  <div>
                    <p className="cert-name">{cert.name}</p>
                    <p className="cert-issuer">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
