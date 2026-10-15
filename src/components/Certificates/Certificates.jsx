import { usePreferences } from '../../context/PreferencesContext';
import { certificates } from '../../data/education';
import SectionHeader from '../common/SectionHeader';
import CertificateCard from './CertificateCard';
import './Certificates.css';

export default function Certificates() {
  const { strings } = usePreferences();

  return (
    <section id="certificates" className="section">
      <div className="container">
        <SectionHeader {...strings.sections.certificates} />
        <div className="certs__grid">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
