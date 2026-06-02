export function MarketingAmbient() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ background: "#020202" }}
      aria-hidden="true"
    >
      <div className="bg-grid-wide absolute inset-0 opacity-30" />
      <div className="bg-gradient-radial-wide absolute inset-0" />
      <div className="orb orb-wide orb-wide-1" />
      <div className="orb orb-wide orb-wide-2" />
      <div
        className="absolute inset-y-0 left-0 w-32"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.03), transparent)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-32"
        style={{
          background:
            "linear-gradient(-90deg, rgba(255,255,255,0.03), transparent)",
        }}
      />
    </div>
  );
}
