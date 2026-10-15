import { links } from '../../data/profile';
import { GithubIcon, LinkedinIcon, MailIcon, XIcon } from './Icons';
import './SocialLinks.css';

const items = [
  { href: `mailto:${links.email}`, label: 'Email', Icon: MailIcon },
  { href: links.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
  { href: links.github, label: 'GitHub', Icon: GithubIcon },
  { href: links.x, label: 'X (Twitter)', Icon: XIcon },
];

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`social ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <Icon width={18} height={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}
