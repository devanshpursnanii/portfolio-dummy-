import AddressBar from './AddressBar';
import SideToolbar from './SideToolbar';

function BrowserShell({ activeSection, onChangeSection, toggleTheme, children }) {
  return (
    <main className="browser-shell">
      <div className="browser-layout">
        <AddressBar onToggleTheme={toggleTheme} />
        <div className="browser-viewport">
          <SideToolbar
            activeSection={activeSection}
            onChangeSection={onChangeSection}
          />
          <section className="content-area">{children}</section>
        </div>
      </div>
    </main>
  );
}

export default BrowserShell;
