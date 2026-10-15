import { usePreferences } from '../../context/PreferencesContext';
import { education, volunteering } from '../../data/education';
import SectionHeader from '../common/SectionHeader';
import { CapIcon } from '../common/Icons';
import './Education.css';

export default function Education() {
  const { t, strings } = usePreferences();

  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <SectionHeader {...strings.sections.education} />

        <div className="edu__degree reveal">
          <div className="edu__icon">
            <CapIcon width={28} height={28} />
          </div>
          <div className="edu__degree-body">
            <h3>{t(education.degree)}</h3>
            <p>{t(education.school)}</p>
          </div>
          <div className="edu__degree-meta">
            <span className="edu__gpa">{t(education.gpa)}</span>
            <span className="edu__period">{t(education.period)}</span>
          </div>
        </div>

        <h3 className="edu__subtitle reveal">{strings.labels.volunteering}</h3>
        <ul className="edu__volunteer">
          {volunteering.map((v) => (
            <li key={v.id} className="reveal">
              <span className="edu__item-date">{t(v.period)}</span>
              <p className="edu__item-title">{t(v.org)}</p>
              <p className="edu__item-sub">{t(v.role)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
