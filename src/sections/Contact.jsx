import { Github, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import ContactRow from '../components/ContactRow';

const contacts = [
  {
    platform: 'LinkedIn',
    value: 'linkedin.com/in/devansh-pursnani-946853231',
    href: 'https://www.linkedin.com/in/devansh-pursnani-946853231/',
    icon: <Linkedin size={18} color="#3b82f6" />,
  },
  {
    platform: 'Gmail',
    value: 'devansh.pursnani23@spit.ac.in',
    href: 'mailto:devansh.pursnani23@spit.ac.in',
    icon: <Mail size={18} color="#3b82f6" />,
  },
  {
    platform: 'GitHub',
    value: 'github.com/devanshpursnanii',
    href: 'https://github.com/devanshpursnanii',
    icon: <Github size={18} color="#3b82f6" />,
  },
  {
    platform: 'Phone',
    value: '+91 75066 36161',
    href: 'tel:+917506636161',
    icon: <Phone size={18} color="#3b82f6" />,
  },
  {
    platform: 'WhatsApp',
    value: '+91 75066 36161',
    href: 'https://wa.me/917506636161',
    icon: <MessageCircle size={18} color="#3b82f6" />,
  },
];

function Contact() {
  return (
    <section>
      <h2 className="section-title">Contact</h2>
      <div className="contact-grid">
        <div className="contact-list">
          {contacts.map((contact) => (
            <ContactRow key={contact.platform} {...contact} />
          ))}
        </div>

        <GlassCard className="contact-form">
          <div className="form-grid">
            <input className="form-field" placeholder="Name" />
            <input className="form-field" type="email" placeholder="Email" />
            <input className="form-field" placeholder="Subject" />
            <textarea className="form-field" placeholder="Message" rows={6} />
            <button type="button" className="send-btn interactive">
              Send
            </button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

export default Contact;
