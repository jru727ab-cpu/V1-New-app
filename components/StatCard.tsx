type StatCardProps = {
  label: string;
  value: string;
  change: string;
  tone?: 'blue' | 'green' | 'purple' | 'amber';
};

export function StatCard({ label, value, change, tone = 'blue' }: StatCardProps) {
  const styles = {
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-emerald-100 text-emerald-700',
    purple: 'bg-violet-100 text-violet-700',
    amber: 'bg-amber-100 text-amber-700',
  };

  return (
    <div className="card">
      <p className="text-sm text-slate-500">{label}</p>
      <div className="mt-4 flex items-end justify-between">
        <span className="text-3xl font-bold text-slate-900">{value}</span>
        <span className={`rounded-full px-2 py-1 text-xs font-medium ${styles[tone]}`}>{change}</span>
      </div>
    </div>
  );
}
