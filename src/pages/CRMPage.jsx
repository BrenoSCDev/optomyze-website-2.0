import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { SiGoogleads, SiMeta } from 'react-icons/si';

import overviewVideo from '../assets/VIDEOS/astros-dancing.mp4';
import upcomingVideo from '../assets/VIDEOS/astros-solutions.mp4';
import ctaVideo      from '../assets/VIDEOS/astro.mp4';

// Hero
import heroMockup from '../assets/CRM-MOCKUPS/CRM-HERO.jpeg';

// Platform at a Glance
import manyScreensMockup from '../assets/CRM-MOCKUPS/LIGHT-MU-1.jpeg';

// Unified Multi-Channel Inbox (WhatsApp dark + Instagram light, mixed for contrast)
import inboxWpp from '../assets/CRM-SCREENSHOTS/crm-dark-mode/crm-optomyze-conversation-wpp.png';
import inboxIg  from '../assets/CRM-SCREENSHOTS/crm-light-mode/crm-optomyze-crm-conversation-ig.png';

// Pipeline & Deal Management (light)
import pipelineShot from '../assets/CRM-SCREENSHOTS/crm-light-mode/crm-optomyze-sales-funnel.png';
import dealFunnelShot from '../assets/CRM-SCREENSHOTS/crm-light-mode/crm-optomyze-deals-funnel.png';

// Reporting & Analytics (dark)
import analyticsMain          from '../assets/CRM-SCREENSHOTS/crm-dark-mode/crm-optomyze-metrics-1.png';
import analyticsRevenue       from '../assets/CRM-SCREENSHOTS/crm-dark-mode/crm-optomyze-metrics-revenue.png';
import analyticsConversations from '../assets/CRM-SCREENSHOTS/crm-dark-mode/crm-optomyze-metrics-conversations.png';

// Marketing & Ad Tech (light)
import adtechGoogle from '../assets/CRM-SCREENSHOTS/crm-light-mode/crm-optomyze-meta-ads-2.png';
import adtechMeta   from '../assets/CRM-SCREENSHOTS/crm-light-mode/crm-optomyze-meta-ads-1.png';
import adtechMeta3  from '../assets/CRM-SCREENSHOTS/crm-light-mode/crm-optomyze-meta-ads-3.png';

// Customer Management (dark)
import leadDetailsShot from '../assets/CRM-SCREENSHOTS/crm-light-mode/crm-optomyze-lead-details.png';

// Scheduling & Calendar (light)
import calendarShot from '../assets/CRM-SCREENSHOTS/crm-light-mode/crm-optomyze-crm-calendar.png';


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

function FramedShot({ src, alt, glow = 'rgba(129,74,185,0.18)' }) {
  return (
    <div className="relative">
      <div className="absolute inset-[-20px] rounded-[2rem] pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${glow} 0%, transparent 65%)`, filter: 'blur(20px)' }} />
      <img src={src} alt={alt}
        className="w-full rounded-2xl border border-purple/18 shadow-[0_16px_48px_rgba(0,0,0,0.45)] relative z-10 hover:scale-[1.015] transition-all duration-500" />
    </div>
  );
}

