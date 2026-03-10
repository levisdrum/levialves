# Levi Alves Portfolio Monorepo

Portfólio e base de Design System organizados em monorepo com React, Vite, Storybook, Vitest, `jest-axe` e design tokens.

## Objetivo

- manter a aplicação do portfólio separada da biblioteca de UI
- centralizar tokens e estilos globais
- documentar componentes em Storybook
- validar acessibilidade e comportamento com testes automatizados

## Stack

- React 19
- Vite 6
- TypeScript 5.9
- pnpm workspaces
- Storybook 9
- Vitest + Testing Library
- `jest-axe`
- Radix primitives + `class-variance-authority`

## Estrutura

- `apps/web`
  aplicação do portfólio
- `packages/tokens`
  tokens e CSS custom properties
- `packages/ui`
  componentes reutilizáveis, testes e Storybook
- `docs`
  documentação de arquitetura e qualidade
- `OLD`
  material legado usado só como referência

## Como rodar

```bash
nvm use
corepack enable
pnpm install
pnpm run dev
```

## Scripts

```bash
pnpm run setup
pnpm run clean
pnpm run dev
pnpm run build
pnpm run lint
pnpm run test
pnpm run storybook
pnpm run build-storybook
```

## Qualidade

- testes unitários na UI
- verificações de acessibilidade com `axe-core`
- documentação de componentes via Storybook
- lint no monorepo
- build de produção do app e do Storybook

## Documentação

- [Arquitetura](./docs/architecture.md)
- [Qualidade](./docs/quality.md)
