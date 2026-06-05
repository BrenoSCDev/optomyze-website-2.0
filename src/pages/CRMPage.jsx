import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';

import mockupHero      from '../assets/CRM-MOCKUPS/MOCKUP-HERO.jpg';
import overviewVideo   from '../assets/VIDEOS/astros-dancing.mp4';
import upcomingVideo   from '../assets/VIDEOS/astros-solutions.mp4';
import ctaVideo        from '../assets/VIDEOS/astro.mp4';
import manyScreens  from '../assets/CRM-MOCKUPS/MOCKUP-MANY-SCREENS.jpg';
import ssDashboard  from '../assets/CRM-SCREENSHOTS/CRM-DASHBOARD.png';
import ssDashboard2 from '../assets/CRM-SCREENSHOTS/CRM-DASHBOARD-2.png';
import ssFunnel     from '../assets/CRM-SCREENSHOTS/CRM-SALES-FUNNEL.png';
import ssDealFunnel from '../assets/CRM-SCREENSHOTS/CRM-DEALS-FUNNEL.png';
import ssWhatsapp1  from '../assets/CRM-SCREENSHOTS/CRM-WhatsApp-Inbox-01.png';
import ssWhatsapp2  from '../assets/CRM-SCREENSHOTS/CRM-WhatsApp-Inbox-02.png';
import ssWhatsapp3  from '../assets/CRM-SCREENSHOTS/CRM-WhatsApp-Inbox-03.png';

import ssRevenue    from '../assets/CRM-SCREENSHOTS/CRM-REVENUE-DASHBOARD.png';
import ssLeads      from '../assets/CRM-SCREENSHOTS/CRM-LEADS-DETAILS.png';
import ssGoogle     from '../assets/CRM-SCREENSHOTS/CRM-GOOGLE-ADS-DASHBOARD.png';
import ssMeta       from '../assets/CRM-SCREENSHOTS/CRM-META-ADS-DASHBOARD.png';
import ssOptusAI    from '../assets/CRM-SCREENSHOTS/CRM-Optus-AI.png';
import ssCalendar   from '../assets/CRM-SCREENSHOTS/CRM-Calendar.png';


const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}


const FEATURE_ICONS = {
  pipeline: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg>,
  whatsapp: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  leads:    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  billing:  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  ai:       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg>,
  adtech:   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
  calendar: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
};

const FEATURES = [
  { key: 'pipeline',   ss: ssFunnel,    ssAlt: 'Sales Pipeline' },
  { key: 'whatsapp',   ss: ssWhatsapp1, ssAlt: 'WhatsApp CRM' },
  { key: 'leads',      ss: ssLeads,     ssAlt: 'Lead Details' },
  { key: 'billing',    ss: ssRevenue,   ssAlt: 'Revenue Dashboard' },
  { key: 'ai',         ss: ssOptusAI,   ssAlt: 'Optus AI' },
  { key: 'adtech',     ss: ssGoogle,    ssAlt: 'Google Ads Dashboard' },
  { key: 'calendar',   ss: ssCalendar,  ssAlt: 'CRM Calendar' },
];

