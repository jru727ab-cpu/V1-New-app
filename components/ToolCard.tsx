type ToolCardProps = {
  icon: string;
  name: string;
  status: string;
};

export function ToolCard({ icon, name, status }: ToolCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <span className="font-medium text-slate-700">{name}</span>
      </div>
      <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
        {status}
      </span>
    </div>
  );
}
