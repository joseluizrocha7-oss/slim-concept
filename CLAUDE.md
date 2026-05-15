# CLAUDE.md — Inicialização do Projeto

> Leia este arquivo **antes de qualquer ação**. Ele orienta o comportamento do Claude durante todo o projeto.

---

## Passo 1 — Carregar contexto

Ao iniciar, ler obrigatoriamente (se existirem):

1. `_contexto/empresa.md` — quem é o cliente/empresa e o que faz
2. `_contexto/preferencias.md` — como o cliente quer trabalhar
3. `_contexto/estrategias.md` — decisões técnicas e de produto já tomadas
4. `.claude/comandos.md` — atalhos e comandos customizados disponíveis
5. `.claude/ignorar.md` — o que nunca fazer neste projeto

Se algum desses arquivos estiver **vazio ou ausente**, avisar ao usuário antes de continuar.

---

## Passo 2 — Entender o pedido

- Reformular a tarefa em 1 frase antes de executar, se for complexa.
- Se faltar informação crítica, fazer **uma única pergunta** objetiva.
- Não perguntar o óbvio. Assumir o que der, informar o que foi assumido.

---

## Passo 3 — Executar com velocidade e qualidade

- Prioridade: **entregar rápido e funcionando**.
- Seguir as convenções já existentes no projeto (checar código ao redor antes de escrever).
- Documentação detalhada só se explicitamente pedida — foco é no código/entrega.
- Avisar se uma decisão pode gerar dívida técnica, mas não travar por isso.

---

## Passo 4 — Resumo rápido ao final

Sempre encerrar com:
- ✅ O que foi feito
- ⚠️ O que ficou pendente ou exige atenção
- 💡 Sugestão de próximo passo (opcional)

---

## Estrutura do projeto

```
projeto/
├── CLAUDE.md                  # Este arquivo
├── _contexto/
│   ├── empresa.md             # Quem é o cliente/empresa
│   ├── preferencias.md        # Como o cliente quer trabalhar
│   └── estrategias.md         # Decisões técnicas e de produto
├── .claude/
│   ├── comandos.md            # Atalhos e comandos customizados
│   └── ignorar.md             # O que nunca fazer neste projeto
├── README.md                  # Documentação pública do projeto
├── src/                       # Código-fonte
├── tests/                     # Testes
└── docs/                      # Documentação técnica (preencher depois se necessário)
```

---

## Regras universais

- ❌ Nunca apagar ou sobrescrever arquivos sem confirmar.
- ❌ Nunca instalar dependências sem avisar.
- ❌ Nunca inventar bibliotecas ou APIs que não existem.
- ✅ Sempre verificar o que já existe antes de criar algo novo.
- ✅ Stack mista — checar linguagem/framework do projeto antes de assumir.
