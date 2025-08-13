export function Logo({ label = "BunaRoots" }) {
  return (
    <a href="#" className="flex items-center gap-2 font-semibold">
      {/* Replace with your logo image if available */}
      <div className="h-9 w-9 rounded-full bg-[#2a2018] text-white grid place-items-center text-sm">BR</div>
      <span className="tracking-tight">{label}</span>
    </a>
  );
}