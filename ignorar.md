# ignorar.md — O que NUNCA Fazer neste Projeto

> Lista de restrições absolutas. O Claude deve verificar este arquivo antes de qualquer entrega e nunca violar o que está aqui, independente do que for pedido.

---

## Arquivos e pastas intocáveis

> Liste arquivos que nunca devem ser editados sem confirmação explícita.

- _ex.: `src/core/auth/` — módulo de autenticação crítico, nunca alterar sem revisão humana_
- _ex.: `migrations/` — nunca gerar migration destrutiva_
- _ex.: `.env.production` — nunca ler nem modificar_

---

## Tecnologias proibidas

> Bibliotecas, frameworks ou serviços que não devem ser sugeridos ou usados.

- _ex.: Não usar `moment.js` — projeto usa `date-fns`_
- _ex.: Não sugerir AWS — infraestrutura é toda GCP_
- _ex.: Não usar `class components` em React — projeto usa apenas hooks_

---

## Padrões proibidos

> Anti-padrões ou práticas que o time decidiu abolir.

- _ex.: Nunca usar `any` em TypeScript_
- _ex.: Nunca fazer query direta ao banco fora da camada de repositório_
- _ex.: Nunca expor stack trace em respostas de API para o cliente_

---

## Segurança e compliance

- _ex.: Nunca logar CPF, senha, token ou dados sensíveis_
- _ex.: Nunca hardcodar credenciais — sempre variáveis de ambiente_
- _ex.: Dados de usuários só podem ser acessados por rotas autenticadas_

---

## Comportamentos do Claude que devem ser evitados aqui

- _ex.: Não sugerir refatoração geral quando a tarefa é pontual_
- _ex.: Não reescrever arquivos inteiros quando só um trecho precisa mudar_
- _ex.: Não perguntar mais de uma coisa por mensagem_
