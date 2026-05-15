import Image from 'next/image';
import { BRAND } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5 space-y-5">
          <div className="flex items-center gap-3">
            <Image
              src="/logos/logo-mark.png"
              alt="Slim Concept"
              width={48}
              height={48}
              className="w-11 h-11 drop-shadow-[0_0_18px_rgba(0,12,255,0.7)]"
            />
            <span className="font-head text-2xl tracking-[0.2em]">
              SLIM<span className="text-slim-red">.</span>CONCEPT
            </span>
          </div>
          <p className="text-white/55 max-w-sm leading-relaxed">
            Neon LED personalizado em acrílico. Fabricação própria em Sorocaba/SP. Entrega para todo Brasil.
          </p>
          <p className="font-script text-2xl text-slim-warm/90 italic">
            "a sua festa, a sua casa, o seu nome — em luz."
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="font-head uppercase tracking-[0.25em] text-xs text-white/40 mb-4">Navegação</div>
          <ul className="space-y-3 text-white/80">
            <li><a href="#categorias" className="hover:text-white">Categorias</a></li>
            <li><a href="#portfolio" className="hover:text-white">Portfólio</a></li>
            <li><a href="#processo" className="hover:text-white">Processo</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="font-head uppercase tracking-[0.25em] text-xs text-white/40 mb-4">Fale com a gente</div>
          <ul className="space-y-3 text-white/80">
            <li>
              <a href={BRAND.whatsappUrl} target="_blank" rel="noopener" className="hover:text-white inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slim-red" style={{ boxShadow: '0 0 6px #ff0000' }} />
                WhatsApp — {BRAND.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={BRAND.instagram} target="_blank" rel="noopener" className="hover:text-white inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slim-blue" style={{ boxShadow: '0 0 6px #000cff' }} />
                Instagram — {BRAND.instagramHandle}
              </a>
            </li>
            <li>
              <a href={BRAND.gmnUrl} target="_blank" rel="noopener" className="hover:text-white inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Google — {BRAND.city}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40 font-head uppercase tracking-[0.25em]">
          <div>© {new Date().getFullYear()} Slim Concept — todos os direitos reservados</div>
          <div>Feito com luz em {BRAND.city}</div>
        </div>
      </div>
    </footer>
  );
}
