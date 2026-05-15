import Image from 'next/image';
import { PORTFOLIO, VIDEOS, BRAND } from '@/lib/data';

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-slim-ink overflow-hidden">
      {/* faint grid */}
      <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage:
          'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div className="relative max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 font-head uppercase tracking-[0.3em] text-xs text-white/50">
              <span className="w-8 h-px bg-slim-blue" style={{ boxShadow: '0 0 8px #000cff' }} />
              Portfólio
            </div>
            <h2 className="mt-4 font-head text-4xl md:text-6xl uppercase leading-[1] tracking-tight">
              CADA PEÇA É <br className="md:hidden" />
              <span className="neon-blue idle-flicker">ÚNICA.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md md:text-right">
            Selecionamos trabalhos recentes do nosso ateliê em Sorocaba. Cada um foi feito sob medida para o cliente — o seu vai ser também.
          </p>
        </div>

        {/* Asymmetric masonry */}
        <div className="grid grid-cols-12 gap-3 md:gap-5">
          <Card src={PORTFOLIO[0].src} alt={PORTFOLIO[0].alt} className="col-span-12 md:col-span-7 row-span-2 aspect-[4/3] md:aspect-auto md:h-[520px]" priority />
          <Card src={PORTFOLIO[1].src} alt={PORTFOLIO[1].alt} className="col-span-6 md:col-span-5 aspect-[4/5]" />
          <Card src={PORTFOLIO[2].src} alt={PORTFOLIO[2].alt} className="col-span-6 md:col-span-5 aspect-[4/5]" />
          <Card src={PORTFOLIO[3].src} alt={PORTFOLIO[3].alt} className="col-span-12 md:col-span-4 aspect-square" />
          <Card src={PORTFOLIO[4].src} alt={PORTFOLIO[4].alt} className="col-span-6 md:col-span-4 aspect-square" />
          <Card src={PORTFOLIO[5].src} alt={PORTFOLIO[5].alt} className="col-span-6 md:col-span-4 aspect-square" />
        </div>

        {/* Video reel */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-head text-2xl md:text-3xl uppercase tracking-tight">
              Vendo em <span className="neon-red">movimento</span>
            </h3>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener"
              className="text-xs md:text-sm uppercase tracking-[0.2em] font-head text-white/60 hover:text-white border-b border-white/20 hover:border-white pb-1 transition"
            >
              Mais no Instagram {BRAND.instagramHandle} →
            </a>
          </div>

          <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x-mandatory pb-2 -mx-5 px-5 md:mx-0 md:px-0">
            {VIDEOS.map((src, i) => (
              <video
                key={src}
                src={src}
                muted
                loop
                playsInline
                autoPlay
                className="flex-shrink-0 w-[78vw] sm:w-[60vw] md:w-[34%] aspect-[9/16] object-cover border border-white/10 hover:border-white/40 transition"
                style={{ boxShadow: i % 2 === 0 ? '0 0 30px rgba(255,0,0,0.18)' : '0 0 30px rgba(0,12,255,0.22)' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  src,
  alt,
  className = '',
  priority = false
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={`relative group overflow-hidden border border-white/10 hover:border-white/40 transition ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition duration-700 group-hover:scale-105"
        priority={priority}
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
      <figcaption className="absolute bottom-0 inset-x-0 p-4 text-xs uppercase tracking-[0.18em] font-head text-white/90 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition duration-500">
        {alt}
      </figcaption>
    </figure>
  );
}