export default function CRMPage() {
  const { t } = useTranslation();

  const pipelineStages = t('crm.pipeline.stages', { returnObjects: true });
  const inboxPoints = t('crm.inbox.points', { returnObjects: true });
  const customerPoints = t('crm.customer.points', { returnObjects: true });

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
                <a href="#glance" className="btn-secondary">{t('common.learnMore')}</a>
              </motion.div>
            </div>

            {/* Right — screenshot */}
            <motion.div className="relative"
              initial={{ opacity: 0, y: 40, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute -inset-8 bg-[radial-gradient(ellipse,rgba(129,74,185,0.25)_0%,transparent_65%)] blur-[40px] pointer-events-none" />
              <img src={heroMockup} alt="Optomyze CRM"
                className="w-full rounded-2xl border border-purple/20 shadow-[0_24px_80px_rgba(0,0,0,0.55),0_0_60px_rgba(129,74,185,0.12)] relative z-10" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── OVERVIEW / SCROLL CUE ── */}
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

      {/* ── PLATFORM AT A GLANCE (light, grid mosaic) ── */}
      <section className="section-padding bg-cream overflow-hidden" id="glance">
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">
          <FadeUp className="flex flex-col items-center text-center gap-4 mb-14 max-w-[640px] mx-auto">
            <span className="label-tag-light">{t('crm.glance.label')}</span>
            <h2 className="font-title text-[clamp(1.8rem,3.5vw,3rem)] text-[#121112] leading-[1.1]">{t('crm.glance.heading')}</h2>
            <p className="text-base text-[#121112]/60 font-light leading-[1.7]">{t('crm.glance.description')}</p>
          </FadeUp>

          <FadeUp delay={0.1} className="relative">
            <div className="absolute inset-[-30px] bg-[radial-gradient(ellipse,rgba(129,74,185,0.12)_0%,transparent_65%)] blur-[40px] pointer-events-none" />
            <img src={manyScreensMockup} alt="Optomyze CRM Multi-Screen"
              className="w-full max-w-[900px] mx-auto rounded-2xl border border-[#121112]/10 shadow-[0_24px_64px_rgba(0,0,0,0.18)] relative z-10" />
          </FadeUp>
        </div>
      </section>

      {/* ── UNIFIED MULTI-CHANNEL INBOX (dark, flagship, full-width) ── */}
      <section className="section-padding bg-[#0e0814] overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)] flex flex-col gap-16">

          <FadeUp className="flex flex-col items-center text-center gap-5 max-w-[700px] mx-auto">
            <span className="label-tag">{t('crm.inbox.label')}</span>
            <h2 className="font-title text-[clamp(1.8rem,3.5vw,3rem)] text-cream leading-[1.08]">{t('crm.inbox.heading')}</h2>
            <p className="text-base text-cream/55 font-light leading-[1.8]">{t('crm.inbox.description')}</p>
            <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6 flex-wrap justify-center">
              {inboxPoints.map(point => (
                <li key={point} className="flex items-center gap-2.5 text-sm text-cream/65">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-light flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  {point}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary mt-2">{t('common.requestDemo')}</Link>
          </FadeUp>

          <FadeUp delay={0.15} className="relative flex items-start justify-center px-4 sm:px-10 pb-6 sm:pb-12">
            <div className="w-[56%] max-w-[560px] relative z-10">
              <FramedShot src={inboxIg} alt="Instagram conversation in Optomyze CRM (light mode)" glow="rgba(129,74,185,0.14)" />
            </div>
            <div className="w-[56%] max-w-[560px] -ml-16 sm:-ml-24 mt-16 sm:mt-24 relative z-0">
              <FramedShot src={inboxWpp} alt="WhatsApp conversation in Optomyze CRM" />
            </div>
          </FadeUp>

        </div>
      </section>

      {/* ── PIPELINE & DEAL MANAGEMENT (light) ── */}
      <section className="section-padding bg-cream overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)] flex flex-col lg:flex-row items-center gap-12 lg:gap-10">

          <FadeUp className="flex flex-col gap-5 w-full lg:w-[540px] lg:flex-shrink-0">
            <span className="label-tag-light">{t('crm.pipeline.label')}</span>
            <h2 className="font-title text-[clamp(1.8rem,3.5vw,3rem)] text-[#121112] leading-[1.08]">{t('crm.pipeline.heading')}</h2>
            <p className="text-base text-[#121112]/60 font-light leading-[1.8]">{t('crm.pipeline.description')}</p>

            <div className="flex items-center gap-1.5 flex-nowrap overflow-x-auto pt-2 pb-1 -mx-1 px-1">
              {pipelineStages.map((stage, i) => (
                <span key={stage} className="flex items-center gap-1.5 flex-shrink-0">
                  <span className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap ${i === pipelineStages.length - 1 ? 'bg-purple text-cream' : 'bg-[#121112]/[0.06] text-[#121112]/65'}`}>
                    {stage}
                  </span>
                  {i < pipelineStages.length - 1 && <span className="text-[#121112]/25 flex-shrink-0">→</span>}
                </span>
              ))}
            </div>

            <Link to="/contact" className="btn-secondary-dark self-start mt-2">{t('common.requestDemo')}</Link>
          </FadeUp>

          <FadeUp delay={0.15} className="relative flex items-start justify-start flex-1 min-w-0">
            <div className="w-[580px] max-w-[90vw] flex-shrink-0 relative z-10">
              <FramedShot src={pipelineShot} alt="Sales funnel kanban in Optomyze CRM" glow="rgba(129,74,185,0.14)" />
            </div>
            <div className="w-[580px] max-w-[90vw] flex-shrink-0 -ml-56 sm:-ml-72 mt-24 sm:mt-32 relative z-0">
              <FramedShot src={dealFunnelShot} alt="Deal funnel kanban in Optomyze CRM" glow="rgba(129,74,185,0.1)" />
            </div>
          </FadeUp>

        </div>
      </section>

      {/* ── REPORTING & ANALYTICS (dark, full-width dashboard showcase) ── */}
      <section className="section-padding bg-[#0e0814] overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">
          <FadeUp className="flex flex-col items-center text-center gap-4 mb-14 max-w-[640px] mx-auto">
            <span className="label-tag">{t('crm.analytics.label')}</span>
            <h2 className="font-title text-[clamp(1.8rem,3.5vw,3rem)] text-cream leading-[1.1]">{t('crm.analytics.heading')}</h2>
            <p className="text-base text-cream/55 font-light leading-[1.7]">{t('crm.analytics.description')}</p>
          </FadeUp>

          <FadeUp delay={0.1} className="relative flex items-start justify-center pb-20 sm:pb-36">
            <div className="w-[640px] max-w-[88vw] flex-shrink-0 relative z-30">
              <FramedShot src={analyticsMain} alt="Metrics dashboard overview in Optomyze CRM" />
            </div>
            <div className="w-[640px] max-w-[88vw] flex-shrink-0 -ml-40 sm:-ml-56 mt-20 sm:mt-28 relative z-20">
              <FramedShot src={analyticsRevenue} alt="Revenue analytics dashboard in Optomyze CRM" glow="rgba(129,74,185,0.2)" />
            </div>
            <div className="w-[640px] max-w-[88vw] flex-shrink-0 -ml-40 sm:-ml-56 mt-40 sm:mt-56 relative z-10">
              <FramedShot src={analyticsConversations} alt="Conversation SLA metrics in Optomyze CRM" glow="rgba(129,74,185,0.22)" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── MARKETING & AD TECH (light) ── */}
      <section className="section-padding bg-cream overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-center">

            <FadeUp className="relative lg:order-1 pb-16 sm:pb-24">
              <div className="relative z-30 w-[480px] max-w-[85vw]">
                <FramedShot src={adtechMeta} alt="Meta Ads dashboard in Optomyze CRM" glow="rgba(129,74,185,0.18)" />
              </div>
              <div className="absolute z-20 w-[480px] max-w-[85vw] top-16 sm:top-20 -left-8 sm:-left-12">
                <FramedShot src={adtechGoogle} alt="Google Ads dashboard in Optomyze CRM" glow="rgba(129,74,185,0.14)" />
              </div>
              <div className="absolute z-10 w-[480px] max-w-[85vw] top-32 sm:top-40 -left-16 sm:-left-24">
                <FramedShot src={adtechMeta3} alt="Meta Ads ad set performance in Optomyze CRM" glow="rgba(129,74,185,0.1)" />
              </div>
            </FadeUp>

            <FadeUp delay={0.1} className="flex flex-col gap-6 lg:order-2">
              <span className="label-tag-light">{t('crm.adtech.label')}</span>
              <h2 className="font-title text-[clamp(1.8rem,3.5vw,3rem)] text-[#121112] leading-[1.08]">{t('crm.adtech.heading')}</h2>
              <p className="text-base text-[#121112]/60 font-light leading-[1.8]">{t('crm.adtech.description')}</p>
              <div className="flex gap-2 flex-wrap">
                <span className="flex items-center gap-2 px-3 py-1.5 bg-[#121112]/[0.06] rounded-lg text-xs font-semibold text-[#121112]/65">
                  <SiGoogleads size={14} color="#4285F4" />
                  {t('crm.adtech.googleLabel')}
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 bg-[#121112]/[0.06] rounded-lg text-xs font-semibold text-[#121112]/65">
                  <SiMeta size={14} color="#0081FB" />
                  {t('crm.adtech.metaLabel')}
                </span>
              </div>
              <Link to="/contact" className="btn-secondary-dark self-start mt-2">{t('common.requestDemo')}</Link>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ── CUSTOMER MANAGEMENT (dark) ── */}
      <section className="section-padding bg-[#0e0814] overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <FadeUp className="flex flex-col gap-6 order-1 lg:order-1">
              <span className="label-tag">{t('crm.customer.label')}</span>
              <h2 className="font-title text-[clamp(1.8rem,3.5vw,3rem)] text-cream leading-[1.08]">{t('crm.customer.heading')}</h2>
              <p className="text-base text-cream/55 font-light leading-[1.8]">{t('crm.customer.description')}</p>
              <ul className="flex flex-col gap-3">
                {customerPoints.map(point => (
                  <li key={point} className="flex items-center gap-3 text-sm text-cream/65">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-light flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                    {point}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary self-start mt-2">{t('common.requestDemo')}</Link>
            </FadeUp>

            <FadeUp delay={0.1} className="order-2 lg:order-2">
              <FramedShot src={leadDetailsShot} alt="Lead details and customer journey in Optomyze CRM" />
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ── SCHEDULING & CALENDAR (light) ── */}
      <section className="section-padding bg-cream overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-center">

            <FadeUp className="lg:order-1">
              <FramedShot src={calendarShot} alt="Optomyze Calendar" glow="rgba(129,74,185,0.14)" />
            </FadeUp>

            <FadeUp delay={0.1} className="flex flex-col gap-6 lg:order-2">
              <span className="label-tag-light">{t('crm.calendar.label')}</span>
              <h2 className="font-title text-[clamp(1.8rem,3.5vw,3rem)] text-[#121112] leading-[1.08]">{t('crm.calendar.heading')}</h2>
              <p className="text-base text-[#121112]/60 font-light leading-[1.8]">{t('crm.calendar.description')}</p>
              <Link to="/contact" className="btn-secondary-dark self-start mt-2">{t('common.requestDemo')}</Link>
            </FadeUp>

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
