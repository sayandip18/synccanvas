import type { StateCreator } from 'zustand';
import type { CanvasTransform } from '../../types/board';
import type { BoardStore } from '../types';

export interface CanvasSlice {
  canvasTransform: CanvasTransform;
  updateCardPosition: (cardId: string, x: number, y: number) => void;
  setCanvasTransform: (transform: Partial<CanvasTransform>) => void;
}

export const createCanvasSlice: StateCreator<BoardStore, [], [], CanvasSlice> = (set) => ({
  canvasTransform: { x: 0, y: 0, scale: 1 },

  // Call via useBoardStore.getState().updateCardPosition() during active drag
  // to avoid triggering subscriber re-renders on every pointer event.
  updateCardPosition: (cardId, x, y) =>
    set((state) => {
      const card = state.cards[cardId];
      if (!card) return state;
      return { cards: { ...state.cards, [cardId]: { ...card, x, y } } };
    }),

  setCanvasTransform: (transform) =>
    set((state) => ({
      canvasTransform: { ...state.canvasTransform, ...transform },
    })),
});
