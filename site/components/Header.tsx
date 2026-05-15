import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/lib/data';

export default function Header() {
  return (
    <header className="absolute top-0 inset-x-0 z-40">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logos/logo-mark.png"
            alt="Slim Concept"
            width={44}
            height={44}
            className="w-9 h-9 md:w-11 md:h-11 drop-shadow-[0_0_18px_rgba(0,12,255,0.7)] transition-all group-hover:drop-shadow-[0_0_28px_rgba(0,12,255,0.9)]"
            priority
          />
          <span className="hidden sm:block font-head text-xl tracking-[0.2em] text-white/90 group-hover:text-white">
            SLIM<span className="text-slim-red">.</span>CONCEPT
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.18em] font-head text-white/70">
          <a href="#portfolio" className="hover:text-white transition">Portfólio</a>
          <a href="#categorias" className="hover:text-white transition">Categorias</a>
          <a href="#processo" className="hover:text-white transition">Processo</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>

        <a
          href={BRAND.whatsappUrl}
          target="_blank"
          rel="noopener"
          className="shine inline-flex items-center gap-2 px-4 md:px-5 py-2.5 border border-slim-red/60 bg-slim-red/10 text-white text-xs md:text-sm font-head uppercase tracking-[0.18em] hover:bg-slim-red/20 hover:border-slim-red transition relative"
          style={{ boxShadow: '0 0 18px rgba(255,0,0,0.35), inset 0 0 14px rgba(255,0,0,0.18)' }}
        >
          <span className="hidden sm:inline">Orçamento</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </header>
  );
}
