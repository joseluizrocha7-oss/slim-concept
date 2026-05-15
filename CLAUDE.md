# CLAUDE.md — Slim Concept Project

> Este arquivo orienta o comportamento do Claude para o projeto Slim Concept.

---

## 🏗️ Estrutura do Projeto

```
Slim Concept/
├── landing-page/           # Site Principal (PROD)
│   ├── index.html          # Landing Page
│   ├── portfolio.html      # Galeria de fotos/vídeos
│   ├── style.css           # Design System (Neon/Cyber)
│   └── script.js           # Lógica (FAQ, Menu, Filtros)
├── concept-v2/             # Protótipo Experimental
├── README.md               # Documentação Geral
├── empresa.md              # Contexto do Negócio
└── estrategias.md          # Stack e Decisões Técnicas
```

---

## 🎨 Design System (Cyber-Slim)

- **Cores**: 
  - Red: `#ff2d2d` (Glow: `rgba(255, 0, 0, 0.6)`)
  - Blue: `#2d38ff` (Glow: `rgba(0, 12, 255, 0.6)`)
  - BG: `#090909`
- **Tipografia**:
  - Títulos: 'Bebas Neue' (Display)
  - Corpo: 'Inter' ou 'Manrope' (Sans-serif)
- **Efeitos**: 
  - Glassmorphism em headers e overlays.
  - Neon glow intenso em logos e CTAs.
  - Hovers com escala e brilho.

---

## 🚀 Regras de Implementação

1. **Performance**: Sempre usar `loading="lazy"` em imagens e `width/height` em vídeos.
2. **Ícones**: Usar `Lucide Icons` (`i data-lucide="..."`) e inicializar no final do body.
3. **Responsividade**: Mobile-first é mandatório. Testar sempre em `500px` (viewport padrão mobile).
4. **Git**: Sempre commit após mudanças significativas no layout ou funcionalidades.

---

## ✅ Comandos Úteis

- `git status`: Verificar alterações.
- `git commit -m "tipo: descrição"`: Commitar mudanças.
- `git push`: Subir para o GitHub.

---
Última atualização: Maio 2026.
