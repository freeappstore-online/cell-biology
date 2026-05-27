import { getOrganellesForCell, organelles } from "../data/organelles";

interface Props {
  onClose: () => void;
}

export default function CompareView({ onClose }: Props) {
  const animalOnly = organelles.filter(
    (o) => o.foundIn.includes("animal") && !o.foundIn.includes("plant"),
  );
  const plantOnly = organelles.filter(
    (o) => o.foundIn.includes("plant") && !o.foundIn.includes("animal"),
  );
  const shared = organelles.filter(
    (o) => o.foundIn.includes("animal") && o.foundIn.includes("plant"),
  );
  const animalOrganelles = getOrganellesForCell("animal");
  const plantOrganelles = getOrganellesForCell("plant");

  return (
    <div className="fixed inset-0 z-50 flex flex-col" style={{ background: "var(--paper)" }}>
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-3 shrink-0"
        style={{ borderBottom: "1px solid var(--line)" }}
      >
        <h2 className="text-lg font-bold" style={{ fontFamily: "Fraunces, serif", color: "var(--ink)" }}>
          Compare: Animal vs Plant Cell
        </h2>
        <button
          onClick={onClose}
          className="px-3 py-1 rounded-lg text-sm font-medium"
          style={{ background: "var(--line)", color: "var(--ink)" }}
        >
          Back
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Animal column */}
          <div>
            <h3 className="text-base font-bold mb-3" style={{ color: "var(--accent)" }}>
              Animal Cell ({animalOrganelles.length} organelles)
            </h3>
            <ul className="space-y-2">
              {animalOrganelles.map((o) => {
                const unique = animalOnly.some((a) => a.id === o.id);
                return (
                  <li
                    key={o.id}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
                    style={{
                      background: unique ? "rgba(239,68,68,0.1)" : "var(--panel)",
                      border: unique ? "1px solid rgba(239,68,68,0.3)" : "1px solid var(--line)",
                      color: "var(--ink)",
                    }}
                  >
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ background: o.color }} />
                    <span className="font-medium">{o.name}</span>
                    {unique && (
                      <span className="ml-auto text-xs font-semibold" style={{ color: "#ef4444" }}>
                        Animal only
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Plant column */}
          <div>
            <h3 className="text-base font-bold mb-3" style={{ color: "#22c55e" }}>
              Plant Cell ({plantOrganelles.length} organelles)
            </h3>
            <ul className="space-y-2">
              {plantOrganelles.map((o) => {
                const unique = plantOnly.some((p) => p.id === o.id);
                return (
                  <li
                    key={o.id}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
                    style={{
                      background: unique ? "rgba(34,197,94,0.1)" : "var(--panel)",
                      border: unique ? "1px solid rgba(34,197,94,0.3)" : "1px solid var(--line)",
                      color: "var(--ink)",
                    }}
                  >
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ background: o.color }} />
                    <span className="font-medium">{o.name}</span>
                    {unique && (
                      <span className="ml-auto text-xs font-semibold" style={{ color: "#22c55e" }}>
                        Plant only
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Shared summary */}
        <div className="max-w-5xl mx-auto mt-6 p-4 rounded-lg" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
          <h3 className="text-sm font-bold mb-2" style={{ color: "var(--muted)" }}>
            Shared organelles ({shared.length})
          </h3>
          <div className="flex flex-wrap gap-2">
            {shared.map((o) => (
              <span
                key={o.id}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                style={{ background: "var(--line)", color: "var(--ink)" }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: o.color }} />
                {o.name}
              </span>
            ))}
          </div>
        </div>

        {/* Key differences */}
        <div className="max-w-5xl mx-auto mt-4 p-4 rounded-lg" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
          <h3 className="text-sm font-bold mb-2" style={{ color: "var(--muted)" }}>
            Key differences
          </h3>
          <ul className="text-sm space-y-1" style={{ color: "var(--ink)" }}>
            <li>Plant cells have a rigid <strong>cell wall</strong> made of cellulose; animal cells do not.</li>
            <li>Plant cells contain <strong>chloroplasts</strong> for photosynthesis; animal cells lack them.</li>
            <li>Plant cells have a large <strong>central vacuole</strong> (up to 90% of volume); animal vacuoles are small.</li>
            <li>Animal cells have <strong>lysosomes</strong> and a <strong>centrosome</strong>; plant cells typically lack both.</li>
            <li>Plant cells are connected via <strong>plasmodesmata</strong> channels through the cell wall.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
