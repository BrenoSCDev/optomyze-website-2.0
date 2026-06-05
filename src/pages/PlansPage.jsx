import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import astroHandshake from '../assets/VIDEOS/astro-handshake.mp4';

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const Check = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-[2px]">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

function PlanCard({ planKey, index, highlighted = false }) {
  const { t } = useTranslation();
  const plan = t(`plans.${planKey}`, { returnObjects: true });
  const features = t(`plans.${planKey}.features`, { returnObjects: true });

  return (
    <FadeUp delay={index * 0.1} className="flex flex-col h-full">
      <div
        className="relative flex flex-col h-full rounded-[2rem] p-8 lg:p-10 overflow-hidden transition-all duration-300"
        style={highlighted ? {
          background: 'linear-gradient(160deg, rgba(129,74,185,0.1) 0%, rgba(40,7,48,0.35) 100%)',
          border: '1px solid rgba(129,74,185,0.35)',
          boxShadow: '0 0 60px rgba(129,74,185,0.08)',
        } : {
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {/* Subtle glow for Prime */}
        {highlighted && (
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(129,74,185,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
        )}

        <div className="relative z-10 flex flex-col h-full gap-0">

          {/* Top row: badge + number */}
          <div className="flex items-start justify-between mb-6">
            {highlighted ? (
              <span className="label-tag">{t('plans.bestValue')}</span>
            ) : (
              <span />
            )}
            <span className="font-title text-[clamp(2.5rem,5vw,4rem)] leading-none text-cream/8 select-none">
              {plan.tag}
            </span>
          </div>

          {/* Plan name */}
          <h2 className="font-title text-[clamp(2rem,3.5vw,2.8rem)] text-cream leading-none mb-2">
            {plan.name}
          </h2>

          {/* Tagline */}
          <p className="text-[13px] italic text-cream/40 mb-7 tracking-[0.02em]">
            {plan.tagline}
          </p>

          {/* Focus line */}
          <p className="text-[15px] font-medium text-cream/75 leading-snug mb-4">
            {plan.focus}
          </p>

          {/* Description */}
          <p className="text-[14px] text-cream/45 font-light leading-[1.75] mb-6">
            {plan.description}
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-white/[0.07] mb-6" />

          {/* Features */}
          <ul className="flex flex-col gap-3 mb-6 flex-1">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-[13px] text-cream/60">
                <span className={highlighted ? 'text-purple-light' : 'text-cream/35'}>
                  <Check />
                </span>
                {f}
              </li>
            ))}
          </ul>

          {/* Bonus note */}
          <p className="text-[12px] italic text-cream/25 mb-8 leading-relaxed">
            * {plan.bonus}
          </p>

          {/* CTA */}
          <Link to="/contact"
            className={highlighted
              ? 'btn-primary w-full justify-center text-center text-[14px] py-4'
              : 'w-full py-4 text-center text-[14px] font-semibold text-cream/60 border border-white/15 rounded-full hover:border-purple/40 hover:text-cream transition-all duration-200'
            }
          >
            {t('plans.cta')}
          </Link>
        </div>
      </div>
    </FadeUp>
  );
}

export default function PlansPage() {
  const { t } = useTranslation();

  return (
    <main className="bg-[#0e0814]">

      {/* ── HERO ── */}
      <section className="relative pt-[calc(80px+clamp(60px,8vw,100px))] pb-[clamp(50px,7vw,90px)] overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay muted loop playsInline src={astroHandshake}
          style={{ objectPosition: 'center 30%' }} />
        <div className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(160deg, rgba(14,8,20,0.88) 0%, rgba(40,7,48,0.78) 50%, rgba(14,8,20,0.92) 100%)', backdropFilter: 'blur(3px)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-24 z-[2]"
          style={{ background: 'linear-gradient(to bottom, transparent, #0e0814)' }} />

        <div className="relative z-[3] w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)] flex flex-col items-center text-center gap-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <span className="label-tag">{t('plans.hero.label')}</span>
          </motion.div>
          <motion.h1
            className="font-title text-[clamp(2.5rem,5.5vw,5.5rem)] text-cream leading-[1.04] tracking-[-0.02em]"
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {t('plans.hero.title')}
          </motion.h1>
          <motion.p
            className="text-[clamp(1rem,1.8vw,1.15rem)] text-cream/50 max-w-[480px] font-light leading-[1.75]"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.35 }}
          >
            {t('plans.hero.description')}
          </motion.p>
        </div>
      </section>

      {/* ── PLANS GRID ── */}
      <section className="section-padding">
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            <PlanCard planKey="core"   index={0} />
            <PlanCard planKey="growth" index={1} />
            <PlanCard planKey="prime"  index={2} highlighted />
          </div>

          {/* Footer note */}
          <FadeUp delay={0.35} className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
            <p className="text-[13px] text-cream/30 font-light max-w-[520px] text-center sm:text-left leading-relaxed">
              {t('plans.footerNote')}
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-[13px] font-semibold text-purple-light hover:text-cream transition-colors flex-shrink-0">
              {t('plans.footerCta')} <ArrowRight />
            </Link>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
