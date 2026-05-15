const STEPS = [
  {
    n: '01',
    titulo: 'Envie a frase',
    desc: 'Manda no WhatsApp a palavra, o nome ou a frase que você quer em neon — junto com a cor preferida e o tamanho aproximado.',
    accent: 'red' as const,
    icon: (
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M8 12h32v22H20l-10 8V12z" strokeLinejoin="round" />
        <path d="M16 22h16M16 28h10" strokeLinecap="round" />
      </svg>
    )
  },
  {
    n: '02',
    titulo: 'Receba a prévia',
    desc: 'Em até 24h você recebe a arte digital do seu neon, o preço final e o prazo de entrega. Sem compromisso, sem pegadinha.',
    accent: 'blue' as const,
    icon: (
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M8 16l16 12 16-12" strokeLinejoin="round" />
        <rect x="6" y="10" width="36" height="28" rx="2" />
      </svg>
    )
  },
  {
    n: '03',
    titulo: 'Acende a festa',
    desc: 'Aprovado, a gente produz e entrega pronto pra ligar na tomada. Sorocaba/região na mão; Brasil inteiro via transportadora.',
    accent: 'white' as const,
    icon: (
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M14 6l-4 22h10l-2 14 16-22H22l4-14H14z" strokeLinejoin="round" />
      </svg>
    )
  }
];

export default function Process() {
  return (
    <section id="processo" className="relative py-24 md:py-32 bg-slim-ink overflow-hidden">
      <div aria-hidden className="absolute -top-10 left-10 w-[40vw] h-[40vw] bg-slim-red/[0.05] blur-[120px] rounded-full" />
      <div aria-hidden className="absolute -bottom-10 right-10 w-[40vw] h-[40vw] bg-slim-blue/[0.05] blur-[120px] rounded-full" />

      <div className="relative max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 font-head uppercase tracking-[0.3em] text-xs text-white/50">
            <span className="w-8 h-px bg-white/40" />
            Processo
            <span className="w-8 h-px bg-white/40" />
          </div>
          <h2 className="mt-4 font-head text-4xl md:text-6xl uppercase leading-[1] tracking-tight">
            Em 3 passos <br className="md:hidden" />
            seu <span className="neon-red idle-flicker">neon</span> acende.
          </h2>
        </div>

        {/* Power cord connecting steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-3">
          {/* horizontal cord (desktop only) */}
          <div aria-hidden className="hidden md:block absolute top-[58px] left-[15%] right-[15%] cord" />

          {STEPS.map((s) => (
            <div key={s.n} className="relative group">
              {/* Number node */}
              <div className="relative flex items-center justify-center">
                <div
                  className={`relative z-10 w-28 h-28 rounded-full border-2 flex flex-col items-center justify-center font-head transition group-hover:scale-105 ${
                    s.accent === 'red'
                      ? 'border-slim-red text-slim-red'
                      : s.accent === 'blue'
                      ? 'border-slim-blue text-slim-blue'
                      : 'border-white text-white'
                  }`}
                  style={{
                    background: '#050507',
                    boxShadow:
                      s.accent === 'red'
                        ? '0 0 18px rgba(255,0,0,0.55), inset 0 0 14px rgba(255,0,0,0.25)'
                        : s.accent === 'blue'
                        ? '0 0 18px rgba(0,12,255,0.55), inset 0 0 14px rgba(0,12,255,0.25)'
                        : '0 0 18px rgba(255,255,255,0.35), inset 0 0 14px rgba(255,255,255,0.15)'
                  }}
                >
                  <div className="text-2xl leading-none">{s.icon}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.3em] opacity-80">{s.n}</div>
                </div>
              </div>

              <div className="mt-8 text-center px-4">
                <h3 className="font-head text-2xl uppercase tracking-tight">{s.titulo}</h3>
                <p className="mt-3 text-white/65 leading-relaxed text-sm md:text-base">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
