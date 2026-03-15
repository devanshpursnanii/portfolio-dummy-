function GlassCard({ className = '', children }) {
  return <article className={`glass pulse-card ${className}`.trim()}>{children}</article>;
}

export default GlassCard;
