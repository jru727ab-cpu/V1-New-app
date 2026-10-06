type SidebarItem = {
  label: string;
  active?: boolean;
  badge?: string;
};

const items: SidebarItem[] = [
  { label: 'Overview', active: true, badge: '1' },
  { label: 'Projects', badge: '8' },
  { label: 'Integrations', badge: '11' },
  { label: 'AI', badge: '3' },
  { label: 'Billing', badge: '2' },
  { label: 'Admin', badge: '5' },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="border-b border-slate-200 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
            H
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Workspace</p>
            <h2 className="text-lg font-bold">Hybrid OS</h2>
          </div>
        </div>
      </div>

      <nav className="space-y-2 p-4">
        {items.map((item) => (
          <button
            key={item.label}
            className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium ${
              item.active ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {item.label}
            {item.badge ? <span className="text-xs opacity-70">{item.badge}</span> : null}
          </button>
        ))}
      </nav>
    </aside>
  );
}
