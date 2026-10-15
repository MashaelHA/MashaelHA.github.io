import './OrgLogo.css';

// Shows an organisation's logo on its own tile colour, or a monogram if no logo exists.
export default function OrgLogo({ logo, monogram, background = '#fff', alt, size = 'md' }) {
  return (
    <div className={`org-logo org-logo--${size}`} style={{ background }}>
      {logo ? (
        <img src={logo} alt={alt} loading="lazy" />
      ) : (
        <span className="org-logo__monogram" aria-hidden="true">
          {monogram}
        </span>
      )}
    </div>
  );
}
