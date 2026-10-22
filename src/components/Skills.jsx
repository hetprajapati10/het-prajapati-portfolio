import { useState } from 'react';
import './Skills.css';

const skillCategories = [
  {
    category: 'Frontend',
    icon: '🖥️',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Angular', level: 80 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 72 },
      { name: 'HTML/CSS', level: 92 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 78 },
      { name: 'Django REST API', level: 82 },
      { name: 'Python', level: 88 },
      { name: 'REST APIs', level: 85 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    category: 'Data Science & AI',
    icon: '🤖',
    skills: [
      { name: 'Scikit-learn', level: 80 },
      { name: 'TensorFlow', level: 72 },
      { name: 'Pandas / NumPy', level: 88 },
      { name: 'Streamlit', level: 90 },
      { name: 'LLMs / GenAI', level: 75 },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 88 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Docker (basic)', level: 55 },
      { name: 'Figma', level: 65 },
    ],
  },
];

const techTags = [
  'Python', 'JavaScript', 'React', 'Angular', 'Node.js', 'Django REST',
  'MongoDB', 'MySQL', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit',
  'Prompt Engineering', 'LangChain', 'Hugging Face', 'Tableau', 'Power BI',
  'Git', 'GitHub', 'Machine Learning', 'NLP', 'Data Analysis',
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const active = skillCategories[activeTab];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">💡 Skills</span>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            A curated set of technologies I use to build full-stack applications and data-driven products.
          </p>
        </div>

        <div className="skills-tabs">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.category}
              className={`tab-btn ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              <span>{cat.icon}</span>
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        <div className="skills-panel card">
          <div className="skill-bars">
            {active.skills.map((skill) => (
              <div key={skill.name} className="skill-bar-item">
                <div className="skill-bar-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-track">
                  <div
                    className="skill-fill"
                    style={{ '--skill-width': `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-cloud">
          <p className="tech-cloud-label">All technologies I work with</p>
          <div className="tech-tags">
            {techTags.map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
