import { useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { getPostById } from '../data/blogContent';
import crmMockup   from '../assets/CRM-MOCKUPS/MOCKUP-HERO.jpg';
import dataDriven  from '../assets/STATIC-ASSETS/data-driven-creatives.jpeg';
import dataMetrics from '../assets/STATIC-ASSETS/data-metrics-thumbnail.jpeg';
import designThumb from '../assets/STATIC-ASSETS/design-thumbnail.jpeg';

const POST_THUMBNAILS = { 1: crmMockup, 3: dataDriven, 5: designThumb, 6: dataMetrics };


const ArrowLeft = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const ExternalLink = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}

function StatBlock({ value, label, source }) {
  return (
    <div className="my-10 px-8 py-7 rounded-2xl border border-purple/20 bg-purple/[0.05] flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <span className="font-title text-[clamp(2.4rem,5vw,3.5rem)] text-cream leading-none tracking-[-0.03em] flex-shrink-0" style={{ color: '#9b6dd0' }}>{value}</span>
      <div className="flex flex-col gap-1">
        <span className="text-base text-cream/80 font-medium leading-snug">{label}</span>
        <span className="text-xs text-cream/30 font-medium tracking-[0.06em]">{source}</span>
      </div>
    </div>
  );
}

function PullQuote({ text, author }) {
  return (
    <blockquote className="my-10 pl-6 border-l-2 border-purple/50">
      <p className="font-title text-[clamp(1.15rem,2vw,1.45rem)] text-cream/80 leading-[1.5] italic">{text}</p>
      {author && <cite className="block mt-3 text-xs text-cream/35 font-medium tracking-[0.08em] not-italic">{author}</cite>}
    </blockquote>
  );
}

function ContentList({ items }) {
  return (
    <ul className="my-6 flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[15px] text-cream/65 leading-relaxed">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-light flex-shrink-0 mt-[3px]"><polyline points="20 6 9 17 4 12"/></svg>
          {item}
        </li>
      ))}
    </ul>
  );
}

function renderSection(section, index) {
  switch (section.type) {
    case 'heading':
      return (
        <FadeUp key={index}>
          <h2 className="font-title text-[clamp(1.3rem,2.5vw,1.75rem)] text-cream mt-12 mb-4 leading-snug">{section.text}</h2>
        </FadeUp>
      );
    case 'paragraph':
      return (
        <FadeUp key={index}>
          <p className="text-[16px] text-cream/60 leading-[1.85] font-light mb-5">{section.text}</p>
        </FadeUp>
      );
    case 'stat':
      return (
        <FadeUp key={index}>
          <StatBlock value={section.value} label={section.label} source={section.source} />
        </FadeUp>
      );
    case 'quote':
      return (
        <FadeUp key={index}>
          <PullQuote text={section.text} author={section.author} />
        </FadeUp>
      );
    case 'list':
      return (
        <FadeUp key={index}>
          <ContentList items={section.items} />
        </FadeUp>
      );
    default:
      return null;
  }
}

