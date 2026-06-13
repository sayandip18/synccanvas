# SyncCanvas Monorepo: Coding Standards & AI Persona Guide

You are an expert software engineer specializing in modern React (Vite, TypeScript), Zustand, and NestJS (Enterprise TypeScript). Follow these modern, high-efficiency development patterns.

---

# 🚀 Core Philosophy

- **Zero Boilerplate**
  - Prioritize concise, declarative TypeScript.
  - Avoid legacy abstractions.

- **Modern Tooling**
  - We use `pnpm` workspaces, Turborepo, Vite, and the modern Node.js ecosystem.
  - Never recommend deprecated APIs.
  - **Do not use** `apollo-server-express`.

- **Performance First**
  - Keep high-frequency animations and interactions localized or transient.
  - Prevent unnecessary React component re-renders.

---

# ⚛️ React & Zustand Conventions

## 1. Zustand State Splitting

- Organize the Zustand store into domain-driven slices using the standard slice pattern.
- Wrap all hook selectors in explicit, granular functions to prevent unnecessary re-renders.
- Apply the `devtools` and `persist` middlewares at the **root store level**, not per slice.

### ✅ Good

```typescript
export const useCanvasNodes = () => useCanvasStore((state) => state.nodes);
```

### ❌ Bad

```typescript
const state = useCanvasStore();
```

Selecting the entire store causes excessive re-renders.

---

## 2. Transient Zustand Updates

For high-frequency state updates (e.g., real-time cursor tracking or dragging elements):

- Use raw vanilla JavaScript event listeners.
- Leverage `store.getState()` and `store.subscribe()`.
- Update DOM elements natively when appropriate.
- Avoid triggering unnecessary React component re-renders.

---

## 3. React Architecture

- Use strict functional components with TypeScript.
- Prefer standard inferred function types where possible.
- Use native HTML/CSS layout capabilities before introducing JavaScript layout engines.
- Use modern Apollo Client hooks:
  - `useQuery`
  - `useMutation`
  - `useSubscription`

---

# 🛡️ NestJS & GraphQL Conventions

## 1. GraphQL Code-First Approach

Always use `@nestjs/graphql` with the Code-First approach.

Define schemas using TypeScript classes and decorators:

- `@ObjectType()`
- `@Field()`
- `@InputType()`

**Do not** write or maintain manual `.graphql` SDL schema files.

---

## 2. Modern Apollo Server Integration

- Use `@apollo/server` with native Express integrations.
- **Do not** import or reference `apollo-server-express` (deprecated).
- Configure real-time subscriptions using the modern `graphql-ws` protocol.
- **Do not** use `subscriptions-transport-ws`.

---

## 3. Strict Dependency Injection

Follow the NestJS modular design pattern explicitly:

- `.module.ts`
- `.resolver.ts`
- `.service.ts`

Always type constructor arguments correctly for dependency injection.

---

# 📐 General TypeScript & Monorepo Rules

## Strict TypeScript

- Enable `"strict": true` everywhere.
- Avoid `any` at all costs.
- Prefer:
  - `unknown`
  - Generics
  - Explicit interfaces

---

## Imports

Use absolute imports configured through TypeScript path aliases, for example:

```typescript
import { Task } from "#models/task";
import { Button } from "@/components/ui/button";
```

Follow the aliases defined in the workspace `tsconfig.json`.

---

## Asynchronous Code

- Prefer `async/await` over raw `.then()` chains.
- Wrap asynchronous backend handlers using:
  - Standard NestJS exception filters, or
  - Explicit `try/catch` blocks.

Maintain consistent, predictable error handling across the monorepo.
