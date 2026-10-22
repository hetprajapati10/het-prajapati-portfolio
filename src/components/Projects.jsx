import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Movie Recommendation System',
    category: 'Data Science',
    desc: 'Content-based recommendation engine using NLP and cosine similarity on a large movie dataset with a real-time Streamlit interface.',
    tags: ['Python', 'NLP', 'Streamlit', 'Scikit-learn', 'Cosine Similarity'],
    icon: '🎬',
    gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
    github: 'https://github.com/hetprajapati10',
    highlights: ['Feature engineering', 'Text vectorization', 'Similarity scoring'],
  },
  {
    title: 'Uber Ride Data Dashboard',
    category: 'Analytics',
    desc: 'Multi-page dashboard analyzing ride trends, cancellations, and vehicle performance with dynamic KPI cards and filterable charts.',
    tags: ['Python', 'Streamlit', 'Pandas', 'Data Visualization'],
    icon: '🚗',
    gradient: 'linear-gradient(135deg, #ec4899, #be185d)',
    github: 'https://github.com/hetprajapati10',
    highlights: ['Dynamic KPI cards', 'Data caching', 'Modular design'],
  },
  {
    title: 'Intelligent Interview Preparation',
    category: 'AI / Full-Stack',
    desc: 'Mock interview platform with speech-to-text, LLM-based question generation, coding lab, and readiness scoring.',
    tags: ['Python', 'LLMs', 'Speech-to-Text', 'React', 'AI Chatbot'],
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    github: 'https://github.com/hetprajapati10',
    highlights: ['LLM question generation', 'Speech I/O', 'Readiness scoring'],
  },
  {
    title: 'QR-Based Stock Inventory System',
    category: 'Full-Stack',
    desc: 'Full-stack system automating stock tracking, allocation, and returns via QR codes with Angular frontend and Django REST APIs.',
    tags: ['Angular', 'Django', 'REST API', 'QR Code', 'PostgreSQL'],
    icon: '📦',
    gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    github: 'https://github.com/hetprajapati10',
    highlights: ['Real-time stock updates', 'Secure auth', 'Server-side pagination'],
  },
  {
    title: 'VentureLens — AI Startup Analyzer',
    category: 'AI / Data',
    desc: 'AI-powered startup advisory platform evaluating business ideas end-to-end with market analysis, competitor assessment, and roadmap generation.',
    tags: ['Streamlit', 'LLMs', 'Prompt Engineering', 'Python', 'GenAI'],
    icon: '🚀',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    github: 'https://github.com/hetprajapati10',
    highlights: ['Market analysis', 'Competitor assessment', 'MVP roadmap'],
  },
  {
    title: 'ChatMind — Deep Learning Chatbot',
    category: 'AI / NLP',
    desc: 'Intent-based conversational AI chatbot using TensorFlow and Bidirectional LSTM with custom NLU pipeline and confidence-based response selection.',
    tags: ['TensorFlow', 'LSTM', 'NLP', 'Python', 'Deep Learning'],
    icon: '💬',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    github: 'https://github.com/hetprajapati10',
    highlights: ['Bidirectional LSTM', 'Intent classification', 'Tokenization pipeline'],
  },
  {
    title: 'MedPulse — Hospital Analytics',
    category: 'Analytics',
    desc: 'Multi-tab Streamlit dashboard with 6 live KPIs — patient volume, billing, revenue, and hospital coverage with 5 dedicated views.',
    tags: ['Streamlit', 'Python', 'Pandas', 'Data Viz', 'Healthcare'],
    icon: '🏥',
    gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
    github: 'https://github.com/hetprajapati10',
    highlights: ['6 live KPIs', '5 dashboard views', 'CSV upload support'],
  },
  {
    title: 'Spotify Analytics Dashboard',
    category: 'Analytics',
    desc: 'Full Streamlit app with custom user authentication and six-section analytics suite — Track, Artist, Genre, and Trend analysis.',
    tags: ['Streamlit', 'Python', 'Authentication', 'Data Viz', 'Music'],
    icon: '🎵',
    gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    github: 'https://github.com/hetprajapati10',
    highlights: ['Custom auth', 'Genre treemaps', 'Interactive explorer'],
  },
];

const categories = ['All', 'Data Science', 'Analytics', 'AI / Full-Stack', 'Full-Stack', 'AI / Data', 'AI / NLP'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  const uniqueCategories = ['All', ...new Set(projects.map((p) => p.category))];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">🛠️ Projects</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects spanning full-stack development, data science, and AI — each built end-to-end.
          </p>
        </div>

        <div className="projects-filter">
          {uniqueCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <div key={project.title} className="project-card card">
              <div className="project-icon" style={{ background: project.gradient }}>
                <span>{project.icon}</span>
              </div>
              <div className="project-category">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>

              <div className="project-highlights">
                {project.highlights.map((h) => (
                  <div key={h} className="project-highlight">
                    <span className="highlight-dot" />
                    {h}
                  </div>
                ))}
              </div>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline project-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
