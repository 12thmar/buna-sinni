export function Logo({ label = "BunaRoots" }) {
  return (
    <div className="flex items-center gap-2 font-semibold">
      <img
        src="/images/logo.png"           // file in /public/images/
        alt={label}
        className="h-9 w-9 rounded-full object-cover"
        style={{ display: "inline-block" }} // temporary guard against hidden
      />
      <span className="tracking-tight">{label}</span>
    </div>
  );
}