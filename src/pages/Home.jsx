import { useRef, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const Spline = lazy(() => import('@splinetool/react-spline'));

import heroMockup      from '../assets/CRM-MOCKUPS/MOCKUP-HERO.jpg';
import logoIcon        from '../assets/LOGOS/icone-branco.png';
import adsRobot        from '../assets/STATIC-ASSETS/ads_robot.png';
import aiIntegrations  from '../assets/STATIC-ASSETS/ai_integrations.png';
import designShowcase  from '../assets/STATIC-ASSETS/design-showcase.png';
import webDevImage     from '../assets/STATIC-ASSETS/web-dev.png';
import contentAgent    from '../assets/STATIC-ASSETS/content-agent.png';
import astrosWorkingVideo  from '../assets/VIDEOS/astros-working.mp4';
import solutionsBgVideo   from '../assets/VIDEOS/astro-thumbs-up.mp4';
import astroVideo      from '../assets/VIDEOS/astro.mp4';

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}

export default function Home() {
  const { t } = useTranslation();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const spotlightFeatures = t('home.spotlight.features', { returnObjects: true });
  const aiChannels = t('home.aiSection.channels', { returnObjects: true });

  return (
    <main>

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative flex items-center justify-center pt-20 overflow-hidden sm:min-h-[min(90vh,800px)]">
        <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay muted loop playsInline src={astroVideo} />
        <div className="absolute inset-0 z-[1] backdrop-blur-[8px]"
          style={{ background: 'linear-gradient(160deg, rgba(14,8,20,0.72) 0%, rgba(40,7,48,0.65) 50%, rgba(14,8,20,0.78) 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-32 z-[2]"
          style={{ background: 'linear-gradient(to bottom, transparent, #0e0814)' }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 flex flex-col items-start text-left px-[clamp(1.5rem,6vw,4rem)] py-[clamp(80px,10vw,140px)] gap-8 w-full max-w-[1280px] mx-auto">

          <motion.h1
            className="font-title text-[clamp(2rem,4.5vw,4.2rem)] leading-[1.1] text-cream tracking-[-0.02em] max-w-[620px]"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {t('hero.subtitle')}
          </motion.h1>

          <motion.p
            className="text-sm text-cream/50 max-w-[400px] font-light leading-[1.8]"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52 }}
          >
            <Link to="/solutions/crm" className="btn-primary text-[15px] py-4 px-9">
              {t('hero.cta')} <ArrowRight />
            </Link>
            <Link to="/contact" className="btn-secondary">{t('common.requestDemo')}</Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section-padding bg-[#0e0814] overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-7">
              <FadeUp><span className="label-tag">{t('about.label')}</span></FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="font-title text-[clamp(2rem,4vw,3.4rem)] text-cream leading-[1.08]">
                  {t('about.title')}
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-lg text-cream/55 max-w-[480px] font-light leading-[1.8]">{t('about.description')}</p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <div className="flex gap-3">
                  <Link to="/contact" className="btn-primary self-start">{t('common.getStarted')}</Link>
                  <Link to="/solutions/crm" className="btn-secondary self-start">{t('home.seeCrm')}</Link>
                </div>
              </FadeUp>
            </div>

            <div className="flex flex-col gap-8">
              <FadeUp delay={0.15}>
                <div className="relative w-full rounded-2xl" style={{ height: '520px', overflow: 'hidden' }}>
                  <Suspense fallback={<div className="w-full h-full rounded-2xl bg-purple/10 animate-pulse" />}>
                    <Spline scene="https://prod.spline.design/YYOPBHjEL4AzaZc7/scene.splinecode" />
                  </Suspense>
                </div>
              </FadeUp>

              <FadeUp delay={0.25}>
                <div className="flex items-center gap-10 pt-6 border-t border-white/[0.07]">
                  {['stat1', 'stat2', 'stat3'].map((key, i) => (
                    <div key={key} className="flex items-center gap-10">
                      {i > 0 && <div className="w-px h-10 bg-white/[0.08] flex-shrink-0" />}
                      <motion.div className="flex flex-col gap-0.5"
                        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <span className="font-title text-[clamp(1.8rem,3vw,2.6rem)] text-cream leading-none tracking-[-0.03em]">{t(`about.${key}.value`)}</span>
                        <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-cream/35">{t(`about.${key}.label`)}</span>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR SOLUTIONS ── */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center sm:min-h-[100vh]">
        {/* Video — replace src when new video is ready */}
        <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay muted loop playsInline src={solutionsBgVideo} />
        <div className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(180deg, rgba(14,8,20,0.85) 0%, rgba(40,7,48,0.72) 50%, rgba(14,8,20,0.90) 100%)', backdropFilter: 'blur(2px)' }} />
        <div className="absolute inset-0 z-[2] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(129,74,185,0.12) 0%, transparent 70%)' }} />

        <div className="relative z-10 w-full max-w-[900px] mx-auto px-[clamp(1rem,5vw,3rem)] flex flex-col items-center text-center gap-16">

          {/* Header */}
          <FadeUp className="flex flex-col items-center gap-4">
            <span className="label-tag">{t('solutions.label')}</span>
            <h2 className="font-title text-[clamp(2.2rem,4.5vw,4rem)] text-cream leading-[1.06]">
              {t('solutions.title')}
            </h2>
          </FadeUp>

          {/* Solution list */}
          <div className="w-full flex flex-col">
            {['crm', 'design', 'ads', 'web', 'ai', 'content'].map((key, i) => (
              <motion.div key={key}
                className="group flex items-center justify-between py-3.5 border-b border-white/[0.07] hover:border-purple/25 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <div className="flex items-center gap-5">
                  <span className="text-[10px] font-bold tracking-[0.1em] text-purple-light/35 w-5 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Link to={key === 'crm' ? '/solutions/crm' : '/contact'}
                    className="font-body font-medium text-[clamp(1.05rem,1.8vw,1.35rem)] text-cream/75 group-hover:text-cream transition-colors duration-200">
                    {t(`solutions.items.${key}.title`)}
                  </Link>
                </div>
                <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-cream/25 group-hover:text-purple-light/70 transition-colors duration-200 hidden sm:block">
                  {t(`solutions.items.${key}.subtitle`)}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Scroll nudge */}
          <motion.div className="flex flex-col items-center gap-3"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-sm tracking-[0.18em] uppercase text-cream/50 font-medium">
              {t('hero.scrollIndicator')}
            </p>
            <div className="w-px h-14 bg-gradient-to-b from-purple/50 to-transparent animate-scroll-line" />
          </motion.div>
        </div>
      </section>

      {/* ── CRM SPOTLIGHT ── */}
      <section className="section-padding bg-cream overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-16 items-center">
            <FadeUp className="flex flex-col gap-7">
              <span className="label-tag-light">{t('home.spotlight.label')}</span>
              <h2 className="font-title text-[clamp(1.8rem,3.5vw,3.2rem)] text-[#121112] leading-[1.08]">
                {t('home.spotlight.heading')}
              </h2>
              <p className="text-base text-[#121112]/60 leading-[1.8] font-light max-w-[440px]">
                {t('home.spotlight.description')}
              </p>
              <ul className="flex flex-col gap-3">
                {spotlightFeatures.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[#121112]/70">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link to="/solutions/crm" className="btn-primary">{t('home.spotlight.explore')} <ArrowRight /></Link>
                <Link to="/contact" className="btn-secondary-dark">{t('common.requestDemo')}</Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.15} className="relative">
              <div className="absolute inset-[-20px] opacity-30"
                style={{ background: 'radial-gradient(ellipse, rgba(129,74,185,0.25) 0%, transparent 65%)', filter: 'blur(30px)', borderRadius: '50%' }} />
              <img src={heroMockup} alt="CRM Dashboard"
                className="w-full rounded-2xl shadow-[0_20px_60px_rgba(40,7,48,0.2)] relative z-10 border border-[#280730]/8" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── DESIGN & BRAND ── */}
      <section className="section-padding bg-[#0e0814] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 40% at 70% 50%, rgba(40,7,48,0.6) 0%, transparent 70%)' }} />
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">

            {/* Image — left */}
            <FadeUp delay={0.1} className="relative order-2 lg:order-1">
              <div className="absolute inset-[-30px] rounded-[2rem] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(129,74,185,0.15) 0%, transparent 65%)', filter: 'blur(40px)' }} />
              <img
                src={designShowcase}
                alt="Design & Brand Identity"
                className="w-full rounded-2xl relative z-10"
                style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}
              />
            </FadeUp>

            {/* Text — right */}
            <FadeUp className="flex flex-col gap-7 order-1 lg:order-2">
              <span className="label-tag">{t('design.hero.label')}</span>
              <h2 className="font-title text-[clamp(1.8rem,3.5vw,3.2rem)] text-cream leading-[1.08]">
                {t('design.hero.title')}
              </h2>
              <p className="text-base text-cream/55 font-light leading-[1.8] max-w-[440px]">
                {t('design.hero.description')}
              </p>
              <ul className="flex flex-col gap-3">
                {['branding', 'identity', 'creative', 'uiux'].map(key => (
                  <li key={key} className="flex items-center gap-3 text-sm text-cream/65">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-light flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                    {t(`design.services.${key}.title`)}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary self-start">
                {t('common.getStarted')} <ArrowRight />
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── AI AGENTS ── */}
      <section className="section-padding bg-[#0e0814] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 30% 50%, rgba(40,7,48,0.6) 0%, transparent 70%)' }} />
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp delay={0.1} className="flex justify-center lg:order-1 order-2">
              <div className="relative">
                <div className="absolute inset-[-40px] rounded-full"
                  style={{ background: 'radial-gradient(ellipse, rgba(129,74,185,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }} />
                <img src={aiIntegrations} alt="AI Integrations"
                  className="w-4/5 max-w-[400px] mx-auto relative z-10 animate-float"
                  style={{ filter: 'drop-shadow(0 0 30px rgba(129,74,185,0.25))' }} />
              </div>
            </FadeUp>

            <FadeUp className="flex flex-col gap-6 lg:order-2 order-1">
              <span className="label-tag">{t('home.aiSection.label')}</span>
              <h2 className="font-title text-[clamp(1.8rem,3.5vw,3rem)] text-cream leading-[1.08]">{t('home.aiSection.heading')}</h2>
              <p className="text-base text-cream/55 font-light leading-[1.8]">{t('home.aiSection.description')}</p>
              <div className="flex flex-wrap gap-2">
                {aiChannels.map(ch => (
                  <span key={ch} className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-lg text-xs font-semibold text-white/50 tracking-[0.04em]">{ch}</span>
                ))}
              </div>
              <Link to="/contact" className="btn-primary self-start">{t('home.aiSection.explore')} <ArrowRight /></Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── ADS ── */}
      <section className="section-padding bg-cream overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp className="flex flex-col gap-7">
              <span className="label-tag-light">{t('home.adsSection.label')}</span>
              <h2 className="font-title text-[clamp(1.8rem,3.5vw,3rem)] text-[#121112] leading-[1.08]">
                {t('home.adsSection.heading')}
              </h2>
              <p className="text-base text-[#121112]/60 font-light leading-[1.8]">{t('home.adsSection.description')}</p>
              <div className="flex gap-3 flex-wrap">
                <Link to="/contact" className="btn-primary">{t('home.adsSection.explore')} <ArrowRight /></Link>
                <Link to="/contact" className="btn-secondary-dark">{t('common.requestDemo')}</Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.15} className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-[-30px] rounded-full opacity-40"
                  style={{ background: 'radial-gradient(ellipse, rgba(129,74,185,0.2) 0%, transparent 65%)', filter: 'blur(30px)' }} />
                <img src={adsRobot} alt="AI Ads Management"
                  className="w-4/5 max-w-[420px] mx-auto block relative z-10 animate-float"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(40,7,48,0.15))' }} />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── WEB DEVELOPMENT ── */}
      <section className="section-padding bg-[#0e0814] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 40% at 30% 50%, rgba(40,7,48,0.6) 0%, transparent 70%)' }} />
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp className="flex flex-col gap-7">
              <span className="label-tag">{t('home.webSection.label')}</span>
              <h2 className="font-title text-[clamp(1.8rem,3.5vw,3rem)] text-cream leading-[1.08]">
                {t('home.webSection.heading')}
              </h2>
              <p className="text-base text-cream/55 font-light leading-[1.8]">{t('home.webSection.description')}</p>
              <ul className="flex flex-col gap-3">
                {t('home.webSection.features', { returnObjects: true }).map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-cream/65">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-light flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary self-start">{t('home.webSection.explore')} <ArrowRight /></Link>
            </FadeUp>

            <FadeUp delay={0.15} className="relative">
              <div className="absolute inset-[-20px] opacity-25 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(129,74,185,0.3) 0%, transparent 65%)', filter: 'blur(40px)', borderRadius: '50%' }} />
              <img src={webDevImage} alt="Web Development"
                className="w-full rounded-2xl relative z-10"
                style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }} />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CONTENT & SOCIAL MEDIA ── */}
      <section className="section-padding bg-cream overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp delay={0.15} className="flex justify-center lg:order-2 order-2 relative">
              <div className="absolute inset-[-30px] rounded-full opacity-40 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(129,74,185,0.2) 0%, transparent 65%)', filter: 'blur(30px)' }} />
              <img src={contentAgent} alt="Content & Social Media"
                className="w-full max-w-[500px] mx-auto block relative z-10 animate-float"
                style={{ filter: 'drop-shadow(0 0 20px rgba(40,7,48,0.15))' }} />
            </FadeUp>

            <FadeUp className="flex flex-col gap-7 lg:order-1 order-1">
              <span className="label-tag-light">{t('home.contentSection.label')}</span>
              <h2 className="font-title text-[clamp(1.8rem,3.5vw,3rem)] text-[#121112] leading-[1.08]">
                {t('home.contentSection.heading')}
              </h2>
              <p className="text-base text-[#121112]/60 font-light leading-[1.8]">{t('home.contentSection.description')}</p>
              <ul className="flex flex-col gap-3">
                {t('home.contentSection.services', { returnObjects: true }).map(s => (
                  <li key={s} className="flex items-center gap-3 text-sm text-[#121112]/70">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                    {s}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link to="/contact" className="btn-primary">{t('home.contentSection.explore')} <ArrowRight /></Link>
                <Link to="/contact" className="btn-secondary-dark">{t('common.requestDemo')}</Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden" style={{ paddingTop: 'clamp(80px,10vw,160px)', paddingBottom: 'clamp(80px,10vw,160px)' }}>
        {/* Full-bleed video */}
        <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay muted loop playsInline src={astrosWorkingVideo} />
        {/* Purple-tinted dark overlay — heavy left, lighter right so video breathes */}
        <div className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(105deg, rgba(14,8,20,0.92) 0%, rgba(40,7,48,0.78) 55%, rgba(14,8,20,0.6) 100%)', backdropFilter: 'blur(2px)' }} />
        {/* Purple atmospheric glow mid-frame */}
        <div className="absolute inset-0 z-[2] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 30% 50%, rgba(129,74,185,0.18) 0%, transparent 70%)' }} />

        <FadeUp className="relative z-10 w-full max-w-[1280px] mx-auto px-[clamp(1.5rem,6vw,4rem)]">
          <div className="flex flex-col gap-7 max-w-[640px]">
            <span className="label-tag">{t('common.getStarted')}</span>
            <h2 className="font-title text-[clamp(2.2rem,4.5vw,4rem)] text-cream leading-[1.05]">
              {t('home.ctaSection.heading')}
            </h2>
            <p className="text-base text-cream/65 max-w-[480px] font-light leading-[1.8]">
              {t('home.ctaSection.description')}
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/contact" className="btn-primary text-[15px] py-4 px-9">{t('common.requestDemo')} <ArrowRight /></Link>
              <Link to="/solutions/crm" className="btn-secondary">{t('home.ctaSection.exploreCrm')}</Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
