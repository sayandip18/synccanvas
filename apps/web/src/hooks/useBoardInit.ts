import { useEffect } from 'react';
import type { Card, Column } from '../types/board';
import { useBoardStore } from '../store/useBoardStore';

const MOCK_COLUMNS: Column[] = [
  { id: 'col-1', title: 'To Do', boardId: 'board-1', order: 0, createdAt: '2026-06-15T00:00:00Z' },
  { id: 'col-2', title: 'In Progress', boardId: 'board-1', order: 1, createdAt: '2026-06-15T00:00:00Z' },
  { id: 'col-3', title: 'Done', boardId: 'board-1', order: 2, createdAt: '2026-06-15T00:00:00Z' },
];

const MOCK_CARDS: Card[] = [
  { id: 'card-1', title: 'Set up authentication', order: 0, boardId: 'board-1', columnId: 'col-1', createdAt: '2026-06-15T00:00:00Z', updatedAt: '2026-06-15T00:00:00Z' },
  { id: 'card-2', title: 'Design database schema', order: 1, boardId: 'board-1', columnId: 'col-1', createdAt: '2026-06-15T00:00:00Z', updatedAt: '2026-06-15T00:00:00Z' },
  { id: 'card-3', title: 'Build GraphQL API', order: 0, boardId: 'board-1', columnId: 'col-2', createdAt: '2026-06-15T00:00:00Z', updatedAt: '2026-06-15T00:00:00Z' },
  { id: 'card-4', title: 'Wire up subscriptions', order: 1, boardId: 'board-1', columnId: 'col-2', createdAt: '2026-06-15T00:00:00Z', updatedAt: '2026-06-15T00:00:00Z' },
  { id: 'card-5', title: 'Initial monorepo setup', order: 0, boardId: 'board-1', columnId: 'col-3', createdAt: '2026-06-15T00:00:00Z', updatedAt: '2026-06-15T00:00:00Z' },
];

export function useBoardInit(boardId: string) {
  useEffect(() => {
    const { setBoardId, setColumns, setCards } = useBoardStore.getState();
    setBoardId(boardId);
    setColumns(MOCK_COLUMNS);
    setCards(MOCK_CARDS);
  }, [boardId]);
}
