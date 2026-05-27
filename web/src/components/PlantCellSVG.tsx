interface Props {
  hoveredId: string | null;
  selectedId: string | null;
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
}

function glow(id: string, hoveredId: string | null, selectedId: string | null, color: string) {
  const active = hoveredId === id || selectedId === id;
  return {
    filter: active ? `drop-shadow(0 0 8px ${color}) drop-shadow(0 0 16px ${color})` : "none",
    cursor: "pointer",
    transition: "filter 0.2s ease",
  };
}

export default function PlantCellSVG({ hoveredId, selectedId, onHover, onSelect }: Props) {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full" role="img" aria-label="Plant cell diagram">
      {/* Cell Wall */}
      <g
        style={glow("cell-wall", hoveredId, selectedId, "#65a30d")}
        onMouseEnter={() => onHover("cell-wall")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("cell-wall")}
      >
        <rect x="40" y="25" width="720" height="550" rx="30" fill="none" stroke="#84cc16" strokeWidth="12" opacity="0.6" />
        <rect x="52" y="37" width="696" height="526" rx="24" fill="none" stroke="#84cc16" strokeWidth="4" opacity="0.4" />
      </g>

      {/* Cell Membrane */}
      <rect
        x="62" y="47" width="676" height="506" rx="20"
        fill="#f0fdf4" stroke="#60a5fa" strokeWidth="3"
        style={glow("cell-membrane", hoveredId, selectedId, "#3b82f6")}
        onMouseEnter={() => onHover("cell-membrane")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("cell-membrane")}
      />

      {/* Central Vacuole — large, ~60% of cell */}
      <ellipse
        cx="400" cy="310" rx="220" ry="170"
        fill="#dbeafe" fillOpacity="0.5" stroke="#38bdf8" strokeWidth="2.5"
        style={glow("central-vacuole", hoveredId, selectedId, "#0ea5e9")}
        onMouseEnter={() => onHover("central-vacuole")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("central-vacuole")}
      />

      {/* Cytoskeleton — thin lines */}
      <g
        style={glow("cytoskeleton", hoveredId, selectedId, "#475569")}
        onMouseEnter={() => onHover("cytoskeleton")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("cytoskeleton")}
      >
        <line x1="300" y1="140" x2="150" y2="80" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="300" y1="140" x2="600" y2="100" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="300" y1="140" x2="100" y2="300" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <line x1="300" y1="140" x2="680" y2="250" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
      </g>

      {/* Nucleus — pushed toward edge by central vacuole */}
      <g
        style={glow("nucleus", hoveredId, selectedId, "#7c3aed")}
        onMouseEnter={() => onHover("nucleus")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("nucleus")}
      >
        <ellipse cx="250" cy="140" rx="90" ry="65" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="3" />
        <ellipse cx="250" cy="140" rx="85" ry="60" fill="none" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 3" />
        <path d="M220 125 Q235 115 230 135 Q225 155 240 145" fill="none" stroke="#6d28d9" strokeWidth="1.5" opacity="0.5" />
      </g>

      {/* Nucleolus */}
      <circle
        cx="260" cy="138" r="18"
        fill="#6d28d9" opacity="0.7"
        style={glow("nucleolus", hoveredId, selectedId, "#5b21b6")}
        onMouseEnter={() => onHover("nucleolus")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("nucleolus")}
      />

      {/* Rough ER */}
      <g
        style={glow("rough-er", hoveredId, selectedId, "#d97706")}
        onMouseEnter={() => onHover("rough-er")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("rough-er")}
      >
        <path d="M360 105 Q380 95 385 115 Q390 135 370 140 Q350 145 355 160" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
        <path d="M376 100 Q396 90 401 110 Q406 130 386 135 Q366 140 371 155" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
        <circle cx="360" cy="105" r="3" fill="#10b981" />
        <circle cx="385" cy="115" r="3" fill="#10b981" />
        <circle cx="370" cy="140" r="3" fill="#10b981" />
        <circle cx="376" cy="100" r="3" fill="#10b981" />
        <circle cx="401" cy="110" r="3" fill="#10b981" />
        <circle cx="386" cy="135" r="3" fill="#10b981" />
      </g>

      {/* Smooth ER */}
      <g
        style={glow("smooth-er", hoveredId, selectedId, "#f59e0b")}
        onMouseEnter={() => onHover("smooth-er")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("smooth-er")}
      >
        <path d="M630 120 Q650 110 653 130 Q656 150 636 153 Q616 156 620 170" fill="none" stroke="#fbbf24" strokeWidth="2.5" />
        <path d="M645 115 Q665 105 668 125 Q671 145 651 148 Q631 151 635 165" fill="none" stroke="#fbbf24" strokeWidth="2.5" />
      </g>

      {/* Golgi Apparatus */}
      <g
        style={glow("golgi", hoveredId, selectedId, "#ea580c")}
        onMouseEnter={() => onHover("golgi")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("golgi")}
      >
        <path d="M100 400 Q130 390 160 400" fill="none" stroke="#f97316" strokeWidth="5" strokeLinecap="round" />
        <path d="M105 415 Q135 405 165 415" fill="none" stroke="#f97316" strokeWidth="5" strokeLinecap="round" />
        <path d="M108 430 Q138 420 168 430" fill="none" stroke="#f97316" strokeWidth="5" strokeLinecap="round" />
        <path d="M110 445 Q140 435 170 445" fill="none" stroke="#f97316" strokeWidth="5" strokeLinecap="round" />
        <circle cx="172" cy="403" r="5" fill="#fdba74" stroke="#f97316" strokeWidth="1.5" />
        <circle cx="175" cy="425" r="4" fill="#fdba74" stroke="#f97316" strokeWidth="1.5" />
      </g>

      {/* Mitochondria */}
      <g
        style={glow("mitochondria", hoveredId, selectedId, "#dc2626")}
        onMouseEnter={() => onHover("mitochondria")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("mitochondria")}
      >
        <ellipse cx="650" cy="440" rx="35" ry="15" fill="#fecaca" stroke="#ef4444" strokeWidth="2" transform="rotate(-25 650 440)" />
        <path d="M633 435 Q641 427 641 440 Q641 453 633 445" fill="none" stroke="#ef4444" strokeWidth="1.2" transform="rotate(-25 650 440)" />
        <path d="M646 435 Q654 427 654 440 Q654 453 646 445" fill="none" stroke="#ef4444" strokeWidth="1.2" transform="rotate(-25 650 440)" />
        <path d="M659 435 Q667 427 667 440 Q667 453 659 445" fill="none" stroke="#ef4444" strokeWidth="1.2" transform="rotate(-25 650 440)" />

        <ellipse cx="120" cy="230" rx="30" ry="14" fill="#fecaca" stroke="#ef4444" strokeWidth="2" transform="rotate(10 120 230)" />
        <path d="M105 225 Q112 218 112 230 Q112 242 105 235" fill="none" stroke="#ef4444" strokeWidth="1.2" transform="rotate(10 120 230)" />
        <path d="M117 225 Q124 218 124 230 Q124 242 117 235" fill="none" stroke="#ef4444" strokeWidth="1.2" transform="rotate(10 120 230)" />
        <path d="M129 225 Q136 218 136 230 Q136 242 129 235" fill="none" stroke="#ef4444" strokeWidth="1.2" transform="rotate(10 120 230)" />

        <ellipse cx="680" cy="170" rx="28" ry="12" fill="#fecaca" stroke="#ef4444" strokeWidth="2" />
        <path d="M665 165 Q671 159 671 170 Q671 181 665 175" fill="none" stroke="#ef4444" strokeWidth="1.2" />
        <path d="M676 165 Q682 159 682 170 Q682 181 676 175" fill="none" stroke="#ef4444" strokeWidth="1.2" />
        <path d="M687 165 Q693 159 693 170 Q693 181 687 175" fill="none" stroke="#ef4444" strokeWidth="1.2" />
      </g>

      {/* Chloroplasts */}
      <g
        style={glow("chloroplasts", hoveredId, selectedId, "#16a34a")}
        onMouseEnter={() => onHover("chloroplasts")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("chloroplasts")}
      >
        {/* Chloroplast 1 */}
        <ellipse cx="560" cy="90" rx="42" ry="22" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" transform="rotate(-10 560 90)" />
        <rect x="542" y="82" width="10" height="16" rx="2" fill="#16a34a" opacity="0.5" transform="rotate(-10 560 90)" />
        <rect x="556" y="82" width="10" height="16" rx="2" fill="#16a34a" opacity="0.5" transform="rotate(-10 560 90)" />
        <rect x="570" y="82" width="10" height="16" rx="2" fill="#16a34a" opacity="0.5" transform="rotate(-10 560 90)" />

        {/* Chloroplast 2 */}
        <ellipse cx="140" cy="480" rx="38" ry="20" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" transform="rotate(15 140 480)" />
        <rect x="124" y="472" width="9" height="16" rx="2" fill="#16a34a" opacity="0.5" transform="rotate(15 140 480)" />
        <rect x="137" y="472" width="9" height="16" rx="2" fill="#16a34a" opacity="0.5" transform="rotate(15 140 480)" />
        <rect x="150" y="472" width="9" height="16" rx="2" fill="#16a34a" opacity="0.5" transform="rotate(15 140 480)" />

        {/* Chloroplast 3 */}
        <ellipse cx="680" cy="330" rx="35" ry="18" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" transform="rotate(25 680 330)" />
        <rect x="666" y="322" width="8" height="16" rx="2" fill="#16a34a" opacity="0.5" transform="rotate(25 680 330)" />
        <rect x="678" y="322" width="8" height="16" rx="2" fill="#16a34a" opacity="0.5" transform="rotate(25 680 330)" />
        <rect x="690" y="322" width="8" height="16" rx="2" fill="#16a34a" opacity="0.5" transform="rotate(25 680 330)" />
      </g>

      {/* Free Ribosomes */}
      <g
        style={glow("ribosomes", hoveredId, selectedId, "#059669")}
        onMouseEnter={() => onHover("ribosomes")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("ribosomes")}
      >
        <circle cx="500" cy="70" r="3" fill="#10b981" />
        <circle cx="450" cy="85" r="3" fill="#10b981" />
        <circle cx="180" cy="350" r="3" fill="#10b981" />
        <circle cx="200" cy="380" r="3" fill="#10b981" />
        <circle cx="660" cy="250" r="3" fill="#10b981" />
        <circle cx="700" cy="400" r="3" fill="#10b981" />
        <circle cx="110" cy="330" r="3" fill="#10b981" />
        <circle cx="100" cy="130" r="3" fill="#10b981" />
      </g>

      {/* Peroxisomes */}
      <g
        style={glow("peroxisomes", hoveredId, selectedId, "#9333ea")}
        onMouseEnter={() => onHover("peroxisomes")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("peroxisomes")}
      >
        <circle cx="700" cy="120" r="9" fill="#f3e8ff" stroke="#a855f7" strokeWidth="2" />
        <circle cx="90" cy="390" r="8" fill="#f3e8ff" stroke="#a855f7" strokeWidth="2" />
      </g>

      {/* Vacuoles (small, beside central vacuole) */}
      <g
        style={glow("vacuoles", hoveredId, selectedId, "#0d9488")}
        onMouseEnter={() => onHover("vacuoles")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("vacuoles")}
      >
        <ellipse cx="700" cy="500" rx="14" ry="10" fill="#ccfbf1" stroke="#14b8a6" strokeWidth="2" />
        <ellipse cx="90" cy="120" rx="12" ry="15" fill="#ccfbf1" stroke="#14b8a6" strokeWidth="2" />
      </g>

      {/* Plasmodesmata — channels through cell wall */}
      <g
        style={glow("plasmodesmata", hoveredId, selectedId, "#84cc16")}
        onMouseEnter={() => onHover("plasmodesmata")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("plasmodesmata")}
      >
        {/* Left wall channels */}
        <rect x="36" y="150" width="30" height="6" rx="3" fill="#a3e635" opacity="0.8" />
        <rect x="36" y="250" width="30" height="6" rx="3" fill="#a3e635" opacity="0.8" />
        <rect x="36" y="400" width="30" height="6" rx="3" fill="#a3e635" opacity="0.8" />
        {/* Right wall channels */}
        <rect x="734" y="180" width="30" height="6" rx="3" fill="#a3e635" opacity="0.8" />
        <rect x="734" y="350" width="30" height="6" rx="3" fill="#a3e635" opacity="0.8" />
        <rect x="734" y="480" width="30" height="6" rx="3" fill="#a3e635" opacity="0.8" />
        {/* Top channels */}
        <rect x="250" y="22" width="6" height="30" rx="3" fill="#a3e635" opacity="0.8" />
        <rect x="500" y="22" width="6" height="30" rx="3" fill="#a3e635" opacity="0.8" />
        {/* Bottom channels */}
        <rect x="300" y="548" width="6" height="30" rx="3" fill="#a3e635" opacity="0.8" />
        <rect x="550" y="548" width="6" height="30" rx="3" fill="#a3e635" opacity="0.8" />
      </g>

      {/* Title */}
      <text x="400" y="580" textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--ink)" fontFamily="Fraunces, serif">
        Plant Cell
      </text>
    </svg>
  );
}
