import { BRAND } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative brick-wall min-h-[100svh] flex items-center overflow-hidden">
      {/* Ambient color washes */}
      <div
        aria-hidden
        className="absolute -left-40 -top-40 w-[60vw] h-[60vw] rounded-full blur-[120px] bg-slim-red/30 animate-ambient-red pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -right-40 -bottom-40 w-[60vw] h-[60vw] rounded-full blur-[120px] bg-slim-blue/30 animate-ambient-blue pointer-events-none"
      />

      {/* Diagonal red light bars top-left & bottom-right (referência do manual de marca) */}
      <div aria-hidden className="absolute -top-10 -left-10 w-[300px] md:w-[480px] pointer-events-none">
        <div className="h-[2px] bg-slim-red rotate-[-20deg] origin-left blur-[1px]" style={{ boxShadow: '0 0 12px #ff0000, 0 0 24px #ff0000' }} />
        <div className="h-[1px] bg-slim-red/70 rotate-[-20deg] origin-left mt-2 blur-[1px]" style={{ boxShadow: '0 0 8px #ff0000' }} />
        <div className="h-[1px] bg-white/40 rotate-[-20deg] origin-left mt-1" />
      </div>
      <div aria-hidden className="absolute -bottom-10 -right-10 w-[300px] md:w-[480px] pointer-events-none">
        <div className="h-[2px] bg-slim-red rotate-[-20deg] origin-right blur-[1px]" style={{ boxShadow: '0 0 12px #ff0000, 0 0 24px #ff0000' }} />
        <div className="h-[1px] bg-slim-red/70 rotate-[-20deg] origin-right mt-2 blur-[1px]" />
        <div className="h-[1px] bg-white/40 rotate-[-20deg] origin-right mt-1" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 pt-32 pb-20 w-full">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-7">
            <p className="font-head uppercase tracking-[0.3em] text-xs md:text-sm text-white/60 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Sorocaba · SP &nbsp;·&nbsp; Neon LED Personalizado
            </p>

            {/* Big neon SVG wordmark drawing */}
            <h1 className="relative animate-fade-up" style={{ animationDelay: '0.25s' }}>
              <span className="sr-only">Slim Concept — Acendemos a sua festa</span>

              <span aria-hidden className="block font-display text-[14vw] md:text-[8.2vw] leading-[0.9] tracking-tight">
                <span className="neon-blue idle-flicker">acende</span>
                <br />
                <span className="neon-red idle-flicker">a sua festa.</span>
              </span>
            </h1>

            <p className="font-script text-3xl md:text-5xl neon-white idle-flicker animate-fade-up" style={{ animationDelay: '0.7s' }}>
              em luz, em acrílico, com o seu nome.
            </p>

            <p className="text-white/70 max-w-xl text-base md:text-lg leading-relaxed animate-fade-up" style={{ animationDelay: '0.95s' }}>
              Letreiros e painéis de neon LED em acrílico, feitos sob medida para casamentos,
              formaturas, aniversários e comércios. Envie a frase pelo WhatsApp — em 24h você
              recebe a arte com a sua peça.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 pt-2 animate-fade-up" style={{ animationDelay: '1.15s' }}>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener"
                className="shine inline-flex items-center justify-center gap-3 px-7 py-4 bg-slim-red text-white font-head text-base uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.99] transition relative"
                style={{ boxShadow: '0 0 24px rgba(255,0,0,0.55), 0 0 56px rgba(255,0,0,0.35), inset 0 0 14px rgba(255,255,255,0.18)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Quero meu neon
              </a>

              <a href="#portfolio" className="inline-flex items-center justify-center gap-3 px-7 py-4 border border-white/20 text-white/90 font-head text-base uppercase tracking-[0.2em] hover:border-white/60 hover:bg-white/5 transition">
                Ver portfólio
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
              </a>
            </div>

            {/* Trust strip */}
            <div className="pt-8 grid grid-cols-3 gap-4 max-w-md animate-fade-up" style={{ animationDelay: '1.3s' }}>
              <div>
                <div className="font-head text-3xl text-white">+500</div>
                <div className="text-xs uppercase tracking-[0.18em] text-white/50">Peças entregues</div>
              </div>
              <div>
                <div className="font-head text-3xl text-white">24h</div>
                <div className="text-xs uppercase tracking-[0.18em] text-white/50">Para o orçamento</div>
              </div>
              <div>
                <div className="font-head text-3xl text-white">5.0</div>
                <div className="text-xs uppercase tracking-[0.18em] text-white/50">★ Avaliação</div>
              </div>
            </div>
          </div>

          {/* Right: animated neon SVG "S" mark + hero photo card */}
          <div className="md:col-span-5 relative animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <NeonMark />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#categorias" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/80 transition flex flex-col items-center gap-2 z-20">
        <span className="text-[10px] uppercase tracking-[0.3em] font-head">role</span>
        <svg width="16" height="22" viewBox="0 0 16 22" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="1" width="14" height="20" rx="7" />
          <path d="M8 6v4" strokeLinecap="round" className="animate-pulse" />
        </svg>
      </a>
    </section>
  );
}

function NeonMark() {
  return (
    <div className="relative aspect-square w-full max-w-[440px] mx-auto">
      {/* "wall" frame */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,12,255,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.14),transparent_45%)]" style={{ animationDelay: '1s' }} />

      <svg
        viewBox="0 0 400 400"
        className="relative w-full h-full"
        aria-hidden
      >
        {/* Drawing the two-figures Slim mark with stroke animation */}
        {/* Outer hug arc (blue) */}
        <path
          className="tube tube-blue"
          d="M 80 200 Q 80 300 200 300 Q 320 300 320 200"
        />
        {/* Left figure: head + body */}
        <circle className="tube tube-blue" cx="160" cy="120" r="22" />
        <path className="tube tube-blue" d="M 160 145 Q 160 200 175 245" />
        {/* Right figure: head + body */}
        <circle className="tube tube-blue" cx="240" cy="120" r="22" />
        <path className="tube tube-blue" d="M 240 145 Q 240 200 225 245" />
        {/* "SLIM CONCEPT" stroke wordmark */}
        <text
          className="tube tube-red"
          x="200" y="365"
          textAnchor="middle"
          fontFamily="Anton, sans-serif"
          fontSize="44"
          letterSpacing="3"
        >
          SLIM CONCEPT
        </text>
      </svg>

      {/* Bottom shelf "reflection" — soft glow on the floor below the mark */}
      <div className="absolute inset-x-6 -bottom-2 h-10 bg-gradient-to-b from-slim-blue/30 to-transparent blur-2xl pointer-events-none" />
    </div>
  );
}
