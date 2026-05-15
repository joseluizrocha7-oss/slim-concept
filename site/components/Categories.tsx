import { CATEGORIAS, BRAND } from '@/lib/data';

export default function Categories() {
  return (
    <section id="categorias" className="relative py-24 md:py-32 brick-wall overflow-hidden">
      <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-slim-blue/10 blur-[80px]" />

      <div className="relative max-w-[1280px] mx-auto px-5 md:px-10">
        <SectionHeader
          kicker="Categorias"
          title={<>O QUE A GENTE <span className="neon-red idle-flicker">ACENDE</span></>}
          subtitle="Cinco terrenos onde a Slim Concept aparece. Do altar à vitrine."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {CATEGORIAS.map((c, i) => (
            <a
              key={c.nome}
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener"
              className="group relative aspect-[3/4] lg:aspect-[2/3] border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent overflow-hidden hover:border-white/40 transition"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Color wash on hover */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 100%, ${c.accent}33, transparent 65%)`
                }}
              />
              {/* Index number */}
              <span className="absolute top-4 left-4 font-head text-xs uppercase tracking-[0.25em] text-white/40">
                /0{i + 1}
              </span>
              {/* Sample neon text */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 text-center">
                <div
                  className="font-script text-4xl md:text-5xl idle-flicker"
                  style={{
                    color: c.accent === '#FF0000' ? '#ffd6d6' : c.accent === '#000CFF' ? '#d6dcff' : '#fff6ed',
                    textShadow:
                      c.accent === '#FF0000'
                        ? '0 0 4px #fff, 0 0 11px #ff4040, 0 0 19px #ff1010, 0 0 40px #ff0000'
                        : c.accent === '#000CFF'
                        ? '0 0 4px #fff, 0 0 11px #4060ff, 0 0 19px #0020ff, 0 0 40px #000cff'
                        : '0 0 4px #fff, 0 0 10px #ffeacc, 0 0 22px #ffcf85, 0 0 42px #ff9d44'
                  }}
                >
                  {c.sample}
                </div>
              </div>
              {/* Bottom info */}
              <div className="absolute inset-x-0 bottom-0 p-5 space-y-2 border-t border-white/10 bg-gradient-to-t from-black/80 to-transparent">
                <div className="font-head text-lg uppercase tracking-[0.18em]">{c.nome}</div>
                <p className="text-xs text-white/60 leading-relaxed">{c.pitch}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  kicker,
  title,
  subtitle
}: {
  kicker: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        <div className="flex items-center gap-3 font-head uppercase tracking-[0.3em] text-xs text-white/50">
          <span className="w-8 h-px bg-slim-red" style={{ boxShadow: '0 0 8px #ff0000' }} />
          {kicker}
        </div>
        <h2 className="mt-4 font-head text-4xl md:text-6xl uppercase leading-[1] tracking-tight">{title}</h2>
      </div>
      {subtitle && <p className="text-white/60 max-w-md md:text-right">{subtitle}</p>}
    </div>
  );
}
