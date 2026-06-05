import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/LOGOS/optomyze-logo.png';

const LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'pt', label: 'PT', name: 'Português' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
];

const ChevronIcon = ({ className = '' }) => (
  <svg className={className} width="11" height="11" viewBox="0 0 12 12" fill="none">
    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const navLink = (pathname, href) =>
  `flex items-center px-3.5 py-2 text-sm rounded-lg transition-all duration-150 ${
    pathname === href ? 'text-cream bg-white/6' : 'text-cream/70 hover:text-cream hover:bg-white/6'
  }`;

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setLangOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const changeLang = (code) => { i18n.changeLanguage(code); setLangOpen(false); };
  const langCode = (i18n.language || 'en').split('-')[0].toLowerCase();
  const currentLang = LANGUAGES.find(l => l.code === langCode) || LANGUAGES[0];

  return (
    <>
      <motion.nav
        className={[
          'fixed top-0 left-0 right-0 z-[1000] h-20 flex items-center px-[clamp(1rem,5vw,3rem)] transition-all duration-300',
          scrolled ? 'bg-site-black/85 backdrop-blur-xl border-b border-purple/10 shadow-[0_4px_32px_rgba(0,0,0,0.3)]' : '',
        ].join(' ')}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center w-full max-w-[1280px] mx-auto gap-8">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Optomyze" style={{ height: '34px', width: 'auto', display: 'block', objectFit: 'contain' }} />
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
            <li>
              <Link to="/" className={navLink(location.pathname, '/')}>{t('nav.home')}</Link>
            </li>
            <li>
              <Link to="/solutions/crm" className={navLink(location.pathname, '/solutions/crm')}>{t('nav.crm')}</Link>
            </li>
            <li>
              <Link to="/plans" className={navLink(location.pathname, '/plans')}>{t('nav.plans')}</Link>
            </li>
            <li>
              <Link to="/blog" className={navLink(location.pathname, '/blog')}>{t('nav.blog')}</Link>
            </li>
            <li>
              <Link to="/contact" className={navLink(location.pathname, '/contact')}>{t('nav.contact')}</Link>
            </li>
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3 ml-auto">

            {/* Language switcher */}
            <div ref={langRef} className="relative block">
              <button
                className="flex items-center gap-1.5 px-3 py-1.5 border border-white/12 rounded-lg text-[11px] font-bold tracking-[0.08em] text-cream/70 hover:text-cream hover:border-purple/40 hover:bg-purple/8 transition-all duration-150 cursor-pointer"
                onClick={() => setLangOpen(v => !v)}
              >
                {currentLang.label}
                <ChevronIcon className={`transition-transform duration-150 opacity-60 ${langOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    className="absolute top-[calc(100%+8px)] right-0 bg-[#140920]/95 backdrop-blur-2xl border border-purple/20 rounded-xl p-2 min-w-[150px] shadow-[0_16px_48px_rgba(0,0,0,0.5)] flex flex-col gap-0.5"
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                  >
                    {LANGUAGES.map(lang => (
                      <button key={lang.code}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs cursor-pointer transition-all duration-150 text-left w-full ${langCode === lang.code ? 'text-purple-light bg-purple/12' : 'text-cream/60 hover:text-cream hover:bg-purple/10'}`}
                        onClick={() => changeLang(lang.code)}
                      >
                        <span className="font-bold tracking-[0.08em]">{lang.label}</span>
                        <span className="font-normal">{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="hidden lg:block">
              <Link to="/contact" className="btn-primary text-[11px] py-1.5 px-4">
                {t('nav.getStarted')}
              </Link>
            </div>

            {/* Burger */}
            <button
              className="flex lg:hidden flex-col gap-[5px] p-1.5 cursor-pointer"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <span className={`block w-[22px] h-0.5 bg-cream rounded-sm origin-center transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`block w-[22px] h-0.5 bg-cream rounded-sm transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-[22px] h-0.5 bg-cream rounded-sm origin-center transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[999] bg-site-black/97 backdrop-blur-2xl flex items-start pt-20"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col gap-1 px-[clamp(1.5rem,6vw,3rem)] py-8 w-full overflow-y-auto max-h-[calc(100vh-80px)]">
              <Link to="/" className="block py-3.5 text-xl font-title text-cream/75 border-b border-white/6 hover:text-cream transition-colors">{t('nav.home')}</Link>
              <Link to="/solutions/crm" className="block py-3.5 text-xl font-title text-cream/75 border-b border-white/6 hover:text-cream transition-colors">{t('nav.crm')}</Link>
              <Link to="/plans" className="block py-3.5 text-xl font-title text-cream/75 border-b border-white/6 hover:text-cream transition-colors">{t('nav.plans')}</Link>
              <Link to="/blog" className="block py-3.5 text-xl font-title text-cream/75 border-b border-white/6 hover:text-cream transition-colors">{t('nav.blog')}</Link>
              <Link to="/contact" className="block py-3.5 text-xl font-title text-cream/75 border-b border-white/6 hover:text-cream transition-colors">{t('nav.contact')}</Link>

              <div className="flex gap-2 mt-6 pt-6 border-t border-white/8">
                {LANGUAGES.map(lang => (
                  <button key={lang.code}
                    className={`px-4 py-2 rounded-full text-[12px] font-bold tracking-[0.08em] border transition-all cursor-pointer ${langCode === lang.code ? 'border-purple text-purple-light bg-purple/12' : 'border-white/15 text-cream/60'}`}
                    onClick={() => changeLang(lang.code)}>
                    {lang.label}
                  </button>
                ))}
              </div>

              <Link to="/contact" className="btn-primary justify-center mt-6">{t('nav.getStarted')}</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
