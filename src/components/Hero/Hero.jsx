import { usePreferences } from '../../context/PreferencesContext';
import { links, profile } from '../../data/profile';
import SocialLinks from '../common/SocialLinks';
import { ArrowDownIcon, PinIcon } from '../common/Icons';
import HeroGraphic from './HeroGraphic';
import './Hero.css';

export default function Hero() {
  const { t, strings } = usePreferences();

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__content reveal">
          <p className="hero__hello">{strings.hero.hello}</p>
          <h1 className="hero__name">{t(profile.name)}</h1>
          <p className="hero__summary">{t(profile.summary)}</p>

          <div className="hero__cta">
            <a href={`mailto:${links.email}`} className="btn btn--primary">
              {strings.hero.contact}
            </a>
            <a href="#projects" className="btn btn--ghost">
              {strings.hero.work}
              <ArrowDownIcon width={18} height={18} />
            </a>
          </div>

          <div className="hero__meta">
            <span className="hero__location">
              <PinIcon width={18} height={18} />
              {t(profile.location)}
            </span>
            <SocialLinks />
          </div>
        </div>

        <aside className="hero__card reveal" aria-hidden="true">
          <HeroGraphic />
        </aside>
      </div>

      <div className="container">
        <dl className="hero__stats reveal">
          {profile.stats.map((s) => (
            <div key={s.value} className="hero__stat">
              <dt dir="ltr">{s.value}</dt>
              <dd>{t(s.label)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
