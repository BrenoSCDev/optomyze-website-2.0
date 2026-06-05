import { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import adsRobot       from '../assets/STATIC-ASSETS/ads_robot.png';
import aiIntegrations from '../assets/STATIC-ASSETS/ai_integrations.png';
import mockup2        from '../assets/CRM-MOCKUPS/MOCKUP-2.jpg';

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

const AdsIcons = {
  crm: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  trend: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
  bar: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  target: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
};

const AiChannelIcons = {
  WhatsApp: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  Instagram: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  Telegram: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
  Email: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  'Web Chat': <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
};

const MediaPlaceholder = ({ icon, label }) => (
  <div className="border border-dashed border-purple/25 rounded-2xl bg-purple/4">
    <div className="flex flex-col items-center justify-center gap-4 py-[clamp(60px,8vw,120px)] px-8 text-center">
      <span className="text-purple/50">{icon}</span>
      <span className="text-sm font-medium text-cream/35">{label}</span>
    </div>
  </div>
);

const PAGE_DATA = {
  design: {
    labelKey: 'design.hero.label',
    titleKey: 'design.hero.title',
    descKey: 'design.hero.description',
    heroImage: mockup2,
    services: ['branding', 'identity', 'creative', 'uiux'],
    servicesPrefix: 'design.services',
    extra: () => (
      <MediaPlaceholder
        icon={<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>}
        label={t('solutions.designPortfolio')}
      />
    ),
  },
  ads: {
    labelKey: 'ads.hero.label',
    titleKey: 'ads.hero.title',
    descKey: 'ads.hero.description',
    heroImage: adsRobot,
    services: null,
    extra: () => (
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t('solutions.adsFeatures', { returnObjects: true }).map((item, i) => {
            const icons = [AdsIcons.crm, AdsIcons.trend, AdsIcons.bar, AdsIcons.target];
            return (
            <motion.div key={i} className="flex gap-4 p-6 bg-white/[0.025] border border-white/7 rounded-2xl hover:border-purple/25 hover:bg-purple/[0.04] transition-all duration-300"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="flex items-center justify-center w-9 h-9 flex-shrink-0 text-purple-light opacity-85">{icons[i]}</span>
              <div>
                <h4 className="text-base font-semibold text-cream mb-1">{item.title}</h4>
                <p className="text-sm text-cream/55 leading-relaxed font-light">{item.desc}</p>
              </div>
            </motion.div>
            );
          })}
        </div>
        <MediaPlaceholder
          icon={<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>}
          label={t('solutions.adVideo')}
        />
      </div>
    ),
  },
  web: {
    labelKey: 'webdev.hero.label',
    titleKey: 'webdev.hero.title',
    descKey: 'webdev.hero.description',
    heroImage: mockup2,
    services: null,
    extra: () => (
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5 max-w-[720px] mx-auto">
          {t('solutions.webServices', { returnObjects: true }).map((item, i) => (
            <motion.div key={i} className="flex gap-6 p-6 border-l-2 border-purple/30 hover:border-purple transition-colors duration-300"
              initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="font-title text-3xl text-purple/35 leading-none flex-shrink-0 w-10">{item.num}</span>
              <div>
                <h4 className="text-lg font-semibold text-cream mb-1">{item.title}</h4>
                <p className="text-sm text-cream/55 leading-relaxed font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <MediaPlaceholder
          icon={<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>}
          label={t('solutions.webPortfolio')}
        />
      </div>
    ),
  },
  ai: {
    labelKey: 'aiagents.hero.label',
    titleKey: 'aiagents.hero.title',
    descKey: 'aiagents.hero.description',
    heroImage: aiIntegrations,
    services: null,
    extra: () => (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-4">
          {t('home.aiSection.channels', { returnObjects: true }).map((channel, i) => (
            <motion.div key={channel}
              className="flex gap-4 p-5 bg-white/[0.025] border border-white/7 rounded-xl hover:border-purple/25 hover:bg-purple/[0.04] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="flex items-center justify-center w-8 h-8 flex-shrink-0 text-purple-light opacity-85">{AiChannelIcons[channel]}</span>
              <div>
                <h4 className="text-base font-semibold text-cream mb-0.5">{channel}</h4>
                <p className="text-sm text-cream/55 font-light">
                  {t(`solutions.aiChannels.${channel === 'Web Chat' ? 'Web Chat' : channel}`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <img src={aiIntegrations} alt="AI Integrations" className="w-4/5 max-w-[380px] animate-float drop-shadow-[0_0_40px_rgba(129,74,185,0.3)]" />
        </div>
      </div>
    ),
  },
  content: {
    labelKey: 'content.hero.label',
    titleKey: 'content.hero.title',
    descKey: 'content.hero.description',
    heroImage: null,
    services: ['scripting', 'research', 'calendar', 'editing', 'storytelling', 'assets'],
    servicesPrefix: 'content.services',
    extra: () => (
      <MediaPlaceholder
        icon={<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>}
        label={t('solutions.contentVideo')}
      />
    ),
  },
};

export default function SolutionPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const data = PAGE_DATA[slug];

  if (!data) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-8 pt-20 text-center px-8 bg-[#0e0814]">
        <h1 className="font-title text-4xl text-cream">{t('solutions.pageNotFound')}</h1>
        <Link to="/" className="btn-primary">{t('common.backHome')}</Link>
      </main>
    );
  }

  return (
    <main>
      {/* HERO */}
      <section className="relative pt-[calc(80px+clamp(60px,8vw,100px))] pb-[clamp(60px,8vw,100px)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0814] via-[#1e0528] to-[#280730] z-0" />
        <div className="absolute inset-0 z-0" style={{ backgroundImage: 'linear-gradient(rgba(129,74,185,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(129,74,185,0.05) 1px, transparent 1px)', backgroundSize: '56px 56px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 100%)' }} />
        <div className="absolute w-[500px] h-96 -top-16 left-1/2 -translate-x-1/2 bg-[#814ab9]/[0.12] rounded-full blur-[80px] animate-pulse-glow pointer-events-none z-0" />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)] flex flex-col items-center text-center gap-6 pb-12">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <span className="label-tag">{t(data.labelKey)}</span>
          </motion.div>
          <motion.h1 className="font-title text-[clamp(2.2rem,5vw,4.5rem)] text-cream max-w-[780px]"
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22,1,0.36,1] }}
          >
            {t(data.titleKey)}
          </motion.h1>
          <motion.p className="text-[clamp(1rem,1.8vw,1.15rem)] text-cream/65 max-w-[580px] font-light"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
          >
            {t(data.descKey)}
          </motion.p>
          <motion.div className="flex gap-4 flex-wrap justify-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.55 }}
          >
            <Link to="/contact" className="btn-primary">{t('common.requestDemo')} <ArrowRight /></Link>
            <Link to="/contact" className="btn-secondary">{t('common.learnMore')}</Link>
          </motion.div>
        </div>

        {data.heroImage && (
          <motion.div className="relative z-10 w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)] mt-8"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.22,1,0.36,1] }}
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/5 h-48 bg-[radial-gradient(ellipse,rgba(129,74,185,0.3)_0%,transparent_70%)] blur-[40px] pointer-events-none" />
            <img src={data.heroImage} alt={t(data.titleKey)}
              className="w-full max-w-[800px] mx-auto block rounded-2xl border border-purple/20 shadow-[0_24px_64px_rgba(0,0,0,0.5)] relative z-10" />
          </motion.div>
        )}
      </section>

      {/* SERVICES */}
      {data.services && (
        <section className="section-padding bg-[#280730]">
          <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">
            <FadeUp className="flex flex-col items-center text-center gap-4 mb-14">
              <span className="label-tag">{t('solutions.whatWeDeliver')}</span>
              <h2 className="font-title text-[clamp(1.8rem,3.5vw,3rem)] text-cream">
                Our {t(data.titleKey)} Services
              </h2>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {data.services.map((key, i) => (
                <motion.div key={key}
                  className="relative flex flex-col gap-4 p-8 bg-white/[0.025] border border-white/7 rounded-[2rem] overflow-hidden hover:border-purple/28 hover:bg-purple/[0.04] transition-all duration-300"
                  initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <span className="text-[12px] font-bold tracking-[0.1em] text-purple-light/70">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-title text-xl text-cream">{t(`${data.servicesPrefix}.${key}.title`)}</h3>
                  <p className="text-sm text-cream/55 leading-[1.7] font-light">{t(`${data.servicesPrefix}.${key}.description`)}</p>
                  <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-[radial-gradient(circle,rgba(129,74,185,0.1)_0%,transparent_70%)] pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* EXTRA */}
      {data.extra && (
        <section className="section-padding bg-[#0e0814]">
          <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">
            {data.extra()}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-[#0e0814] to-layer">
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">
          <FadeUp>
            <div className="relative text-center flex flex-col items-center gap-6 p-[clamp(48px,8vw,96px)] bg-gradient-to-br from-purple/10 to-[#280730]/40 border border-purple/20 rounded-[2rem] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(129,74,185,0.2)_0%,transparent_70%)] pointer-events-none" />
              <h2 className="font-title text-[clamp(1.8rem,3.5vw,3rem)] text-cream relative z-10">
                {t('solutions.ctaSection.heading')}
              </h2>
              <p className="text-base text-cream/60 relative z-10 font-light">{t('solutions.ctaSection.description')}</p>
              <Link to="/contact" className="btn-primary text-[15px] py-4 px-10 relative z-10">
                {t('common.requestDemo')} <ArrowRight />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
