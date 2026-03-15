import { useEffect, useMemo, useState } from 'react';
import BrowserShell from './components/BrowserShell';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

const sections = {
  home: Hero,
  about: About,
  skills: Skills,
  projects: Projects,
  resume: Resume,
  contact: Contact,
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('dark');
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'vibrant' : 'dark'));
  };

  const ActiveSection = useMemo(() => sections[activeSection], [activeSection]);

  useEffect(() => {
    const updateCursor = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    const updateHoverState = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }
      const isInteractive = target.closest(
        'a, button, input, textarea, select, .interactive'
      );
      setHovering(Boolean(isInteractive));
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  return (
    <div className="app-root" data-theme={theme}>
      <div className="cursor-dot" style={{ left: cursor.x, top: cursor.y }} />
      <div
        className={`cursor-ring ${hovering ? 'expand' : ''}`}
        style={{ left: cursor.x, top: cursor.y }}
      />

      <BrowserShell
        activeSection={activeSection}
        onChangeSection={setActiveSection}
        sectionKey={activeSection}
        toggleTheme={toggleTheme}
      >
        <div className="content-wrap section-active" key={activeSection}>
          <ActiveSection />
        </div>
      </BrowserShell>
    </div>
  );
}

export default App;
