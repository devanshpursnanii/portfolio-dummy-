function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <h1 className="hero-name">DEVANSH PURSNANI</h1>
        <p className="hero-role">AI &amp; ML Enthusiast · Aspiring System Designer</p>
        <div className="hero-divider" />
        <p className="hero-tagline">Where machine learning meets system design.</p>
        <div className="hero-actions">
          <a className="glass-pill interactive" href="mailto:devansh.pursnani23@spit.ac.in">
            ✉ Mail
          </a>
          <a className="glass-pill interactive" href="/resume-3.pdf" download>
            ↓ Resume
          </a>
          <a
            className="glass-pill interactive"
            href="https://www.linkedin.com/in/devansh-pursnani-946853231/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
