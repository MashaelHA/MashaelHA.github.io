import './SectionHeader.css';

export default function SectionHeader({ kicker, title }) {
  return (
    <header className="section-header reveal">
      <span className="section-header__kicker">{kicker}</span>
      <h2 className="section-header__title">{title}</h2>
    </header>
  );
}
