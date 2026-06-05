import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import astroVideo from '../assets/VIDEOS/astro.mp4';

const WEBHOOK_URL = 'https://optomyze-n8n.kmfrpu.easypanel.host/webhook/1c679d25-f0b1-4ff7-9ebb-952be6a344a8';

const schema = z.object({
  fullName: z.string().min(1).max(100),
  email:    z.string().email().max(255),
  company:  z.string().max(100).optional().or(z.literal('')),
  message:  z.string().min(1).max(1000),
});

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}

const inputBase = 'w-full px-[18px] py-3.5 bg-white/4 border rounded-xl text-sm text-cream placeholder-cream/25 font-body outline-none transition-all duration-150';
const inputNormal = `${inputBase} border-white/10 focus:border-purple/50 focus:bg-purple/[0.04]`;
const inputError  = `${inputBase} border-red-400/50 bg-red-400/[0.03] focus:border-red-400/70`;

const Field = ({ label, required, error, children }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[12px] font-semibold tracking-[0.06em] uppercase text-cream/50">
      {label}{required && ' *'}
    </label>
    {children}
    {error && <p className="text-[11px] text-red-400/80 font-medium">{error}</p>}
  </div>
);

export default function ContactPage() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { fullName: '', email: '', company: '', message: '' },
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('webhook_failed');
      reset();
    } catch {
      setError('root', { type: 'manual' });
      throw new Error('submission_failed');
    }
  };

  return (
    <main>
      {/* HERO */}
      <section className="relative pt-[calc(80px+clamp(60px,8vw,100px))] pb-[clamp(60px,8vw,100px)] overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay muted loop playsInline src={astroVideo} />
        <div className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(160deg, rgba(14,8,20,0.82) 0%, rgba(40,7,48,0.72) 50%, rgba(14,8,20,0.88) 100%)', backdropFilter: 'blur(8px)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-24 z-[2]"
          style={{ background: 'linear-gradient(to bottom, transparent, #0e0814)' }} />

        <div className="relative z-[3] w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)] flex flex-col items-center text-center gap-5">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <span className="label-tag">{t('contact.hero.label')}</span>
          </motion.div>
          <motion.h1 className="font-title text-[clamp(2.5rem,5vw,5rem)] text-cream"
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22,1,0.36,1] }}
          >
            {t('contact.hero.title')}
          </motion.h1>
          <motion.p className="text-[clamp(1rem,1.8vw,1.15rem)] text-cream/65 max-w-[540px] font-light"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('contact.hero.description')}
          </motion.p>
        </div>
      </section>

      {/* MAIN */}
      <section className="section-padding bg-[#280730]">
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 items-start">

            {/* Info sidebar */}
            <FadeUp className="order-2 lg:order-1">
              <div className="relative p-8 bg-white/[0.025] border border-white/7 rounded-[2rem] overflow-hidden flex flex-col gap-8">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,rgba(129,74,185,0.1)_0%,transparent_70%)] pointer-events-none" />
                <h3 className="text-xl font-title text-cream relative z-10">{t('contact.whatToExpect')}</h3>

                <div className="flex flex-col gap-6 relative z-10">
                  {t('contact.steps', { returnObjects: true }).map((step, i) => (
                    <motion.div key={i} className="flex gap-4 items-start"
                      initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <span className="font-title text-2xl text-purple/35 leading-none flex-shrink-0 w-10">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <h4 className="text-sm font-semibold text-cream mb-1">{step.title}</h4>
                        <p className="text-[13px] text-cream/50 leading-relaxed font-light">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col gap-4 pt-6 border-t border-white/7 relative z-10">
                  <a href="mailto:contact@optomyze.io" className="flex items-center gap-3 text-sm text-cream/50 hover:text-cream transition-colors duration-150 group">
                    <span className="text-purple-light/80 flex-shrink-0">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </span>
                    contact@optomyze.io
                  </a>
                  <div className="flex items-center gap-3 text-sm text-cream/50">
                    <span className="text-purple-light/80 flex-shrink-0">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </span>
                    {t('contact.info.response')}
                  </div>
                </div>

                <div className="flex flex-col gap-4 pt-6 border-t border-white/7 relative z-10">
                  <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-cream/30">{t('contact.followUs')}</p>
                  <div className="flex gap-3">
                    {[
                      { href: 'https://www.instagram.com/optomyze.io/', label: 'Instagram', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                      { href: 'https://www.linkedin.com/company/optomyze', label: 'LinkedIn', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
                      { href: 'https://wa.me/5562995225796', label: 'WhatsApp', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
                    ].map(({ href, label, icon }) => (
                      <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                        className="flex items-center justify-center w-9 h-9 border border-white/10 rounded-lg text-cream/50 hover:border-purple hover:text-purple-light hover:bg-purple/10 hover:-translate-y-0.5 transition-all duration-200">
                        {icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Form */}
            <FadeUp delay={0.1} className="order-1 lg:order-2">
              {isSubmitSuccessful ? (
                <motion.div
                  className="flex flex-col items-center justify-center gap-6 p-[clamp(60px,10vw,100px)] bg-white/[0.025] border border-purple/20 rounded-[2rem] text-center min-h-[300px]"
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-purple/15 border border-purple/30 rounded-full text-purple-light">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 className="text-xl font-title text-cream max-w-[360px]">{t('contact.form.success')}</h3>
                </motion.div>
              ) : (
                <form className="flex flex-col gap-5 p-8 bg-white/[0.025] border border-white/7 rounded-[2rem]"
                  onSubmit={handleSubmit(onSubmit)} noValidate>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label={t('contact.form.name')} required error={errors.fullName?.message}>
                      <input type="text" className={errors.fullName ? inputError : inputNormal}
                        placeholder={t('contact.placeholders.name')}
                        {...register('fullName')} />
                    </Field>
                    <Field label={t('contact.form.email')} required error={errors.email?.message}>
                      <input type="email" className={errors.email ? inputError : inputNormal}
                        placeholder={t('contact.placeholders.email')}
                        {...register('email')} />
                    </Field>
                  </div>

                  <Field label={t('contact.form.company')} error={errors.company?.message}>
                    <input type="text" className={errors.company ? inputError : inputNormal}
                      placeholder={t('contact.placeholders.company')}
                      {...register('company')} />
                  </Field>

                  <Field label={t('contact.form.message')} required error={errors.message?.message}>
                    <textarea rows={6}
                      className={`${errors.message ? inputError : inputNormal} resize-y min-h-[150px] leading-relaxed`}
                      placeholder={t('contact.placeholders.message')}
                      {...register('message')} />
                  </Field>

                  {errors.root && (
                    <p className="text-[12px] text-red-400/80 font-medium text-center">{t('contact.form.error')}</p>
                  )}

                  <button type="submit" disabled={isSubmitting}
                    className="btn-primary justify-center text-[15px] py-4 mt-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
                        {t('contact.form.sending')}
                      </>
                    ) : (
                      <>
                        {t('contact.form.submit')}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </FadeUp>

          </div>
        </div>
      </section>
    </main>
  );
}
