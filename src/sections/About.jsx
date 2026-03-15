import GlassCard from '../components/GlassCard';

const stats = [
  { value: '3+', label: 'Years Learning' },
  { value: '12+', label: 'Projects Built' },
  { value: '2', label: 'Core Domains' },
  { value: '∞', label: 'Curiosity' },
];

const tags = [
  'AI / ML',
  'System Design',
  'Classical Music',
  'Art',
  'Travel',
  'Deep Learning',
];

function About() {
  return (
    <section>
      <h2 className="section-title">About</h2>
      <div className="about-grid">
        <div>
          <GlassCard className="about-left">
            <div className="monogram">
              <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
                <rect
                  x="10"
                  y="10"
                  width="140"
                  height="140"
                  rx="24"
                  stroke="rgba(59,130,246,0.45)"
                  strokeWidth="2"
                />
                <path
                  d="M42 112V48H70C85 48 94 57 94 72C94 87 85 96 70 96H56"
                  stroke="#3b82f6"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M96 112V48H120"
                  stroke="#06b6d4"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M96 80H116"
                  stroke="#06b6d4"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <GlassCard className="about-right">
          <p className="about-copy">
            I&apos;m Devansh Pursnani — an AI/ML enthusiast currently going deep on
            system design. I&apos;m fascinated by how large-scale systems think,
            fail, and recover. The same instinct that draws me to a great
            painting draws me to elegant architecture in code.
          </p>

          <div className="tag-list">
            {tags.map((tag) => (
              <span key={tag} className="mono-tag">
                {tag}
              </span>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

export default About;
