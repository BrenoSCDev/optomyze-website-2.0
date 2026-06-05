import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/LOGOS/logo-vertical.png';

const SOLUTIONS = [
  { key: 'crm', path: '/solutions/crm' },
];

const SocialIcon = ({ href, label, children }) => (
  <a href={href} target="_blank" rel="noreferrer" aria-label={label}
    className="flex items-center justify-center w-9 h-9 border border-white/10 rounded-lg text-cream/50 hover:border-purple hover:text-purple-light hover:bg-purple/10 hover:-translate-y-0.5 transition-all duration-300">
    {children}
  </a>
);

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-deep-purple border-t border-purple/15 pt-16 pb-10 overflow-hidden">
      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[300px] bg-[radial-gradient(ellipse_at_bottom,rgba(129,74,185,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">

        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 pb-12">

          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/">
              <img src={logo} alt="Optomyze" style={{ height: '52px', width: 'auto', display: 'block', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
            </Link>
            <p className="text-sm text-cream/50 leading-relaxed max-w-[240px] font-light">{t('footer.tagline')}</p>
            <div className="flex gap-3">
              <SocialIcon href="https://www.instagram.com/optomyze.io/" label="Instagram">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/company/optomyze" label="LinkedIn">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="mailto:contact@optomyze.io" label="Email">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://wa.me/5562995225796" label="WhatsApp">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.14em] uppercase text-cream/40 mb-5 font-body">{t('footer.solutions')}</h4>
              <ul className="flex flex-col gap-3">
                {SOLUTIONS.map(({ key, path }) => (
                  <li key={key}>
                    <Link to={path} className="text-sm font-light text-cream/55 hover:text-cream transition-colors duration-150">{t(`nav.${key}`)}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold tracking-[0.14em] uppercase text-cream/40 mb-5 font-body">{t('footer.company')}</h4>
              <ul className="flex flex-col gap-3">
                <li><Link to="/blog" className="text-sm font-light text-cream/55 hover:text-cream transition-colors duration-150">{t('footer.blog')}</Link></li>
                <li><Link to="/contact" className="text-sm font-light text-cream/55 hover:text-cream transition-colors duration-150">{t('footer.contact')}</Link></li>
                <li><a href="mailto:contact@optomyze.io" className="text-sm font-light text-cream/55 hover:text-cream transition-colors duration-150">contact@optomyze.io</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[11px] font-bold tracking-[0.14em] uppercase text-cream/40 mb-5 font-body">{t('footer.readyToScale')}</h4>
              <p className="text-sm text-cream/50 leading-relaxed mb-5 font-light">{t('footer.joinCompanies')}</p>
              <Link to="/contact" className="btn-primary text-[13px] py-3 px-6">
                {t('common.getStarted')}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple/30 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-cream/35">© {year} Optomyze. {t('footer.rights')}</p>
          <p className="text-xs text-cream/20">{t('footer.madeWith')}</p>
        </div>
      </div>
    </footer>
  );
}
