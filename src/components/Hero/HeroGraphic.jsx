import markUrl from '../../assets/logos/ma-mark.png';

// Decorative "integration map": a central node connected to the platforms she works with.
const nodes = [
  { label: 'Apigee', x: 70, y: 70, color: 'var(--pink)' },
  { label: 'GSB', x: 330, y: 60, color: 'var(--steel)' },
  { label: 'SPFx', x: 360, y: 250, color: 'var(--steel)' },
  { label: 'React', x: 300, y: 420, color: 'var(--pink)' },
  { label: 'GSN', x: 60, y: 400, color: 'var(--steel)' },
  { label: 'REST', x: 40, y: 235, color: 'var(--steel)' },
];
const center = { x: 200, y: 240 };

export default function HeroGraphic() {
  return (
    <svg className="hero-graphic" viewBox="0 0 400 480" role="img" aria-label="Integration map">
      <defs>
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="rgb(255 255 255 / 0.12)" />
        </pattern>
      </defs>
      <rect width="400" height="480" fill="url(#grid)" />

      {nodes.map((n, i) => (
        <path
          key={`l-${n.label}`}
          className="hero-graphic__link"
          d={`M${center.x} ${center.y} Q ${(center.x + n.x) / 2 + (i % 2 ? 30 : -30)} ${(center.y + n.y) / 2} ${n.x} ${n.y}`}
          style={{ animationDelay: `${i * -0.6}s` }}
        />
      ))}

      {nodes.map((n) => (
        <g key={n.label} transform={`translate(${n.x} ${n.y})`}>
          <rect x="-36" y="-17" width="72" height="34" rx="17" fill="#1a2a44" stroke={n.color} strokeWidth="1.5" />
          <circle cx="-22" cy="0" r="4" fill={n.color} />
          <text x="6" y="5" textAnchor="middle" className="hero-graphic__label">
            {n.label}
          </text>
        </g>
      ))}

      <g transform={`translate(${center.x} ${center.y})`}>
        <circle r="62" fill="none" stroke="rgb(255 255 255 / 0.15)" className="hero-graphic__pulse" />
        <circle r="46" fill="#ffffff" />
        <image href={markUrl} x="-27" y="-19" width="54" height="38.5" />
      </g>
    </svg>
  );
}
