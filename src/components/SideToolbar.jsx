import {
  CodeXml,
  FileText,
  Home,
  Layers3,
  Mail,
  UserRound,
} from 'lucide-react';

const toolbarItems = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'about', label: 'About', Icon: UserRound },
  { id: 'skills', label: 'Skills', Icon: CodeXml },
  { id: 'projects', label: 'Projects', Icon: Layers3 },
  { id: 'resume', label: 'Resume', Icon: FileText },
  { id: 'contact', label: 'Contact', Icon: Mail },
];

function SideToolbar({ activeSection, onChangeSection }) {
  return (
    <nav className="side-toolbar" aria-label="Section navigation">
      <div className="toolbar-list">
        {toolbarItems.map(({ id, label, Icon }) => (
          <button
            key={id}
            type="button"
            className={`toolbar-item interactive ${
              activeSection === id ? 'active' : ''
            }`}
            aria-label={label}
            onClick={() => onChangeSection(id)}
          >
            <Icon size={18} strokeWidth={1.8} />
          </button>
        ))}
      </div>
    </nav>
  );
}

export default SideToolbar;
