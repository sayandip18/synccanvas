import type { StateCreator } from 'zustand';
import type { BoardStore } from '../types';

export interface UISlice {
  activeCardId: string | null;
  setActiveCard: (cardId: string | null) => void;
}

export const createUISlice: StateCreator<BoardStore, [], [], UISlice> = (set) => ({
  activeCardId: null,
  setActiveCard: (cardId) => set({ activeCardId: cardId }),
});
