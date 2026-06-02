export function MarketingAmbient() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black"
      aria-hidden="true"
    >
      <div className="bg-grid-wide absolute inset-0 opacity-30" />
      <div className="bg-gradient-radial-wide absolute inset-0" />
      <div className="orb orb-wide orb-wide-1" />
      <div className="orb orb-wide orb-wide-2" />
      <div className="ambient-edge-fade" />
    </div>
  );
}
