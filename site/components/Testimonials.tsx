import { DEPOIMENTOS } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 brick-wall overflow-hidden">
      <div className="relative max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 font-head uppercase tracking-[0.3em] text-xs text-white/50">
              <span className="w-8 h-px bg-white/40" />
              Depoimentos
            </div>
            <h2 className="mt-4 font-head text-4xl md:text-6xl uppercase leading-[1] tracking-tight">
              QUEM JÁ <span className="neon-red idle-flicker">ACENDEU</span>
            </h2>
          </div>
          <p className="font-script text-3xl md:text-4xl neon-white idle-flicker">obrigado.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {DEPOIMENTOS.map((d, i) => (
            <figure
              key={i}
              className="relative p-7 md:p-8 border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent hover:border-white/30 transition"
              style={{ boxShadow: i % 2 === 0 ? '0 0 32px rgba(255,0,0,0.06)' : '0 0 32px rgba(0,12,255,0.07)' }}
            >
              <svg
                aria-hidden
                width="40" height="32" viewBox="0 0 40 32"
                className="text-slim-red mb-5"
                fill="currentColor"
                style={{ filter: 'drop-shadow(0 0 8px #ff0000)' }}
              >
                <path d="M14 0H4C1.79 0 0 1.79 0 4v10c0 2.21 1.79 4 4 4h6v6c0 4.42-3.58 8-8 8v4c8.84 0 16-7.16 16-16V4c0-2.21-1.79-4-4-4zm22 0H26c-2.21 0-4 1.79-4 4v10c0 2.21 1.79 4 4 4h6v6c0 4.42-3.58 8-8 8v4c8.84 0 16-7.16 16-16V4c0-2.21-1.79-4-4-4z" />
              </svg>
              <blockquote className="text-white/85 leading-relaxed text-[15px] md:text-base">
                {d.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/10">
                <div className="font-head uppercase tracking-[0.18em] text-sm">{d.autor}</div>
                <div className="text-xs text-white/50 mt-1">{d.contexto}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