export default function CRMPage() {
  const { t } = useTranslation();

  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative pt-[calc(80px+clamp(50px,7vw,90px))] pb-[clamp(60px,8vw,100px)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0814] via-[#1e0528] to-[#280730] z-0" />
        <div className="absolute inset-0 z-0" style={{ backgroundImage: 'linear-gradient(rgba(129,74,185,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(129,74,185,0.05) 1px, transparent 1px)', backgroundSize: '56px 56px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 100%)' }} />
        <div className="absolute w-[600px] h-[400px] -top-20 left-1/4 bg-[#814ab9]/[0.1] rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-20 items-center">

            {/* Left — text */}
            <div className="flex flex-col gap-7">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <span className="label-tag">{t('crm.hero.label')}</span>
              </motion.div>
              <motion.h1
                className="font-title text-[clamp(2.4rem,4.5vw,4.5rem)] text-cream leading-[1.06] tracking-[-0.02em]"
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {t('crm.hero.title')}
              </motion.h1>
              <motion.p
                className="text-base text-cream/55 font-light leading-[1.8] max-w-[480px]"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.35 }}
              >
                {t('crm.hero.description')}
              </motion.p>
              <motion.div className="flex gap-4 flex-wrap"
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.5 }}
              >
                <Link to="/contact" className="btn-primary">{t('crm.cta.btn')} <ArrowRight /></Link>
                <a href="#features" className="btn-secondary">{t('common.learnMore')}</a>
              </motion.div>
            </div>

            {/* Right — mockup */}
            <motion.div className="relative"
              initial={{ opacity: 0, y: 40, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute -inset-8 bg-[radial-gradient(ellipse,rgba(129,74,185,0.25)_0%,transparent_65%)] blur-[40px] pointer-events-none" />
              <img src={mockupHero} alt="Optomyze CRM"
                className="w-full rounded-2xl border border-purple/20 shadow-[0_24px_80px_rgba(0,0,0,0.55),0_0_60px_rgba(129,74,185,0.12)] relative z-10" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center sm:min-h-[100vh]">
        <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay muted loop playsInline src={overviewVideo} />
        <div className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(180deg, rgba(14,8,20,0.85) 0%, rgba(40,7,48,0.72) 50%, rgba(14,8,20,0.90) 100%)', backdropFilter: 'blur(2px)' }} />
        <div className="absolute inset-0 z-[2] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(129,74,185,0.12) 0%, transparent 70%)' }} />

        <div className="relative z-10 w-full max-w-[860px] mx-auto px-[clamp(1rem,5vw,3rem)] flex flex-col items-center text-center gap-8">
          <FadeUp className="flex flex-col items-center gap-5">
            <span className="label-tag">{t('crm.overview.label')}</span>
            <h2 className="font-title text-[clamp(2.4rem,5.5vw,5rem)] text-cream leading-[1.06] tracking-[-0.02em]">
              {t('crm.overview.heading')}
            </h2>
          </FadeUp>

          <motion.div className="flex flex-col items-center gap-3"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-sm tracking-[0.18em] uppercase text-cream/50 font-medium">
              {t('hero.scrollIndicator')}
            </p>
            <div className="w-px h-14 bg-gradient-to-b from-purple/50 to-transparent animate-scroll-line" />
          </motion.div>
        </div>
      </section>

      {/* ── MANY SCREENS ── */}
      <section className="section-padding bg-[#0e0814] overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">
          <FadeUp className="relative text-center">
            <div className="absolute inset-[-30px] bg-[radial-gradient(ellipse,rgba(129,74,185,0.2)_0%,transparent_65%)] blur-[40px] pointer-events-none" />
            <img src={manyScreens} alt="Optomyze CRM Multi-Screen"
              className="w-full max-w-[900px] mx-auto rounded-2xl border border-purple/20 shadow-[0_24px_64px_rgba(0,0,0,0.5)] relative z-10" />
          </FadeUp>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section-padding bg-[#0e0814] overflow-hidden" id="features">
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">
          <FadeUp className="flex flex-col items-center text-center gap-4 mb-16">
            <span className="label-tag">Features</span>
            <h2 className="font-title text-[clamp(1.8rem,3.5vw,3rem)] text-cream">
              {t('crm.featuresHeading')}
            </h2>
          </FadeUp>

          <div className="flex flex-col gap-[clamp(60px,10vw,120px)]">
            {FEATURES.map(({ key, ss, ssAlt }, i) => (
              <motion.div key={key}
                className={`grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
              >
                <div className="flex flex-col gap-5">
                  <h3 className="font-title text-[clamp(1.5rem,3vw,2.4rem)] text-cream">{t(`crm.features.${key}.title`)}</h3>
                  <p className="text-base text-cream/60 leading-[1.75] font-light">{t(`crm.features.${key}.description`)}</p>
                  <Link to="/contact" className="btn-secondary self-start">{t('common.requestDemo')}</Link>
                </div>

                <div className="relative">
                  <div className="absolute inset-[-20px] bg-[radial-gradient(ellipse,rgba(129,74,185,0.18)_0%,transparent_65%)] blur-[20px] pointer-events-none" />
                  <img src={ss} alt={ssAlt}
                    className="w-full rounded-2xl border border-purple/18 shadow-[0_16px_48px_rgba(0,0,0,0.45)] relative z-10 hover:scale-[1.02] hover:shadow-[0_24px_64px_rgba(0,0,0,0.55),0_0_40px_rgba(129,74,185,0.2)] transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPCOMING FEATURES ── */}
      <section className="relative section-padding overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay muted loop playsInline src={upcomingVideo} />
        <div className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(180deg, rgba(14,8,20,0.92) 0%, rgba(40,7,48,0.85) 50%, rgba(14,8,20,0.94) 100%)', backdropFilter: 'blur(1px)' }} />
        <div className="absolute inset-0 z-[2] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(129,74,185,0.08) 0%, transparent 70%)' }} />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">
          <FadeUp className="flex flex-col items-center text-center gap-4 mb-14">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-purple-light/70">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-light animate-pulse-glow inline-block" />
              {t('crm.upcoming.label')}
            </span>
            <h2 className="font-title text-[clamp(1.8rem,3.5vw,3rem)] text-cream">{t('crm.upcoming.heading')}</h2>
            <p className="text-base text-cream/55 max-w-[480px] font-light">{t('crm.upcoming.description')}</p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
            {t('crm.upcoming.items', { returnObjects: true }).map((item, i) => {
              const num = String(i + 1).padStart(2, '0');
              const inDev = item.status === 'dev';
              const delays = [0, 0.12, 0.06, 0.2, 0.08, 0.16];
              return (
                <motion.div key={item.title}
                  className="relative flex flex-col gap-4 p-7 rounded-2xl overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
                  initial={{ opacity: 0, y: 36, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.65, delay: delays[i], ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -7, scale: 1.015,
                    border: '1px solid rgba(129,74,185,0.3)',
                    background: 'rgba(129,74,185,0.04)',
                    transition: { duration: 0.22 }
                  }}
                >
                  {/* ghost number */}
                  <span className="absolute -bottom-4 -right-1 font-title leading-none select-none pointer-events-none"
                    style={{ fontSize: 'clamp(4rem,7vw,6rem)', color: 'rgba(255,255,255,0.035)' }}>
                    {num}
                  </span>

                  {/* status badge */}
                  <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.14em] uppercase w-fit ${inDev ? 'text-emerald-400/70' : 'text-purple-light/50'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${inDev ? 'bg-emerald-400/70 animate-pulse' : 'bg-purple-light/40'}`} />
                    {inDev ? t('crm.upcoming.statusDev') : t('crm.upcoming.statusPlanned')}
                  </span>

                  <h3 className="font-title text-[1.1rem] text-cream leading-snug relative z-10">{item.title}</h3>
                  <p className="text-[13px] text-cream/40 leading-[1.75] font-light relative z-10">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '520px' }}>
        <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay muted loop playsInline src={ctaVideo} />
        <div className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(160deg, rgba(14,8,20,0.88) 0%, rgba(40,7,48,0.80) 50%, rgba(14,8,20,0.92) 100%)', backdropFilter: 'blur(6px)' }} />
        <div className="absolute inset-0 z-[2] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(129,74,185,0.15) 0%, transparent 70%)' }} />

        <div className="relative z-10 section-padding w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)] flex items-center justify-center">
          <FadeUp className="text-center flex flex-col items-center gap-6 max-w-[620px]">
            <span className="label-tag">{t('crm.cta.btn')}</span>
            <h2 className="font-title text-[clamp(2rem,4vw,3.5rem)] text-cream leading-[1.06] tracking-[-0.02em]">{t('crm.cta.title')}</h2>
            <p className="text-base text-cream/60 font-light leading-[1.8]">{t('crm.cta.description')}</p>
            <Link to="/contact" className="btn-primary text-[15px] py-4 px-10 mt-2">{t('crm.cta.btn')} <ArrowRight /></Link>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
