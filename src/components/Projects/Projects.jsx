import { usePreferences } from '../../context/PreferencesContext';
import { projects } from '../../data/projects';
import { links } from '../../data/profile';
import SectionHeader from '../common/SectionHeader';
import { ArrowIcon, GithubIcon } from '../common/Icons';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
  const { strings, lang } = usePreferences();
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader {...strings.sections.projects} />

        {featured && <ProjectCard project={featured} featured />}

        <div className="projects__grid">
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <a className="projects__more reveal" href={links.github} target="_blank" rel="noopener noreferrer">
          <GithubIcon width={18} height={18} />
          {lang === 'ar' ? 'المزيد على GitHub' : 'More on GitHub'}
          <ArrowIcon width={16} height={16} className="flip-rtl" />
        </a>
      </div>
    </section>
  );
}
