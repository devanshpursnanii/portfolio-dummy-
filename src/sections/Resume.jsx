import GlassCard from '../components/GlassCard';

function Resume() {
  return (
    <section className="resume-wrap">
      <GlassCard className="resume-card">
        <h2 className="section-title">Curriculum Vitae</h2>
        <p className="resume-subline">Latest academic + internship focused profile</p>
        <a className="resume-btn interactive" href="/resume-3.pdf" download>
          ↓ Download Résumé
        </a>
      </GlassCard>
    </section>
  );
}

export default Resume;
