import markUrl from '../../assets/logos/ma-mark.png';
import fullUrl from '../../assets/logos/ma-logo.png';
import './BrandLogo.css';

// Personal MA logo. Rendered as a CSS mask so it takes the current text colour
// (navy in light mode, white in dark mode, or any colour you pass).
export default function BrandLogo({ variant = 'mark', height = 32, color, className = '' }) {
  const src = variant === 'full' ? fullUrl : markUrl;
  const ratio = variant === 'full' ? 746 / 293 : 273 / 195;

  return (
    <span
      role="img"
      aria-label="Mashael Alasmari"
      className={`brand-logo ${className}`}
      style={{
        height,
        width: Math.round(height * ratio),
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        ...(color ? { backgroundColor: color } : {}),
      }}
    />
  );
}
