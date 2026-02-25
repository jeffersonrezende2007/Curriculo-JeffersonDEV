export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
    </div>
  );
}