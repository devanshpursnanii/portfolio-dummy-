import ProjectFanStack from '../components/ProjectFanStack';

const projectData = [
  {
    number: '01',
    title: 'Paperstack',
    type: '[ Full-Stack · Document Intelligence ]',
    description:
      'A document intelligence platform that transforms static paper into searchable, actionable knowledge. Combines OCR, semantic chunking, and vector search to let you query your documents like a database.',
    tags: ['Python', 'FastAPI', 'NLP', 'Vector DB', 'React', 'PostgreSQL'],
    href: '#',
  },
  {
    number: '02',
    title: 'ML Stock Price Predictor',
    type: '[ Machine Learning · Time Series ]',
    description:
      'A hybrid LSTM + sentiment analysis engine for equity price forecasting. Trained on multi-source financial data. Deployed as a real-time inference API with WebSocket price streaming and confidence intervals.',
    tags: ['PyTorch', 'LSTM', 'NLP', 'Time Series', 'FastAPI', 'WebSocket'],
    href: '#',
  },
  {
    number: '03',
    title: 'Semantic Book Recommender',
    type: '[ NLP · Recommendation Systems ]',
    description:
      'A semantic recommendation engine that maps books into vector space using transformer embeddings, then surfaces context-aware suggestions based on meaning, tone, and reader intent rather than simple keyword overlap.',
    tags: ['Python', 'Transformers', 'NLP', 'Vector Search', 'FastAPI', 'React'],
    href: '#',
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <ProjectFanStack projects={projectData} />
    </section>
  );
}

export default Projects;