export default function BlogPostPage() {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const posts = t('blog.posts', { returnObjects: true });
  const categories = t('blog.categories', { returnObjects: true });
  const meta = posts.find(p => p.id === Number(id));
  const rawContent = getPostById(id);
  const i18nSections = t(`blog.content.${id}.sections`, { returnObjects: true });
  const content = rawContent ? {
    ...rawContent,
    sections: Array.isArray(i18nSections) ? i18nSections : rawContent.sections,
  } : null;

  if (!meta || !content) {
    return (
      <main className="min-h-screen bg-[#0e0814] flex items-center justify-center">
        <div className="text-center flex flex-col gap-4 items-center">
          <p className="text-cream/40 text-lg">Article not found.</p>
          <Link to="/blog" className="btn-secondary text-sm">{t('blog.backToBlog') ?? 'Back to Blog'}</Link>
        </div>
      </main>
    );
  }

  const thumbnail = POST_THUMBNAILS[meta.id];
  const currentIndex = posts.findIndex(p => p.id === Number(id));
  const prevPost = posts[currentIndex + 1];
  const nextPost = posts[currentIndex - 1];

  return (
    <main className="bg-[#0e0814]">

      {/* ── HERO ── */}
      <section className="relative pt-[calc(80px+clamp(50px,6vw,80px))] pb-[clamp(40px,5vw,64px)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0814] via-[#1a0d24] to-[#0e0814] z-0" />
        <div className="absolute inset-0 z-0 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(129,74,185,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(129,74,185,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 100%)' }} />
        <div className="absolute w-[600px] h-64 -top-10 left-1/2 -translate-x-1/2 rounded-full blur-[100px] pointer-events-none z-0"
          style={{ background: 'rgba(129,74,185,0.1)' }} />

        <div className="relative z-10 w-full max-w-[800px] mx-auto px-[clamp(1rem,5vw,2.5rem)] flex flex-col items-start gap-5">

          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link to="/blog"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-cream/40 hover:text-cream transition-colors duration-150">
              <ArrowLeft /> {t('blog.post.backToBlog')}
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08 }}>
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-purple-light/70">
              {categories[meta.category] || meta.category}
            </span>
          </motion.div>

          <motion.h1
            className="font-title text-[clamp(1.8rem,4vw,3.2rem)] text-cream leading-[1.1] tracking-[-0.01em]"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {meta.title}
          </motion.h1>

          <motion.p
            className="text-base text-cream/50 font-light leading-relaxed max-w-[600px]"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
          >
            {meta.excerpt}
          </motion.p>

          <motion.div
            className="flex items-center gap-3 text-[12px] font-medium text-cream/30 tracking-[0.04em]"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span>{t('blog.post.author')}</span>
            <span className="w-1 h-1 rounded-full bg-cream/20" />
            <span>{meta.date}</span>
            <span className="w-1 h-1 rounded-full bg-cream/20" />
            <span>{meta.readTime}</span>
          </motion.div>
        </div>
      </section>

      {/* ── THUMBNAIL ── */}
      <motion.div
        className="w-full max-w-[800px] mx-auto px-[clamp(1rem,5vw,2.5rem)] mb-16"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.35 }}
      >
        {thumbnail ? (
          <img src={thumbnail} alt={meta.title}
            className="w-full aspect-[16/7] object-cover object-top rounded-2xl"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }} />
        ) : (
          <div className="w-full aspect-[16/7] rounded-2xl bg-gradient-to-br from-[#1a0d24] to-[#0e0814] flex items-center justify-center border border-white/[0.05]">
            <div className="flex flex-col items-center gap-3 opacity-25">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" className="text-purple-light">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
              </svg>
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-cream/30">Thumbnail coming soon</span>
            </div>
          </div>
        )}
      </motion.div>

      {/* ── ARTICLE BODY ── */}
      <article className="w-full max-w-[800px] mx-auto px-[clamp(1rem,5vw,2.5rem)] pb-20">
        <div className="flex flex-col">
          {content.sections.map((section, i) => renderSection(section, i))}
        </div>

        {/* ── REFERENCES ── */}
        {content.references?.length > 0 && (
          <FadeUp className="mt-16 pt-8 border-t border-white/[0.07]">
            <h3 className="text-[11px] font-bold tracking-[0.14em] uppercase text-cream/25 mb-5">{t('blog.post.references')}</h3>
            <ol className="flex flex-col gap-3">
              {content.references.map((ref, i) => (
                <li key={i} className="flex items-start gap-3 text-[13px] text-cream/35">
                  <span className="text-purple/50 font-bold flex-shrink-0 w-4 text-right">{i + 1}.</span>
                  <a href={ref.url} target="_blank" rel="noopener noreferrer"
                    className="hover:text-purple-light transition-colors duration-150 flex flex-col gap-0.5">
                    <span className="flex items-center gap-1.5">{ref.label} <ExternalLink /></span>
                    <span className="text-cream/25 text-[12px]">{ref.source}</span>
                  </a>
                </li>
              ))}
            </ol>
          </FadeUp>
        )}

        {/* ── PREV / NEXT ── */}
        <FadeUp className="mt-16 pt-8 border-t border-white/[0.07]">
          <div className="flex flex-col sm:flex-row gap-4">
            {prevPost && (
              <Link to={`/blog/${prevPost.id}`}
                className="flex-1 flex flex-col gap-2 p-5 rounded-xl border border-white/[0.07] hover:border-purple/25 hover:bg-purple/[0.03] transition-all duration-200 group">
                <span className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.1em] uppercase text-cream/25 group-hover:text-purple-light transition-colors">
                  <ArrowLeft /> {t('blog.post.previous')}
                </span>
                <span className="text-sm font-medium text-cream/60 group-hover:text-cream transition-colors leading-snug">{prevPost.title}</span>
              </Link>
            )}
            {nextPost && (
              <Link to={`/blog/${nextPost.id}`}
                className="flex-1 flex flex-col items-end gap-2 p-5 rounded-xl border border-white/[0.07] hover:border-purple/25 hover:bg-purple/[0.03] transition-all duration-200 group text-right">
                <span className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.1em] uppercase text-cream/25 group-hover:text-purple-light transition-colors">
                  {t('blog.post.next')} <ArrowRight />
                </span>
                <span className="text-sm font-medium text-cream/60 group-hover:text-cream transition-colors leading-snug">{nextPost.title}</span>
              </Link>
            )}
          </div>
        </FadeUp>

        {/* ── CTA ── */}
        <FadeUp className="mt-12">
          <div className="rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
            style={{ background: 'linear-gradient(135deg, rgba(129,74,185,0.1) 0%, rgba(40,7,48,0.3) 100%)', border: '1px solid rgba(129,74,185,0.2)' }}>
            <div className="flex flex-col gap-1.5">
              <span className="font-title text-lg text-cream">{t('blog.post.ctaTitle')}</span>
              <span className="text-sm text-cream/45 font-light">{t('blog.post.ctaDesc')}</span>
            </div>
            <Link to="/contact" className="btn-primary flex-shrink-0">
              {t('blog.post.ctaBtn')} <ArrowRight />
            </Link>
          </div>
        </FadeUp>
      </article>
    </main>
  );
}
