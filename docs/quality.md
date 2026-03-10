# Quality and Testing

## Testing layers

The repository currently validates the UI library through:

- unit tests with Vitest
- DOM assertions with Testing Library
- accessibility checks with `jest-axe`
- Storybook documentation with addon a11y enabled

## Scope

The main quality target is `packages/ui`, because those components are reused by the portfolio app.

Current component coverage includes:

- render behavior
- variant rendering
- optional content rendering
- `asChild` composition where applicable
- automated accessibility checks

## Storybook

Storybook is used as the visual and documentation layer for the UI package.

Current configuration:

- React + Vite renderer
- `@storybook/addon-essentials`
- `@storybook/addon-a11y`
- autodocs enabled through component stories

Storybook entrypoint:

- `packages/ui/.storybook/main.ts`
- `packages/ui/.storybook/preview.ts`

## Commands

```bash
nvm use
pnpm run test
pnpm run storybook
pnpm run build-storybook
```

## Accessibility baseline

The project treats accessibility as a default engineering requirement.

That means:

- visible focus states
- semantic roles and labels
- keyboard-safe interactive patterns
- automated `axe-core` verification in the UI package

## Cleanup policy

The repository should not keep generated artifacts committed as source.

Disposable outputs include:

- `apps/web/dist`
- `packages/ui/storybook-static`
- coverage artifacts

Reference material in `OLD` is preserved intentionally and should not be treated as disposable build output.
