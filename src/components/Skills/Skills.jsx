import { usePreferences } from '../../context/PreferencesContext';
import { languages, skillGroups } from '../../data/skills';
import SectionHeader from '../common/SectionHeader';
import './Skills.css';

export default function Skills() {
  const { t, strings } = usePreferences();

  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <SectionHeader {...strings.sections.skills} />

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <div key={group.id} className="skills__group reveal" style={{ '--i': i }}>
              <h3 className="skills__title">
                <span className="skills__index">{String(i + 1).padStart(2, '0')}</span>
                {t(group.title)}
              </h3>
              <ul className="skills__items">
                {t(group.items).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="skills__languages reveal">
          <span className="skills__languages-label">{strings.labels.languages}</span>
          {t(languages).map((l) => (
            <span key={l} className="chip">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
