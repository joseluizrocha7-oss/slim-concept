# Projeto Skeleton — Estrutura Base para Projetos com Claude

Este é um esqueleto de projeto pronto para ser copiado e adaptado a qualquer novo projeto.

## Como usar

1. **Copie esta pasta** para o novo projeto.
2. **Preencha os arquivos de contexto** em `_contexto/` antes de começar a trabalhar com o Claude:
   - `empresa.md` → descreva o cliente/empresa e o projeto
   - `preferencias.md` → como o cliente quer trabalhar
   - `estrategias.md` → decisões técnicas e de produto já tomadas
3. **Ajuste as restrições** em `.claude/ignorar.md` conforme o projeto.
4. **Personalize os atalhos** em `.claude/comandos.md` se quiser novos comandos.
5. O `CLAUDE.md` na raiz já orienta o Claude a ler tudo isso automaticamente.

## Estrutura

```
projeto/
├── CLAUDE.md                  # Instruções de inicialização para o Claude
├── README.md                  # Este arquivo
├── _contexto/
│   ├── empresa.md             # Quem é o cliente/empresa e o que faz
│   ├── preferencias.md        # Estilo de trabalho e entregas
│   └── estrategias.md         # Stack, arquitetura e decisões técnicas
└── .claude/
    ├── comandos.md            # Atalhos de comando (/revisar, /rapido, etc.)
    └── ignorar.md             # Restrições absolutas do projeto
```

## Fluxo esperado

```
Novo projeto
    → Copiar skeleton
    → Preencher _contexto/
    → Abrir conversa com Claude
    → Claude lê CLAUDE.md → lê _contexto/ → começa a trabalhar
```
