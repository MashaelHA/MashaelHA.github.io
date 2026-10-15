import { usePreferences } from '../../context/PreferencesContext';
import { ArrowIcon, DownloadIcon, FileIcon } from '../common/Icons';

export default function CertificateCard({ cert }) {
  const { t, strings } = usePreferences();
  const { labels } = strings;

  return (
    <article className="cert-card reveal">
      {cert.file ? (
        <a className="cert-card__preview" href={cert.file} target="_blank" rel="noopener noreferrer" aria-label={`${labels.view}: ${t(cert.title)}`}>
          <img src={cert.thumb} alt="" loading="lazy" />
          <span className="cert-card__type">{cert.file.endsWith('.pdf') ? 'PDF' : 'IMG'}</span>
        </a>
      ) : (
        <div className="cert-card__preview cert-card__preview--empty" aria-hidden="true">
          <FileIcon width={32} height={32} />
        </div>
      )}

      <div className="cert-card__body">
        <p className="cert-card__issuer">{t(cert.issuer)}</p>
        <h3 className="cert-card__title">{t(cert.title)}</h3>
        <p className="cert-card__date">{t(cert.date)}</p>
      </div>

      {(cert.file || cert.verify) && (
        <div className="cert-card__actions">
          {cert.file && (
            <>
              <a href={cert.file} target="_blank" rel="noopener noreferrer" className="cert-card__btn">
                {labels.view}
                <ArrowIcon width={14} height={14} className="flip-rtl" />
              </a>
              <a href={cert.file} download className="cert-card__btn cert-card__btn--icon" aria-label={labels.download} title={labels.download}>
                <DownloadIcon width={16} height={16} />
              </a>
            </>
          )}
          {cert.verify && (
            <a href={cert.verify} target="_blank" rel="noopener noreferrer" className="cert-card__btn cert-card__btn--ghost">
              {labels.verify}
            </a>
          )}
        </div>
      )}
    </article>
  );
}
