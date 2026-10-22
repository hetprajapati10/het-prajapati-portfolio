import profileImg from '../assets/profile.png';
import './Hero.css';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/hetprajapati10',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/het-prajapati-b30ab6288/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:hetprajapati10@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
];

const stats = [
  { value: '7.99', label: 'CGPA' },
  { value: '5+', label: 'Projects' },
  { value: '2026', label: 'Graduation' },
  { value: 'Fresher', label: 'Open to Work' },
];

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-greeting animate-fade-up">
            <span className="greeting-wave">👋</span>
            <span>Hi there, I&apos;m</span>
          </div>

          <h1 className="hero-name animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Het Prajapati
          </h1>

          <div className="hero-role animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="role-text">Software Engineer</span>
            <span className="role-divider">·</span>
            <span className="role-text">Full-Stack &amp; Data-Driven</span>
          </div>

          <p className="hero-bio animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Computer Engineering graduate (GTU, 2026) with hands-on experience across full-stack development
            (React, Angular, Node.js, Django REST API) and data analytics / machine learning (Python, Streamlit, Scikit-learn).
            Built and shipped multiple end-to-end applications spanning frontend UI, backend APIs, and data-driven features.
          </p>

          <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://raw.githubusercontent.com/hetprajapati10/het-prajapati-portfolio/main/assets/Het-Prajapati-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Download Resume
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
            <a href="#contact" className="btn-outline">
              Let&apos;s Talk
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          <div className="hero-social animate-fade-up" style={{ animationDelay: '0.5s' }}>
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-link" title={s.label}>
                {s.icon}
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="avatar-container animate-float">
            <div className="avatar-ring ring-1" />
            <div className="avatar-ring ring-2" />
            <div className="avatar-image">
              <img src={profileImg} alt="Het Prajapati" className="avatar-photo" />
            </div>
            <div className="avatar-badge">
              <span className="status-dot" />
              Available for work
            </div>
          </div>

          <div className="hero-stats">
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <span className="stat-value gradient-text">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll down</span>
      </div>
    </section>
  );
}
