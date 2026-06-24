import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import crmMockup       from '../assets/CRM-MOCKUPS/CRM-HERO.jpeg';
import dataDriven      from '../assets/STATIC-ASSETS/data-driven-creatives.jpeg';
import dataMetrics     from '../assets/STATIC-ASSETS/data-metrics-thumbnail.jpeg';
import designThumb     from '../assets/STATIC-ASSETS/design-thumbnail.jpeg';
import astroFloating   from '../assets/VIDEOS/astro-floating.mp4';

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

const POST_THUMBNAILS = { 1: crmMockup, 3: dataDriven, 5: designThumb, 6: dataMetrics };

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default function BlogPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const posts = t('blog.posts', { returnObjects: true });
  const categories = t('blog.categories', { returnObjects: true });
  const filtered = activeCategory === 'all' ? posts : posts.filter(p => p.category === activeCategory);

  return (
    <main>
      {/* HERO */}
      <section className="relative pt-[calc(80px+clamp(60px,8vw,100px))] pb-[clamp(60px,8vw,100px)] overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay muted loop playsInline src={astroFloating} />
        <div className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(160deg, rgba(14,8,20,0.82) 0%, rgba(40,7,48,0.72) 50%, rgba(14,8,20,0.88) 100%)', backdropFilter: 'blur(3px)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-24 z-[2]"
          style={{ background: 'linear-gradient(to bottom, transparent, #0e0814)' }} />

        <div className="relative z-[3] w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)] flex flex-col items-center text-center gap-5">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <span className="label-tag">{t('blog.hero.label')}</span>
          </motion.div>
          <motion.h1 className="font-title text-[clamp(2.5rem,5vw,5rem)] text-cream"
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22,1,0.36,1] }}
          >
            {t('blog.hero.title')}
          </motion.h1>
          <motion.p className="text-[clamp(1rem,1.8vw,1.15rem)] text-cream/60 max-w-[520px] font-light"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('blog.hero.description')}
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-padding bg-[#0e0814]">
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,5vw,3rem)]">

          {/* Filter — typographic, no pills */}
          <FadeUp className="flex flex-wrap items-center gap-7 mb-12 border-b border-white/[0.06] pb-6">
            {Object.entries(categories).map(([key, label]) => (
              <button key={key}
                className={`relative text-[13px] font-medium cursor-pointer transition-colors duration-150 pb-0.5 ${
                  activeCategory === key ? 'text-cream' : 'text-cream/30 hover:text-cream/65'
                }`}
                onClick={() => setActiveCategory(key)}
              >
                {label}
                {activeCategory === key && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-cream/40" />
                )}
              </button>
            ))}
          </FadeUp>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {filtered.map((post, i) => {
              const featured = i === 0 && activeCategory === 'all';
              const thumbnail = POST_THUMBNAILS[post.id];
              return (
                <motion.article key={post.id}
                  className={[
                    'relative flex flex-col bg-white/[0.025] border border-white/7 rounded-[2rem] overflow-hidden hover:border-purple/25 hover:bg-purple/[0.04] transition-all duration-300 cursor-pointer group',
                    featured ? 'md:col-span-2 lg:col-span-3 md:flex-row' : '',
                  ].join(' ')}
                  initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  {/* Image */}
                  <div className={[
                    'relative overflow-hidden',
                    featured ? 'md:w-[45%] flex-shrink-0 min-h-[220px]' : 'aspect-video',
                  ].join(' ')}>
                    {thumbnail ? (
                      <img src={thumbnail} alt={post.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#1a0d24] to-[#0e0814] flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/10">
                          <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className={`flex flex-col gap-3 flex-1 ${featured ? 'p-10' : 'p-6'}`}>
                    <div className="flex items-center gap-2 text-[11px] font-medium text-cream/30 tracking-[0.04em]">
                      <span className="uppercase tracking-[0.1em] font-bold">{categories[post.category] || post.category}</span>
                      <span className="w-1 h-1 rounded-full bg-cream/20" />
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-cream/20" />
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className={`font-title text-cream leading-snug ${featured ? 'text-[clamp(1.5rem,2.5vw,2rem)]' : 'text-lg'}`}>{post.title}</h2>
                    <p className="text-sm text-cream/50 leading-relaxed font-light flex-1">{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-[13px] font-semibold text-purple-light group-hover:text-cream group-hover:gap-3 transition-all duration-150 mt-2">
                      {t('blog.readMore')} <ArrowRight />
                    </Link>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[radial-gradient(circle,rgba(129,74,185,0.06)_0%,transparent_70%)] pointer-events-none" />
                </motion.article>
              );
            })}
          </div>

        </div>
      </section>
    </main>
  );
}
