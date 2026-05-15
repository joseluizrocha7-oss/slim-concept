# comandos.md — Comandos e Atalhos do Projeto

> Atalhos que o Claude reconhece neste projeto. Use-os nas mensagens para acionar comportamentos específicos sem precisar explicar tudo novamente.

---

## Atalhos de execução

| Comando | O que faz |
|---------|-----------|
| `/revisar` | Revisar o último código entregue: bugs, edge cases, melhorias rápidas |
| `/refatorar` | Refatorar mantendo comportamento — foco em legibilidade e padrões do projeto |
| `/testar` | Gerar testes para o código mais recente (unit por padrão) |
| `/doc` | Gerar documentação do que foi feito (README, JSDoc, docstring) |
| `/explicar` | Explicar o código atual em linguagem simples |
| `/planejar` | Antes de codar: listar arquivos, etapas e riscos da tarefa |
| `/status` | Resumo do que foi feito na sessão e o que está pendente |

---

## Atalhos de contexto

| Comando | O que faz |
|---------|-----------|
| `/empresa` | Relembrar e resumir o contexto da empresa/cliente |
| `/stack` | Listar a stack atual do projeto |
| `/decisoes` | Listar decisões técnicas registradas em `estrategias.md` |

---

## Atalhos de modo

| Comando | O que faz |
|---------|-----------|
| `/rapido` | Modo velocidade máxima — entrega sem explicação, só o código |
| `/detalhado` | Modo explicativo — comentar cada passo e decisão |
| `/seguro` | Modo cauteloso — confirmar antes de alterar arquivos existentes |

---

## Como adicionar novos comandos

Basta adicionar uma linha na tabela acima com o formato:
```
| `/meu-comando` | Descrição do que deve fazer |
```

O Claude irá reconhecer e executar automaticamente quando encontrar o atalho na mensagem.
