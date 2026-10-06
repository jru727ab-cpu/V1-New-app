import { defaultUser } from '@/lib/user';

export function Topbar() {
  return (
    <header className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Dashboard</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Owner Overview</h1>
      </div>

      <div className="flex items-center gap-3">
        <button className="btn-secondary">Export</button>
        <button className="btn-primary">New Project</button>

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
            {defaultUser.avatar}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">{defaultUser.name}</p>
            <p className="text-xs text-slate-500">{defaultUser.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
