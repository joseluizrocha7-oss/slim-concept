import { FAQS, BRAND } from '@/lib/data';

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 bg-slim-ink overflow-hidden">
      <div className="relative max-w-[1100px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4 md:sticky md:top-24 self-start">
            <div className="flex items-center gap-3 font-head uppercase tracking-[0.3em] text-xs text-white/50">
              <span className="w-8 h-px bg-slim-blue" style={{ boxShadow: '0 0 8px #000cff' }} />
              FAQ
            </div>
            <h2 className="mt-4 font-head text-4xl md:text-5xl uppercase leading-[1] tracking-tight">
              Dúvidas <br />
              <span className="neon-blue idle-flicker">frequentes.</span>
            </h2>
            <p className="mt-6 text-white/60 leading-relaxed">
              Não achou a sua aqui? Manda no WhatsApp que respondemos pessoalmente em minutos.
            </p>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-2 text-sm font-head uppercase tracking-[0.2em] text-white border-b border-slim-red/60 hover:border-slim-red pb-1 transition"
            >
              Falar agora
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>

          <div className="md:col-span-8 divide-y divide-white/10 border-y border-white/10">
            {FAQS.map((f, i) => (
              <details key={i} className="group py-5 md:py-6">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <div className="flex items-start gap-4">
                    <span className="font-head text-xs uppercase tracking-[0.25em] text-white/40 mt-1.5 w-8 shrink-0">/0{i + 1}</span>
                    <span className="font-head uppercase tracking-tight text-lg md:text-xl">{f.q}</span>
                  </div>
                  <span className="font-head text-2xl text-slim-red shrink-0 group-open:rotate-45 transition" style={{ filter: 'drop-shadow(0 0 6px #ff0000)' }}>+</span>
                </summary>
                <div className="mt-4 ml-12 text-white/65 leading-relaxed max-w-2xl">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
