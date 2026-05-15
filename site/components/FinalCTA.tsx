import { BRAND } from '@/lib/data';

export default function FinalCTA() {
  return (
    <section className="relative brick-wall py-28 md:py-40 overflow-hidden">
      {/* big ambient washes */}
      <div aria-hidden className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full blur-[140px] bg-slim-red/15 animate-ambient-red" />
      <div aria-hidden className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full blur-[140px] bg-slim-blue/15 animate-ambient-blue" />

      <div className="relative max-w-[1100px] mx-auto px-5 md:px-10 text-center">
        <p className="font-head uppercase tracking-[0.3em] text-xs text-white/50">Bora?</p>
        <h2 className="mt-5 font-head text-5xl md:text-8xl uppercase leading-[0.95] tracking-tight">
          <span className="neon-blue idle-flicker">manda a frase.</span>
          <br />
          <span className="neon-red idle-flicker">o resto é com a gente.</span>
        </h2>

        <p className="mt-8 font-script text-3xl md:text-4xl neon-white idle-flicker">
          em 24h você tem o orçamento.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener"
            className="shine inline-flex items-center justify-center gap-3 px-8 py-5 bg-slim-red text-white font-head text-base md:text-lg uppercase tracking-[0.22em] hover:scale-[1.02] active:scale-[0.99] transition relative"
            style={{ boxShadow: '0 0 30px rgba(255,0,0,0.6), 0 0 70px rgba(255,0,0,0.4), inset 0 0 16px rgba(255,255,255,0.18)' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" /></svg>
            Falar no WhatsApp
          </a>

          <a
            href={`tel:+${BRAND.phone}`}
            className="inline-flex items-center justify-center gap-3 px-8 py-5 border border-white/25 text-white font-head text-base md:text-lg uppercase tracking-[0.22em] hover:border-white/60 hover:bg-white/5 transition"
          >
            {BRAND.phoneDisplay}
          </a>
        </div>

        <div className="mt-8 text-xs uppercase tracking-[0.25em] font-head text-white/40">
          Atendimento de seg. à sex. — 9h às 19h
        </div>
      </div>
    </section>
  );
}
