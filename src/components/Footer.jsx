import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-divider" />
      <div className="container footer-container">
        <div className="footer-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="footer-name gradient-text">HP</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        <p className="footer-copy">
          © {year} Het Prajapati. Designed with ❤️ &amp; built in React.
        </p>
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
