import type { Organelle } from "../data/types";

interface Props {
  organelle: Organelle;
  onClose: () => void;
}

function cellLabel(ct: string): string {
  if (ct === "animal") return "Animal";
  if (ct === "plant") return "Plant";
  return "Prokaryote";
}

export default function DetailPanel({ organelle, onClose }: Props) {
  return (
    <div
      className="fixed inset-y-0 right-0 w-full sm:w-96 z-50 flex flex-col shadow-2xl"
      style={{ background: "var(--panel)", borderLeft: "1px solid var(--line)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="flex items-center gap-3">
          <span
            className="inline-block w-4 h-4 rounded-full shrink-0"
            style={{ background: organelle.color }}
          />
          <h2 className="text-lg font-bold" style={{ color: "var(--ink)" }}>
            {organelle.name}
          </h2>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-md hover:opacity-70 transition-opacity"
          style={{ color: "var(--muted)" }}
          aria-label="Close detail panel"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="4" y1="4" x2="16" y2="16" />
            <line x1="16" y1="4" x2="4" y2="16" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
        {/* Description */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--muted)" }}>
            What it does
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "var(--ink)" }}>
            {organelle.description}
          </p>
        </div>

        {/* Analogy */}
        <div className="rounded-lg px-4 py-3" style={{ background: "var(--glass)", border: "1px solid var(--line)" }}>
          <h3 className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--accent)" }}>
            Analogy
          </h3>
          <p className="text-sm italic" style={{ color: "var(--ink)" }}>
            {organelle.analogy}
          </p>
        </div>

        {/* Fun Fact */}
        <div className="rounded-lg px-4 py-3" style={{ background: "var(--glass)", border: "1px solid var(--line)" }}>
          <h3 className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--warning, #d97706)" }}>
            Fun fact
          </h3>
          <p className="text-sm" style={{ color: "var(--ink)" }}>
            {organelle.funFact}
          </p>
        </div>

        {/* Found in */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--muted)" }}>
            Found in
          </h3>
          <div className="flex gap-2 flex-wrap">
            {organelle.foundIn.map((ct) => (
              <span
                key={ct}
                className="inline-block rounded-full px-3 py-1 text-xs font-medium"
                style={{ background: "var(--line)", color: "var(--ink)" }}
              >
                {cellLabel(ct)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
