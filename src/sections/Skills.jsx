import GlassCard from '../components/GlassCard';

const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'C', 'JavaScript', 'SQL', 'HTML'],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      'FastAPI',
      'Streamlit',
      'React',
      'LlamaIndex',
      'LangChain',
      'LangGraph',
    ],
  },
  {
    category: 'Databases & Storage',
    items: ['PostgreSQL', 'MySQL', 'ChromaDB'],
  },
  {
    category: 'Tools & Platforms',
    items: [
      'Git',
      'GitHub',
      'VS Code',
      'Jupyter',
      'Google Colab',
      'Hugging Face',
      'Ollama',
      'Gemini API',
    ],
  },
  {
    category: 'ML & LLM Workflows',
    items: ['QLoRA Fine-Tuning', 'Retrieval-Augmented Generation (RAG)'],
  },
];

function Skills() {
  return (
    <section>
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <GlassCard key={group.category} className="skills-card">
            <div className="skills-header">// {group.category}</div>
            <div className="skill-list">
              {group.items.map((item) => (
                <div className="skill-item" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

export default Skills;
