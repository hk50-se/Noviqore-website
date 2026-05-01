export type QoriQuickAction = {
  id: string;
  label: string;
  prompt: string;
};

type QoriQuickActionsProps = {
  actions: QoriQuickAction[];
  onSelect: (action: QoriQuickAction) => void;
};

export function QoriQuickActions({ actions, onSelect }: QoriQuickActionsProps) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {actions.map((action) => (
        <button
          key={action.id}
          type="button"
          aria-label={`Ask Qori: ${action.label}`}
          onClick={() => onSelect(action)}
          className="rounded-xl border border-amber-200/20 bg-amber-300/10 px-3 py-2 text-left text-xs font-medium text-amber-100 transition hover:border-amber-200/40 hover:bg-amber-300/15"
        >
          {action.label}
        </button>
      ))}
    </div>
  );
}

