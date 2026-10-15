import { usePreferences } from '../../context/PreferencesContext';
import { ArrowIcon } from '../common/Icons';

export default function ProjectCard({ project, featured = false }) {
  const { t, strings } = usePreferences();
  const Tag = project.url ? 'a' : 'article';
  const linkProps = project.url ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <Tag className={`project-card reveal ${featured ? 'project-card--featured' : ''}`} {...linkProps}>
      <div className="project-card__top">
        {featured && <span className="project-card__badge">{strings.labels.featured}</span>}
        {project.context && <span className="project-card__context">{t(project.context)}</span>}
      </div>

      <h3 className="project-card__title">{t(project.title)}</h3>
      <p className="project-card__desc">{t(project.description)}</p>

      <div className="project-card__footer">
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
        {project.url && (
          <span className="project-card__cta">
            {t(project.cta)}
            <ArrowIcon width={16} height={16} className="flip-rtl" />
          </span>
        )}
      </div>
    </Tag>
  );
}
