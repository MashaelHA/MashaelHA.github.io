import { useEffect, useState } from 'react';
import { usePreferences } from '../../context/PreferencesContext';
import { useActiveSection } from '../../hooks/useActiveSection';
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from '../common/Icons';
import BrandLogo from '../common/BrandLogo';
import './Navbar.css';

export default function Navbar({ sectionIds }) {
  const { strings, theme, toggleTheme, toggleLang } = usePreferences();
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" dir="ltr" className="navbar__brand" onClick={() => setOpen(false)}>
          <BrandLogo height={30} />
          <span className="navbar__name">
            Mashael<span className="navbar__dot">.</span>
          </span>
        </a>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          {sectionIds.slice(1).map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {strings.nav[id]}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button className="navbar__lang" onClick={toggleLang} aria-label={strings.labels.switchLangAria}>
            {strings.labels.switchLang}
          </button>
          <button className="navbar__icon" onClick={toggleTheme} aria-label={strings.labels.themeAria}>
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="navbar__icon navbar__menu"
            onClick={() => setOpen((o) => !o)}
            aria-label={strings.labels.menuAria}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
