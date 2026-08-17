
---

### `src/stores/README.md`

```md
# Stores (`stores`)

## Purpose

The `stores` directory contains client-side application state managed through the chosen state-management solution.

GameVerse currently uses Zustand for client-side state.

## Responsibilities

Stores may manage:

- UI state
- User preferences
- Local application state
- Temporary client-side state
- Feature-independent client state

## Example Structure

```text
stores/
├── appStore.ts
├── uiStore.ts
├── preferencesStore.ts
└── README.md