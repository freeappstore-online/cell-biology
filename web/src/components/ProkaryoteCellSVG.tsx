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

export default function ProkaryoteCellSVG({ hoveredId, selectedId, onHover, onSelect }: Props) {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full" role="img" aria-label="Prokaryote cell diagram">
      {/* Flagellum — long whip extending from right */}
      <g
        style={glow("flagellum", hoveredId, selectedId, "#ec4899")}
        onMouseEnter={() => onHover("flagellum")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("flagellum")}
      >
        <path
          d="M620 300 Q660 260 680 300 Q700 340 720 300 Q740 260 760 300 Q780 340 790 310"
          fill="none" stroke="#f472b6" strokeWidth="3" strokeLinecap="round"
        />
        {/* Motor base */}
        <circle cx="620" cy="300" r="6" fill="#f472b6" />
      </g>

      {/* Capsule — outermost layer */}
      <ellipse
        cx="370" cy="300" rx="280" ry="180"
        fill="#f1f5f9" fillOpacity="0.4" stroke="#94a3b8" strokeWidth="3" strokeDasharray="8 4"
        style={glow("capsule", hoveredId, selectedId, "#64748b")}
        onMouseEnter={() => onHover("capsule")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("capsule")}
      />

      {/* Cell Wall */}
      <ellipse
        cx="370" cy="300" rx="255" ry="155"
        fill="none" stroke="#84cc16" strokeWidth="6" opacity="0.6"
        style={glow("cell-wall", hoveredId, selectedId, "#65a30d")}
        onMouseEnter={() => onHover("cell-wall")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("cell-wall")}
      />

      {/* Cell Membrane */}
      <ellipse
        cx="370" cy="300" rx="245" ry="145"
        fill="#fefce8" fillOpacity="0.5" stroke="#60a5fa" strokeWidth="2.5"
        style={glow("cell-membrane", hoveredId, selectedId, "#3b82f6")}
        onMouseEnter={() => onHover("cell-membrane")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("cell-membrane")}
      />

      {/* Pili — short hair-like projections */}
      <g
        style={glow("pili", hoveredId, selectedId, "#f97316")}
        onMouseEnter={() => onHover("pili")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("pili")}
      >
        <line x1="180" y1="165" x2="160" y2="130" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
        <line x1="240" y1="155" x2="225" y2="118" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
        <line x1="310" y1="150" x2="305" y2="110" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
        <line x1="380" y1="148" x2="380" y2="108" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
        <line x1="450" y1="152" x2="455" y2="112" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
        <line x1="510" y1="162" x2="525" y2="128" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
        <line x1="200" y1="425" x2="185" y2="460" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
        <line x1="280" y1="440" x2="272" y2="478" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
        <line x1="370" y1="445" x2="370" y2="485" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
        <line x1="460" y1="438" x2="468" y2="475" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
        <line x1="530" y1="420" x2="548" y2="455" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Nucleoid Region — irregular blob of DNA */}
      <g
        style={glow("nucleoid", hoveredId, selectedId, "#a855f7")}
        onMouseEnter={() => onHover("nucleoid")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("nucleoid")}
      >
        <path
          d="M310 260 Q330 240 360 250 Q390 260 400 280 Q410 300 390 320 Q370 340 340 330 Q310 320 300 300 Q290 280 310 260Z"
          fill="#ede9fe" fillOpacity="0.6" stroke="#c084fc" strokeWidth="2"
        />
        {/* DNA strands inside */}
        <path d="M320 270 Q340 260 345 280 Q350 300 335 310 Q320 320 315 300 Q310 280 320 270" fill="none" stroke="#a855f7" strokeWidth="1.5" />
        <path d="M350 265 Q370 275 365 295 Q360 315 375 310" fill="none" stroke="#a855f7" strokeWidth="1.5" />
      </g>

      {/* Plasmid — small circular DNA */}
      <g
        style={glow("plasmid", hoveredId, selectedId, "#d946ef")}
        onMouseEnter={() => onHover("plasmid")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("plasmid")}
      >
        <circle cx="480" cy="260" r="18" fill="none" stroke="#e879f9" strokeWidth="2.5" />
        <circle cx="480" cy="260" r="14" fill="none" stroke="#e879f9" strokeWidth="1" strokeDasharray="3 2" />
        {/* Another plasmid */}
        <circle cx="250" cy="370" r="15" fill="none" stroke="#e879f9" strokeWidth="2.5" />
        <circle cx="250" cy="370" r="11" fill="none" stroke="#e879f9" strokeWidth="1" strokeDasharray="3 2" />
      </g>

      {/* Ribosomes — scattered throughout */}
      <g
        style={glow("ribosomes", hoveredId, selectedId, "#059669")}
        onMouseEnter={() => onHover("ribosomes")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("ribosomes")}
      >
        <circle cx="200" cy="250" r="4" fill="#10b981" />
        <circle cx="220" cy="290" r="4" fill="#10b981" />
        <circle cx="240" cy="320" r="4" fill="#10b981" />
        <circle cx="180" cy="330" r="4" fill="#10b981" />
        <circle cx="280" cy="280" r="4" fill="#10b981" />
        <circle cx="420" cy="240" r="4" fill="#10b981" />
        <circle cx="440" cy="310" r="4" fill="#10b981" />
        <circle cx="460" cy="350" r="4" fill="#10b981" />
        <circle cx="500" cy="300" r="4" fill="#10b981" />
        <circle cx="520" cy="270" r="4" fill="#10b981" />
        <circle cx="350" cy="370" r="4" fill="#10b981" />
        <circle cx="400" cy="380" r="4" fill="#10b981" />
        <circle cx="310" cy="210" r="4" fill="#10b981" />
        <circle cx="490" cy="380" r="4" fill="#10b981" />
        <circle cx="160" cy="280" r="4" fill="#10b981" />
        <circle cx="540" cy="330" r="4" fill="#10b981" />
        <circle cx="380" cy="200" r="4" fill="#10b981" />
        <circle cx="200" cy="380" r="4" fill="#10b981" />
        <circle cx="560" cy="290" r="4" fill="#10b981" />
        <circle cx="450" cy="220" r="4" fill="#10b981" />
      </g>

      {/* Title */}
      <text x="370" y="540" textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--ink)" fontFamily="Fraunces, serif">
        Prokaryote (Bacterium)
      </text>
    </svg>
  );
}
