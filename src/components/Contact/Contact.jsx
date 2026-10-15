import { usePreferences } from '../../context/PreferencesContext';
import { links } from '../../data/profile';
import { ArrowIcon, GithubIcon, LinkedinIcon, MailIcon, XIcon } from '../common/Icons';
import './Contact.css';

const channels = [
  { label: 'LinkedIn', handle: 'mashael-alasmari', href: links.linkedin, Icon: LinkedinIcon },
  { label: 'GitHub', handle: '@MashaelHA', href: links.github, Icon: GithubIcon },
  { label: 'X', handle: '@mhm_14151', href: links.x, Icon: XIcon },
];

export default function Contact() {
  const { strings } = usePreferences();
  const { kicker, title } = strings.sections.contact;

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__panel reveal">
          <span className="contact__kicker">{kicker}</span>
          <h2 className="contact__title">{title}</h2>
          <p className="contact__text">{strings.labels.contactText}</p>

          <a href={`mailto:${links.email}`} className="contact__email">
            <MailIcon width={22} height={22} />
            <span dir="ltr">{links.email}</span>
          </a>

          <ul className="contact__channels">
            {channels.map(({ label, handle, href, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon width={20} height={20} />
                  <span className="contact__channel-text">
                    <strong>{label}</strong>
                    <small dir="ltr">{handle}</small>
                  </span>
                  <ArrowIcon width={16} height={16} className="flip-rtl contact__arrow" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
