import type { StateCreator } from 'zustand';
import type { ViewMode } from '../../types/board';
import type { BoardStore } from '../types';

export interface BoardMetaSlice {
  boardId: string | null;
  viewMode: ViewMode;
  isLoading: boolean;
  setBoardId: (id: string | null) => void;
  setViewMode: (mode: ViewMode) => void;
  setLoading: (loading: boolean) => void;
}

export const createBoardMetaSlice: StateCreator<BoardStore, [], [], BoardMetaSlice> = (set) => ({
  boardId: null,
  viewMode: 'KANBAN',
  isLoading: false,
  setBoardId: (id) => set({ boardId: id }),
  setViewMode: (mode) => set({ viewMode: mode }),
  setLoading: (loading) => set({ isLoading: loading }),
});
