import { usePreferences } from '../../context/PreferencesContext';
import { profile } from '../../data/profile';
import SocialLinks from '../common/SocialLinks';
import BrandLogo from '../common/BrandLogo';
import './Footer.css';

export default function Footer() {
  const { t, strings } = usePreferences();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <BrandLogo variant="full" height={44} className="footer__logo" />
        <p>
          © {year} {t(profile.name)}. {strings.labels.rights}
        </p>
        <SocialLinks />
        <a href="#home" className="footer__top">
          {strings.labels.backToTop} ↑
        </a>
      </div>
    </footer>
  );
}
