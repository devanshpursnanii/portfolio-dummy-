import { useMemo, useState } from 'react';
import ProjectCard from './ProjectCard';

function ProjectFanStack({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const getPosition = (index) => {
    if (index === activeIndex) return 'center';
    
    // In a 3-project setup, we want one on left and one on right
    const prev = (activeIndex - 1 + projects.length) % projects.length;
    const next = (activeIndex + 1) % projects.length;
    
    if (index === prev) return 'left';
    if (index === next) return 'right';
    return 'hidden';
  };

  return (
    <div className="fan-wrap">
      <div className="fan-scene">
        {projects.map((project, index) => {
          const position = getPosition(index);
          return (
            <div key={project.title} className={`fan-card ${position}`}>
              <button
                type="button"
                className="interactive"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open ${project.title}`}
                style={{ pointerEvents: position === 'hidden' ? 'none' : 'auto' }}
              >
                <ProjectCard project={project} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectFanStack;
