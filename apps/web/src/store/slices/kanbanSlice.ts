import type { StateCreator } from 'zustand';
import type { Card, Column } from '../../types/board';
import type { BoardStore } from '../types';

export interface KanbanSlice {
  columns: Column[];
  cards: Record<string, Card>;
  setColumns: (columns: Column[]) => void;
  setCards: (cards: Card[]) => void;
  moveCard: (cardId: string, toColumnId: string, newOrder: number) => void;
  moveColumn: (columnId: string, newOrder: number) => void;
  patchCard: (cardId: string, patch: Partial<Card>) => void;
}

export const createKanbanSlice: StateCreator<BoardStore, [], [], KanbanSlice> = (set) => ({
  columns: [],
  cards: {},

  setColumns: (columns) =>
    set({ columns: [...columns].sort((a, b) => a.order - b.order) }),

  setCards: (cards) =>
    set({ cards: Object.fromEntries(cards.map((c) => [c.id, c])) }),

  moveCard: (cardId, toColumnId, newOrder) =>
    set((state) => {
      const card = state.cards[cardId];
      if (!card) return state;
      return {
        cards: {
          ...state.cards,
          [cardId]: { ...card, columnId: toColumnId, order: newOrder },
        },
      };
    }),

  moveColumn: (columnId, newOrder) =>
    set((state) => ({
      columns: state.columns
        .map((col) => (col.id === columnId ? { ...col, order: newOrder } : col))
        .sort((a, b) => a.order - b.order),
    })),

  patchCard: (cardId, patch) =>
    set((state) => {
      const card = state.cards[cardId];
      if (!card) return state;
      return { cards: { ...state.cards, [cardId]: { ...card, ...patch } } };
    }),
});
