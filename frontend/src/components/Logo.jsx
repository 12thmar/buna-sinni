export function Logo({ label = "BunaRoots.com", showText = true, size = "h-12 w-12" }) {
  return (
    <div className="flex items-center gap-2 font-semibold">
      <img
        src="/images/logo.png"
        alt={label}
        className={`${size} rounded-full object-cover`}
      />
      {showText && <span className="tracking-tight">{label}</span>}
    </div>
  );
}
