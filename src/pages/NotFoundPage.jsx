import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import astroSolutions from '../assets/VIDEOS/astro-float-2.mp4';

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default function NotFoundPage() {
  return (
    <main className="relative sm:min-h-screen flex items-center justify-center overflow-hidden">

      {/* Video background */}
      <video className="absolute inset-0 w-full h-full object-cover z-0 sm:scale-[2.2]" autoPlay muted loop playsInline src={astroSolutions} />

      {/* Overlay */}
      <div className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(160deg, rgba(14,8,20,0.88) 0%, rgba(40,7,48,0.78) 50%, rgba(14,8,20,0.92) 100%)', backdropFilter: 'blur(3px)' }} />

      {/* Atmospheric glow */}
      <div className="absolute inset-0 z-[2] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(129,74,185,0.12) 0%, transparent 70%)' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 px-[clamp(1.5rem,6vw,4rem)]">

        <motion.span
          className="font-title text-[clamp(6rem,18vw,14rem)] text-cream leading-none tracking-[-0.04em]"
          style={{ opacity: 0.08 }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 0.08, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          404
        </motion.span>

        <motion.div
          className="flex flex-col items-center gap-4 -mt-[clamp(4rem,10vw,8rem)]"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="label-tag">Lost in orbit</span>
          <h1 className="font-title text-[clamp(1.8rem,4vw,3rem)] text-cream leading-[1.08]">
            This page doesn't exist
          </h1>
          <p className="text-base text-cream/45 font-light max-w-[380px] leading-[1.75]">
            Looks like you drifted off course. Let's get you back to the ecosystem.
          </p>
        </motion.div>

        <motion.div
          className="flex gap-3 flex-wrap justify-center"
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
        >
          <Link to="/" className="btn-primary">Back to Home <ArrowRight /></Link>
          <Link to="/contact" className="btn-secondary">Contact Us</Link>
        </motion.div>
      </div>
    </main>
  );
}
