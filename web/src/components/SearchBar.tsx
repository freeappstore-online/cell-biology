import { organelles } from "../data/organelles";

interface Props {
  query: string;
  onQueryChange: (q: string) => void;
  onSelect: (id: string) => void;
}

export default function SearchBar({ query, onQueryChange, onSelect }: Props) {
  const lc = query.toLowerCase().trim();
  const results = lc
    ? organelles.filter(
        (o) =>
          o.name.toLowerCase().includes(lc) ||
          o.description.toLowerCase().includes(lc) ||
          o.analogy.toLowerCase().includes(lc),
      )
    : [];

  return (
    <div className="relative w-full max-w-xs">
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search organelles..."
        className="w-full rounded-lg px-3 py-2 text-sm outline-none"
        style={{
          background: "var(--panel)",
          border: "1px solid var(--line)",
          color: "var(--ink)",
        }}
      />
      {results.length > 0 && (
        <ul
          className="absolute top-full left-0 right-0 mt-1 rounded-lg overflow-hidden z-40 shadow-lg max-h-60 overflow-y-auto"
          style={{ background: "var(--panel)", border: "1px solid var(--line)" }}
        >
          {results.map((o) => (
            <li key={o.id}>
              <button
                onClick={() => {
                  onSelect(o.id);
                  onQueryChange("");
                }}
                className="w-full text-left px-3 py-2 text-sm hover:opacity-80 transition-opacity flex items-center gap-2"
                style={{ color: "var(--ink)" }}
              >
                <span
                  className="inline-block w-3 h-3 rounded-full shrink-0"
                  style={{ background: o.color }}
                />
                {o.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
