# Architecture

## Overview

This repository uses a monorepo architecture to separate product code from reusable UI foundations.

The runtime flow is:

1. `packages/tokens`
2. `packages/ui`
3. `apps/web`

The portfolio app consumes the token package and the UI package. The UI package never depends on the portfolio app.

## Packages

### `packages/tokens`

Purpose:

- expose CSS custom properties
- centralize spacing, color, radius, typography, and semantic aliases
- provide the visual foundation for both the app and Storybook

Key files:

- `packages/tokens/src/styles.css`
- `packages/tokens/src/tokens.json`

### `packages/ui`

Purpose:

- host reusable primitives and composable components
- isolate component CSS, types, tests, and Storybook stories by component folder
- enforce accessibility and API consistency before app consumption

Current components:

- `avatar`
- `badge`
- `button`
- `card`

Component folder convention:

```text
packages/ui/src/components/<component>/
  <component>.tsx
  <component>.css
  <component>.types.ts
  <component>.test.tsx
  <component>.stories.tsx
  index.ts
```

### `apps/web`

Purpose:

- render the public portfolio
- compose feature-specific content from the portfolio domain
- consume `@levi/tokens` and `@levi/ui`

Feature convention:

```text
apps/web/src/features/portfolio/components/<Component>/
  <Component>.tsx
  <Component>.css
  <Component>.types.ts
  <Component>.content.ts
  index.ts
```

This keeps structure, copy, styles, and types isolated per feature component.

## Styling model

- global tokens live in `packages/tokens`
- component styles live next to the component
- CSS classes use the `DSLEVIS` prefix
- CSS nesting is used where it improves readability
- the app consumes only one visual theme: dark monochrome

## Content model

Portfolio copy is not embedded in `App.tsx`.

Instead:

- layout/orchestration stays in React components
- content lives in per-feature `*.content.ts` files
- locale switching uses `pt` and `en` content objects

This makes copy changes safer and reduces UI/component churn.

## Accessibility model

Accessibility is handled at two levels:

1. semantic HTML and keyboard behavior in components
2. automated checks with `jest-axe` and Storybook a11y addon

The UI package is the main enforcement layer, because failures there propagate to the app.

## Legacy strategy

The `OLD` folder is intentionally preserved as reference material for content, historical projects, and migration context.

It is not part of the active build.

## Validation flow

Recommended local validation sequence:

```bash
nvm use
pnpm run lint
pnpm run test
pnpm run build
pnpm run build-storybook
```
