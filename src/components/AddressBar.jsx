function AddressBar({ onToggleTheme }) {
  return (
    <header className="address-bar">
      <div className="chrome-group">
        <button className="chrome-btn" type="button" aria-hidden="true">
          <span aria-hidden="true">&lsaquo;</span>
        </button>
        <button className="chrome-btn" type="button" aria-hidden="true">
          <span aria-hidden="true">&rsaquo;</span>
        </button>
      </div>

      <div className="url-pill interactive" onClick={onToggleTheme} style={{cursor: 'pointer'}}>
        devansh.pursnani.dev
      </div>

      <div className="chrome-group">
        <button className="chrome-btn interactive" type="button" onClick={onToggleTheme} title="Toggle Theme">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default AddressBar;
