import type { BoardMetaSlice } from './slices/boardMetaSlice';
import type { KanbanSlice } from './slices/kanbanSlice';
import type { CanvasSlice } from './slices/canvasSlice';
import type { UISlice } from './slices/uiSlice';

export type BoardStore = BoardMetaSlice & KanbanSlice & CanvasSlice & UISlice;
