# preferencias.md — Preferências de Trabalho

> Define como o Claude deve se comportar neste projeto: ritmo, tom, nível de detalhe e estilo de entrega.

---

## Ritmo e prioridades

- **Velocidade vs. perfeição:** _ex.: Priorizar entrega rápida — qualidade mínima aceitável, refatorar depois se necessário_
- **Documentação:** _ex.: Só documentar quando explicitamente pedido. Foco no código._
- **Testes:** _ex.: Escrever testes apenas para lógica crítica de negócio_

---

## Tom e comunicação

- **Idioma das respostas:** _ex.: Português brasileiro_
- **Tom:** _ex.: Direto e objetivo. Sem rodeios. Pode ser informal._
- **Tamanho das respostas:** _ex.: Curtas por padrão. Detalhar só se pedido._
- **Perguntas:** _ex.: Fazer no máximo 1 pergunta por vez. Nunca travar a entrega por falta de info — assumir e avisar._

---

## Estilo de código

- **Comentários no código:** _ex.: Apenas onde a lógica não é óbvia_
- **Nomenclatura:** _ex.: Inglês para código, português para comentários e docs_
- **Formatação:** _ex.: Seguir o linter já configurado no projeto. Se não houver, usar o padrão da linguagem._

---

## Entregas

- **Formato padrão de resposta:**
  1. Código / entrega principal
  2. ✅ O que foi feito (2–3 linhas)
  3. ⚠️ Pontos de atenção (se houver)

- **Pull Requests / commits:** _ex.: Mensagens de commit em inglês no padrão Conventional Commits_

---

## Preferências específicas do cliente

> Qualquer outra preferência que não se encaixa acima.

- _ex.: Cliente prefere React a Vue — não sugerir mudança de framework_
- _ex.: Deploy sempre via GitHub Actions, nunca manual_
- _ex.: Reuniões às sextas — evitar entregas grandes na véspera_
