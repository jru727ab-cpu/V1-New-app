import { Sidebar } from '@/components/Sidebar';
import { StatCard } from '@/components/StatCard';
import { ToolCard } from '@/components/ToolCard';

const stats = [
  { label: 'Connected tools', value: '12', change: '+3 this week', tone: 'blue' as const },
  { label: 'Active projects', value: '8', change: '+2 launched', tone: 'green' as const },
  { label: 'Revenue', value: '$4.2k', change: '+18.5%', tone: 'purple' as const },
  { label: 'Deployments', value: '17', change: '99.9% uptime', tone: 'amber' as const },
];

const projectRows = [
  { name: 'Launch Dashboard', status: 'Live', owner: 'Owner', health: 'Healthy' },
  { name: 'Supabase Sync', status: 'Monitoring', owner: 'Admin', health: 'Stable' },
  { name: 'Stripe Billing', status: 'Review', owner: 'Owner', health: 'Needs Update' },
  { name: 'AI Assistant', status: 'Testing', owner: 'Admin', health: 'In Progress' },
];

const connectedTools = [
  { icon: '🐙', name: 'GitHub', status: 'Connected' },
  { icon: '⚡', name: 'Replit', status: 'Connected' },
  { icon: '🚀', name: 'Supabase', status: 'Connected' },
  { icon: '🔐', name: 'Auth', status: 'Ready' },
  { icon: '💳', name: 'Stripe', status: 'Setup' },
  { icon: '🤖', name: 'Copilot', status: 'Enabled' },
];

const quickActions = ['Sync tools', 'Deploy to Vercel', 'Open AI console', 'View billing'];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      <Sidebar />

      <main className="main-content">
        <header className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Dashboard</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Owner Overview</h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="btn-secondary">Export</button>
            <button className="btn-primary">New Project</button>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[1.6fr_1fr]">
          <div className="card">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">Projects</h3>
              <button className="text-sm font-medium text-blue-600">View all</button>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-slate-600">Project</th>
                    <th className="px-4 py-3 font-semibold text-slate-600">Status</th>
                    <th className="px-4 py-3 font-semibold text-slate-600">Owner</th>
                    <th className="px-4 py-3 font-semibold text-slate-600">Health</th>
                  </tr>
                </thead>
                <tbody>
                  {projectRows.map((row) => (
                    <tr key={row.name} className="border-t border-slate-200">
                      <td className="px-4 py-3 font-medium text-slate-800">{row.name}</td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                          {row.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-600">{row.owner}</td>
                      <td className="px-4 py-3 text-slate-600">{row.health}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-bold text-slate-900">Quick actions</h3>
              <div className="mt-4 space-y-3">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    className="flex w-full items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                  >
                    {action}
                    <span>→</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-slate-900">Connected tools</h3>
              <div className="mt-4 space-y-3">
                {connectedTools.map((tool) => (
                  <ToolCard key={tool.name} icon={tool.icon} name={tool.name} status={tool.status} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
