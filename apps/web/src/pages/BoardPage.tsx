import { useBoardInit } from '../hooks/useBoardInit';
import { useBoardStore, useViewMode } from '../store/useBoardStore';
import KanbanView from '../components/KanbanView';
import CanvasView from '../components/CanvasView';
import type { ViewMode } from '../types/board';

export default function BoardPage() {
  const viewMode = useViewMode();
  const setViewMode = useBoardStore((s) => s.setViewMode);
  useBoardInit('board-1');

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-[#16171d]">
      <header className="flex items-center justify-between px-6 py-3 border-b border-[var(--border)] shrink-0">
        <h1 className="text-base font-semibold text-[var(--text-h)] m-0">
          My Project Board
        </h1>
        <div className="flex gap-1 p-1 bg-gray-100 dark:bg-[#1f2028] rounded-lg">
          <ViewToggle label="Kanban" value="KANBAN" current={viewMode} onClick={setViewMode} />
          <ViewToggle label="Canvas" value="CANVAS" current={viewMode} onClick={setViewMode} />
        </div>
      </header>

      <main className="flex-1 overflow-hidden">
        {viewMode === 'KANBAN' ? <KanbanView /> : <CanvasView />}
      </main>
    </div>
  );
}

function ViewToggle({
  label,
  value,
  current,
  onClick,
}: {
  label: string;
  value: ViewMode;
  current: ViewMode;
  onClick: (mode: ViewMode) => void;
}) {
  const active = value === current;
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      className={[
        'px-3 py-1 text-sm rounded-md font-medium transition-colors',
        active
          ? 'bg-white dark:bg-[#16171d] text-[var(--accent)] shadow-sm'
          : 'text-[var(--text)] hover:text-[var(--text-h)]',
      ].join(' ')}
    >
      {label}
    </button>
  );
}
