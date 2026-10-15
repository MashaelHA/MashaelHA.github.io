import { usePreferences } from '../../context/PreferencesContext';
import OrgLogo from '../common/OrgLogo';
import { FileIcon } from '../common/Icons';

export default function ExperienceCard({ item }) {
  const { t, strings } = usePreferences();

  return (
    <li className="exp-card reveal">
      <header className="exp-card__org">
        <OrgLogo logo={item.logo} monogram={item.monogram} background={item.logoBg} alt={t(item.org)} />
        <div>
          <h3 className="exp-card__org-name">{t(item.org)}</h3>
          <p className="exp-card__via">{t(item.via)}</p>
        </div>
      </header>

      <div className="exp-card__roles">
        {item.roles.map((role) => (
          <article key={t(role.title)} className="exp-role">
            <div className="exp-role__head">
              <h4 className="exp-role__title">
                {t(role.title)}
                {role.current && <span className="exp-role__badge">{strings.labels.current}</span>}
              </h4>
              <span className="exp-role__period">{t(role.period)}</span>
            </div>
            <ul className="exp-role__bullets">
              {t(role.bullets).map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="exp-role__tags">
              {role.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
            {role.certificate && (
              <a className="exp-role__cert" href={role.certificate} target="_blank" rel="noopener noreferrer">
                <FileIcon width={16} height={16} />
                {strings.labels.certificate}
              </a>
            )}
          </article>
        ))}
      </div>
    </li>
  );
}
