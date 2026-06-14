import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createBoardMetaSlice } from './slices/boardMetaSlice';
import { createKanbanSlice } from './slices/kanbanSlice';
import { createCanvasSlice } from './slices/canvasSlice';
import { createUISlice } from './slices/uiSlice';
import type { BoardStore } from './types';

export const useBoardStore = create<BoardStore>()(
  devtools(
    (...args) => ({
      ...createBoardMetaSlice(...args),
      ...createKanbanSlice(...args),
      ...createCanvasSlice(...args),
      ...createUISlice(...args),
    }),
    { name: 'BoardStore' },
  ),
);

// ─── Granular selectors ────────────────────────────────────────────────────────

export const useBoardId = () => useBoardStore((s) => s.boardId);
export const useViewMode = () => useBoardStore((s) => s.viewMode);
export const useIsLoading = () => useBoardStore((s) => s.isLoading);

export const useColumns = () => useBoardStore((s) => s.columns);
export const useCards = () => useBoardStore((s) => s.cards);
export const useCard = (id: string) => useBoardStore((s) => s.cards[id]);

export const useCanvasTransform = () => useBoardStore((s) => s.canvasTransform);

export const useActiveCardId = () => useBoardStore((s) => s.activeCardId);
