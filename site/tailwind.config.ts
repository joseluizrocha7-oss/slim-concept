import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        'bg-2': 'rgb(var(--bg-2) / <alpha-value>)',
        'bg-3': 'rgb(var(--bg-3) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        'fg-2': 'rgb(var(--fg-2) / <alpha-value>)',
        'fg-3': 'rgb(var(--fg-3) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        red: {
          DEFAULT: 'rgb(var(--red) / <alpha-value>)',
          pure: '#FF0000'
        },
        blue: {
          DEFAULT: 'rgb(var(--blue) / <alpha-value>)',
          pure: '#000CFF'
        }
      },
      fontFamily: {
        display: ['var(--font-monoton)', 'Impact', 'sans-serif'],
        head: ['var(--font-syne)', 'Helvetica Neue', 'sans-serif'],
        body: ['var(--font-manrope)', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em'
      },
      animation: {
        'fade-up': 'fadeUp 0.85s cubic-bezier(.2,.7,.2,1) both',
        'draw-tube': 'drawTube 2.0s cubic-bezier(.65,.05,.36,1) forwards'
      },
      keyframes: {
        fadeUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        drawTube: {
          '0%': { strokeDashoffset: '1400', opacity: '0' },
          '20%': { opacity: '1' },
          '100%': { strokeDashoffset: '0', opacity: '1' }
        }
      }
    }
  },
  plugins: []
};
export default config;
