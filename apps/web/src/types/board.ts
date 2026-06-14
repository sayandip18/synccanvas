export type ViewMode = 'KANBAN' | 'CANVAS';

export interface Column {
  id: string;
  title: string;
  boardId: string;
  order: number;
  createdAt: string;
}

export interface Card {
  id: string;
  title: string;
  description?: string;
  order: number;
  x?: number;
  y?: number;
  height?: number;
  width?: number;
  boardId: string;
  columnId?: string;
  assigneeId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CanvasTransform {
  x: number;
  y: number;
  scale: number;
}
