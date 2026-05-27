import { useState, useCallback } from "react";
import type { CellType } from "./data/types";
import { organelles } from "./data/organelles";
import AnimalCellSVG from "./components/AnimalCellSVG";
import PlantCellSVG from "./components/PlantCellSVG";
import ProkaryoteCellSVG from "./components/ProkaryoteCellSVG";
import DetailPanel from "./components/DetailPanel";
import SearchBar from "./components/SearchBar";
import CompareView from "./components/CompareView";
import QuizMode from "./components/QuizMode";

type AppMode = "explore" | "compare" | "quiz";

const cellTabs: { id: CellType; label: string }[] = [
  { id: "animal", label: "Animal" },
  { id: "plant", label: "Plant" },
  { id: "prokaryote", label: "Prokaryote" },
];

export default function App() {
  const [cellType, setCellType] = useState<CellType>("animal");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mode, setMode] = useState<AppMode>("explore");

  const handleSelect = useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setSelectedId(null);
  }, []);

  const selectedOrganelle = selectedId != null ? organelles.find((o) => o.id === selectedId) ?? null : null;

  if (mode === "compare") {
    return <CompareView onClose={() => setMode("explore")} />;
  }

  if (mode === "quiz") {
    return <QuizMode onClose={() => setMode("explore")} />;
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--paper)" }}>
      {/* Header */}
      <header
        className="shrink-0 px-4 py-3 flex flex-wrap items-center gap-3"
        style={{ borderBottom: "1px solid var(--line)", background: "var(--panel)" }}
      >
        <h1
          className="text-xl font-bold mr-2"
          style={{ fontFamily: "Fraunces, serif", color: "var(--ink)" }}
        >
          Cell Biology
        </h1>

        {/* Cell type tabs */}
        <div className="flex gap-1 rounded-lg p-0.5" style={{ background: "var(--line)" }}>
          {cellTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setCellType(tab.id);
                setSelectedId(null);
              }}
              className="px-3 py-1.5 rounded-md text-sm font-medium transition-all"
              style={{
                background: cellType === tab.id ? "var(--paper)" : "transparent",
                color: cellType === tab.id ? "var(--ink)" : "var(--muted)",
                boxShadow: cellType === tab.id ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex-1" />

        <SearchBar query={searchQuery} onQueryChange={setSearchQuery} onSelect={handleSelect} />

        {/* Mode buttons */}
        <button
          onClick={() => setMode("compare")}
          className="px-3 py-1.5 rounded-lg text-sm font-medium"
          style={{ background: "var(--line)", color: "var(--ink)" }}
        >
          Compare
        </button>
        <button
          onClick={() => setMode("quiz")}
          className="px-3 py-1.5 rounded-lg text-sm font-semibold text-white"
          style={{ background: "var(--accent)" }}
        >
          Quiz
        </button>
      </header>

      {/* Main diagram area */}
      <main className="flex-1 relative p-4 flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-4xl">
          {cellType === "animal" && (
            <AnimalCellSVG
              hoveredId={hoveredId}
              selectedId={selectedId}
              onHover={setHoveredId}
              onSelect={handleSelect}
            />
          )}
          {cellType === "plant" && (
            <PlantCellSVG
              hoveredId={hoveredId}
              selectedId={selectedId}
              onHover={setHoveredId}
              onSelect={handleSelect}
            />
          )}
          {cellType === "prokaryote" && (
            <ProkaryoteCellSVG
              hoveredId={hoveredId}
              selectedId={selectedId}
              onHover={setHoveredId}
              onSelect={handleSelect}
            />
          )}
        </div>

        {/* Hovered tooltip */}
        {hoveredId != null && selectedId == null && (() => {
          const hovered = organelles.find((o) => o.id === hoveredId);
          if (hovered == null) return null;
          return (
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg text-sm font-medium pointer-events-none shadow-lg"
              style={{ background: "var(--panel)", border: "1px solid var(--line)", color: "var(--ink)" }}
            >
              <span className="inline-block w-2.5 h-2.5 rounded-full mr-2" style={{ background: hovered.color }} />
              {hovered.name} — click for details
            </div>
          );
        })()}
      </main>

      {/* Legend */}
      <footer
        className="shrink-0 px-4 py-2 overflow-x-auto"
        style={{ borderTop: "1px solid var(--line)", background: "var(--panel)" }}
      >
        <div className="flex gap-3 items-center flex-nowrap min-w-0">
          <span className="text-xs font-semibold shrink-0" style={{ color: "var(--muted)" }}>
            Legend:
          </span>
          {organelles
            .filter((o) => o.foundIn.includes(cellType))
            .map((o) => (
              <button
                key={o.id}
                onClick={() => handleSelect(o.id)}
                className="flex items-center gap-1.5 shrink-0 hover:opacity-80 transition-opacity"
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: o.color }} />
                <span className="text-xs whitespace-nowrap" style={{ color: "var(--ink)" }}>
                  {o.name}
                </span>
              </button>
            ))}
        </div>
      </footer>

      {/* Detail panel slide-in */}
      {selectedOrganelle != null && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            style={{ background: "rgba(0,0,0,0.3)" }}
            onClick={handleCloseDetail}
          />
          <DetailPanel organelle={selectedOrganelle} onClose={handleCloseDetail} />
        </>
      )}
    </div>
  );
}
