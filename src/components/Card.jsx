export function Card({ title, body, icon, className = "" }) {
  return (
    <div className={`rounded-lg bg-white border border-[#e2d7cc] shadow-sm p-5 ${className}`}>
      <div className="flex items-start gap-3">
        <div className="h-9 w-9 rounded-lg bg-[#fff6ee] grid place-items-center text-xl">{icon}</div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="mt-1 text-slate-700 text-sm leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );
}