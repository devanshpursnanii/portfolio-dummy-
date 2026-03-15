function ContactRow({ icon, platform, value, href }) {
  return (
    <a className="contact-row glass pulse-card interactive" href={href} target="_blank" rel="noreferrer">
      <div className="contact-left">
        <span>{icon}</span>
        <span className="contact-platform">{platform}</span>
      </div>
      <span className="contact-value">{value}</span>
    </a>
  );
}

export default ContactRow;
