# Slim Concept — Landing Page

Site institucional Fase 1 (Next.js 14 + Tailwind CSS).
Demo-ready para a reunião de 2026-05-18.

## Rodar local

```bash
cd site
npm install
npm run dev
```

Abrir http://localhost:3000

## Variáveis de ambiente (analytics)

Antes do go-live, copiar `.env.example` para `.env.local` e preencher:

```
NEXT_PUBLIC_GA4_ID=G-...           # criar em analytics.google.com
NEXT_PUBLIC_META_PIXEL_ID=...      # criar em business.facebook.com (Events Manager)
```

Sem esses valores o site funciona normalmente — os scripts ficam carregados com IDs placeholder.

## Build de produção

```bash
npm run build
npm start
```

## Deploy sugerido (Fase 1)

- **Vercel** (grátis): conectar repositório, ele detecta Next.js sozinho.
- Domínio customizado configurado no painel da Vercel + DNS apontado.

## Estrutura

```
site/
├── app/
│   ├── layout.tsx        # fontes, metadata, GA4, Meta Pixel
│   ├── page.tsx          # composição da LP
│   └── globals.css       # neon, brick wall, animações
├── components/           # Hero, Portfolio, Process, FAQ etc.
├── lib/data.ts           # textos, depoimentos, FAQs, links
├── public/
│   ├── logos/            # marca extraída do PPTX
│   ├── portfolio/        # fotos do Insta selecionadas
│   └── videos/           # reels selecionados
└── tailwind.config.ts    # tokens da marca (#FF0000 / #000CFF)
```

## Próximos passos pós-reunião

1. Trocar IDs de GA4 e Pixel pelos reais
2. Apontar domínio (slimconcept.com.br?) na Vercel
3. Atualizar 3 depoimentos com nomes/contextos reais (estão em `lib/data.ts`)
4. Configurar Google Meu Negócio com link pro site
5. Subir os IDs no painel para começar a popular pixel/GA4
6. Iniciar Fase 2 (Meta Ads + Google Ads)

## Decisões de design

- **Sem framer-motion** — animações 100% CSS para evitar dep desnecessária e manter bundle leve
- **Fontes Google:** Monoton + Anton + Great Vibes + Plus Jakarta Sans (carregadas via `next/font`)
- **Brick wall** gerado por CSS (sem asset pesado)
- **Acervo Insta** já baixado e otimizado pelo `next/image`
