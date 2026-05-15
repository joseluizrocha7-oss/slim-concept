import type { Metadata } from 'next';
import { Monoton, Syne, Manrope } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const monoton = Monoton({ subsets: ['latin'], weight: '400', variable: '--font-monoton', display: 'swap' });
const syne = Syne({ subsets: ['latin'], weight: ['500', '600', '700', '800'], variable: '--font-syne', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-manrope', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://slimconcept.com.br'),
  title: 'Slim Concept — Neon LED personalizado em Sorocaba',
  description:
    'Letreiros e painéis de neon LED em acrílico, feitos sob medida para casamentos, formaturas, festas e comércios. Sorocaba/SP — enviamos para todo Brasil.',
  keywords: ['neon led personalizado', 'neon sorocaba', 'painel neon', 'letreiro neon casamento'],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Slim Concept',
    title: 'Slim Concept — Neon LED personalizado',
    description: 'Transformamos a sua festa, sua casa e o seu comércio em luz.',
    images: ['/logos/logo-lockup.jpg']
  },
  icons: { icon: '/logos/logo-mark.png' }
};

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || 'G-XXXXXXXXXX';
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '0000000000000000';

// Inline script: aplica tema ANTES do paint pra evitar flash
const themeScript = `
(function(){
  try {
    var stored = localStorage.getItem('slim-theme');
    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    var useLight = stored === 'light' || (!stored && prefersLight);
    if (useLight) document.documentElement.classList.add('light');
    document.documentElement.classList.add('theme-ready');
  } catch(e) {}
})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${monoton.variable} ${syne.variable} ${manrope.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-bg text-fg font-body antialiased">
        {children}

        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_ID}');
        `}</Script>
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){
          n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
          s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,
          'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}</Script>
      </body>
    </html>
  );
}
