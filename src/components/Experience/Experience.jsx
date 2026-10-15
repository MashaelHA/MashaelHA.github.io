import { usePreferences } from '../../context/PreferencesContext';
import { experience } from '../../data/experience';
import SectionHeader from '../common/SectionHeader';
import ExperienceCard from './ExperienceCard';
import './Experience.css';

export default function Experience() {
  const { strings } = usePreferences();

  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <SectionHeader {...strings.sections.experience} />
        <ol className="experience__list">
          {experience.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </ol>
      </div>
    </section>
  );
}
