# estrategias.md — Estratégias e Decisões do Projeto

> Registra decisões técnicas, de produto e de arquitetura já tomadas. O Claude não questiona nem sugere mudar o que está aqui — apenas aplica.

---

## Stack definida

| Camada | Tecnologia | Observação |
|--------|------------|------------|
| Frontend | _ex.: Next.js 14_ | _App Router_ |
| Backend | _ex.: FastAPI_ | _Python 3.12_ |
| Banco de dados | _ex.: PostgreSQL_ | _via Supabase_ |
| Auth | _ex.: Clerk_ | — |
| Deploy | _ex.: Vercel + Railway_ | — |
| CI/CD | _ex.: GitHub Actions_ | — |

---

## Arquitetura

> Descreva brevemente o modelo arquitetural adotado.

_ex.: Monolito modular no backend, separado em módulos por domínio (users, billing, notifications). Frontend consome API REST. Sem microsserviços por enquanto._

---

## Decisões técnicas registradas (ADRs simplificados)

> Cada decisão deve ter: o quê, por quê, e o que foi descartado.

### [001] _Título da decisão_
- **Decisão:** _ex.: Usar Prisma como ORM_
- **Motivo:** _ex.: Time já conhece, tipagem nativa com TypeScript_
- **Alternativas descartadas:** _ex.: TypeORM (verboso), Drizzle (muito novo)_
- **Data:** _ex.: 2025-01_

### [002] _Título da decisão_
- **Decisão:**
- **Motivo:**
- **Alternativas descartadas:**
- **Data:**

---

## Estratégia de produto

- **MVP / fase atual:** _ex.: MVP — foco em validar o fluxo de checkout_
- **O que está fora do escopo agora:** _ex.: Notificações push, app mobile, relatórios avançados_
- **Próximas fases planejadas:** _ex.: Fase 2 — painel admin. Fase 3 — integração com ERP._

---

## Integrações externas

| Serviço | Finalidade | Status |
|---------|------------|--------|
| _ex.: Stripe_ | _Pagamentos_ | _Produção_ |
| _ex.: SendGrid_ | _E-mails transacionais_ | _Produção_ |
| _ex.: Sentry_ | _Monitoramento de erros_ | _Configurar_ |

---

## Padrões obrigatórios neste projeto

- _ex.: Toda rota da API deve ter validação de schema com Zod/Pydantic_
- _ex.: Variáveis de ambiente nunca hardcoded — sempre via `.env`_
- _ex.: Migrations versionadas e nunca reversão destrutiva em produção_
