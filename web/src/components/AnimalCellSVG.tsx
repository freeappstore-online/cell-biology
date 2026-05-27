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

export default function AnimalCellSVG({ hoveredId, selectedId, onHover, onSelect }: Props) {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full" role="img" aria-label="Animal cell diagram">
      {/* Cytoplasm background */}
      <ellipse cx="400" cy="300" rx="350" ry="260" fill="#fef3c7" opacity="0.5" />

      {/* Cell Membrane */}
      <ellipse
        cx="400" cy="300" rx="350" ry="260"
        fill="none" stroke="#60a5fa" strokeWidth="4"
        style={glow("cell-membrane", hoveredId, selectedId, "#3b82f6")}
        onMouseEnter={() => onHover("cell-membrane")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("cell-membrane")}
      />

      {/* Cytoskeleton — thin lines from centrosome */}
      <g
        style={glow("cytoskeleton", hoveredId, selectedId, "#475569")}
        onMouseEnter={() => onHover("cytoskeleton")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("cytoskeleton")}
      >
        <line x1="320" y1="220" x2="150" y2="120" stroke="#94a3b8" strokeWidth="1" opacity="0.6" />
        <line x1="320" y1="220" x2="100" y2="280" stroke="#94a3b8" strokeWidth="1" opacity="0.6" />
        <line x1="320" y1="220" x2="200" y2="450" stroke="#94a3b8" strokeWidth="1" opacity="0.6" />
        <line x1="320" y1="220" x2="500" y2="100" stroke="#94a3b8" strokeWidth="1" opacity="0.6" />
        <line x1="320" y1="220" x2="650" y2="200" stroke="#94a3b8" strokeWidth="1" opacity="0.6" />
        <line x1="320" y1="220" x2="600" y2="420" stroke="#94a3b8" strokeWidth="1" opacity="0.6" />
        <line x1="320" y1="220" x2="350" y2="500" stroke="#94a3b8" strokeWidth="1" opacity="0.6" />
        <line x1="320" y1="220" x2="680" y2="340" stroke="#94a3b8" strokeWidth="1" opacity="0.6" />
      </g>

      {/* Centrosome */}
      <g
        style={glow("centrosome", hoveredId, selectedId, "#0891b2")}
        onMouseEnter={() => onHover("centrosome")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("centrosome")}
      >
        <circle cx="320" cy="220" r="12" fill="#06b6d4" opacity="0.8" />
        <rect x="312" y="212" width="6" height="16" rx="2" fill="#0e7490" />
        <rect x="322" y="212" width="6" height="16" rx="2" fill="#0e7490" />
      </g>

      {/* Nucleus — large oval */}
      <g
        style={glow("nucleus", hoveredId, selectedId, "#7c3aed")}
        onMouseEnter={() => onHover("nucleus")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("nucleus")}
      >
        {/* Nuclear envelope — double line */}
        <ellipse cx="400" cy="280" rx="110" ry="85" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="3" />
        <ellipse cx="400" cy="280" rx="105" ry="80" fill="none" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 3" />
        {/* Chromatin strands */}
        <path d="M360 260 Q380 250 370 270 Q360 290 380 280 Q400 270 390 295" fill="none" stroke="#6d28d9" strokeWidth="1.5" opacity="0.5" />
        <path d="M420 260 Q440 275 425 285 Q410 295 430 300" fill="none" stroke="#6d28d9" strokeWidth="1.5" opacity="0.5" />
      </g>

      {/* Nucleolus */}
      <circle
        cx="410" cy="275" r="22"
        fill="#6d28d9" opacity="0.7"
        style={glow("nucleolus", hoveredId, selectedId, "#5b21b6")}
        onMouseEnter={() => onHover("nucleolus")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("nucleolus")}
      />

      {/* Rough ER — wavy lines with dots near nucleus */}
      <g
        style={glow("rough-er", hoveredId, selectedId, "#d97706")}
        onMouseEnter={() => onHover("rough-er")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("rough-er")}
      >
        <path d="M520 240 Q540 230 550 250 Q560 270 540 280 Q520 290 530 310 Q540 330 520 340" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
        <path d="M540 235 Q560 225 570 245 Q580 265 560 275 Q540 285 550 305 Q560 325 540 335" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
        {/* Ribosomes on rough ER */}
        <circle cx="520" cy="240" r="3" fill="#10b981" />
        <circle cx="550" cy="250" r="3" fill="#10b981" />
        <circle cx="540" cy="280" r="3" fill="#10b981" />
        <circle cx="530" cy="310" r="3" fill="#10b981" />
        <circle cx="540" cy="235" r="3" fill="#10b981" />
        <circle cx="570" cy="245" r="3" fill="#10b981" />
        <circle cx="560" cy="275" r="3" fill="#10b981" />
        <circle cx="550" cy="305" r="3" fill="#10b981" />
        <circle cx="555" cy="260" r="3" fill="#10b981" />
        <circle cx="535" cy="295" r="3" fill="#10b981" />
      </g>

      {/* Smooth ER — wavy lines without dots */}
      <g
        style={glow("smooth-er", hoveredId, selectedId, "#f59e0b")}
        onMouseEnter={() => onHover("smooth-er")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("smooth-er")}
      >
        <path d="M570 350 Q590 340 595 360 Q600 380 580 385 Q560 390 565 410 Q570 430 555 435" fill="none" stroke="#fbbf24" strokeWidth="2.5" />
        <path d="M585 345 Q605 335 610 355 Q615 375 595 380 Q575 385 580 405 Q585 425 570 430" fill="none" stroke="#fbbf24" strokeWidth="2.5" />
      </g>

      {/* Golgi Apparatus — stacked discs */}
      <g
        style={glow("golgi", hoveredId, selectedId, "#ea580c")}
        onMouseEnter={() => onHover("golgi")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("golgi")}
      >
        <path d="M220 350 Q250 340 280 350" fill="none" stroke="#f97316" strokeWidth="5" strokeLinecap="round" />
        <path d="M225 365 Q255 355 285 365" fill="none" stroke="#f97316" strokeWidth="5" strokeLinecap="round" />
        <path d="M228 380 Q258 370 288 380" fill="none" stroke="#f97316" strokeWidth="5" strokeLinecap="round" />
        <path d="M230 395 Q260 385 290 395" fill="none" stroke="#f97316" strokeWidth="5" strokeLinecap="round" />
        {/* Vesicles budding off */}
        <circle cx="295" cy="352" r="6" fill="#fdba74" stroke="#f97316" strokeWidth="1.5" />
        <circle cx="298" cy="375" r="5" fill="#fdba74" stroke="#f97316" strokeWidth="1.5" />
      </g>

      {/* Mitochondria — bean shapes with cristae */}
      <g
        style={glow("mitochondria", hoveredId, selectedId, "#dc2626")}
        onMouseEnter={() => onHover("mitochondria")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("mitochondria")}
      >
        {/* Mitochondrion 1 */}
        <ellipse cx="180" cy="200" rx="40" ry="18" fill="#fecaca" stroke="#ef4444" strokeWidth="2" transform="rotate(-20 180 200)" />
        <path d="M160 195 Q170 185 170 200 Q170 215 160 205" fill="none" stroke="#ef4444" strokeWidth="1.2" transform="rotate(-20 180 200)" />
        <path d="M175 195 Q185 185 185 200 Q185 215 175 205" fill="none" stroke="#ef4444" strokeWidth="1.2" transform="rotate(-20 180 200)" />
        <path d="M190 195 Q200 185 200 200 Q200 215 190 205" fill="none" stroke="#ef4444" strokeWidth="1.2" transform="rotate(-20 180 200)" />

        {/* Mitochondrion 2 */}
        <ellipse cx="620" cy="180" rx="35" ry="16" fill="#fecaca" stroke="#ef4444" strokeWidth="2" transform="rotate(15 620 180)" />
        <path d="M603 175 Q611 167 611 180 Q611 193 603 185" fill="none" stroke="#ef4444" strokeWidth="1.2" transform="rotate(15 620 180)" />
        <path d="M616 175 Q624 167 624 180 Q624 193 616 185" fill="none" stroke="#ef4444" strokeWidth="1.2" transform="rotate(15 620 180)" />
        <path d="M629 175 Q637 167 637 180 Q637 193 629 185" fill="none" stroke="#ef4444" strokeWidth="1.2" transform="rotate(15 620 180)" />

        {/* Mitochondrion 3 */}
        <ellipse cx="260" cy="460" rx="38" ry="16" fill="#fecaca" stroke="#ef4444" strokeWidth="2" transform="rotate(30 260 460)" />
        <path d="M242 455 Q250 447 250 460 Q250 473 242 465" fill="none" stroke="#ef4444" strokeWidth="1.2" transform="rotate(30 260 460)" />
        <path d="M256 455 Q264 447 264 460 Q264 473 256 465" fill="none" stroke="#ef4444" strokeWidth="1.2" transform="rotate(30 260 460)" />
        <path d="M270 455 Q278 447 278 460 Q278 473 270 465" fill="none" stroke="#ef4444" strokeWidth="1.2" transform="rotate(30 260 460)" />

        {/* Mitochondrion 4 */}
        <ellipse cx="500" cy="440" rx="32" ry="14" fill="#fecaca" stroke="#ef4444" strokeWidth="2" transform="rotate(-10 500 440)" />
        <path d="M485 435 Q492 428 492 440 Q492 452 485 445" fill="none" stroke="#ef4444" strokeWidth="1.2" transform="rotate(-10 500 440)" />
        <path d="M497 435 Q504 428 504 440 Q504 452 497 445" fill="none" stroke="#ef4444" strokeWidth="1.2" transform="rotate(-10 500 440)" />
        <path d="M509 435 Q516 428 516 440 Q516 452 509 445" fill="none" stroke="#ef4444" strokeWidth="1.2" transform="rotate(-10 500 440)" />
      </g>

      {/* Free Ribosomes — scattered dots */}
      <g
        style={glow("ribosomes", hoveredId, selectedId, "#059669")}
        onMouseEnter={() => onHover("ribosomes")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("ribosomes")}
      >
        <circle cx="150" cy="300" r="3.5" fill="#10b981" />
        <circle cx="170" cy="340" r="3.5" fill="#10b981" />
        <circle cx="200" cy="320" r="3.5" fill="#10b981" />
        <circle cx="350" cy="430" r="3.5" fill="#10b981" />
        <circle cx="380" cy="450" r="3.5" fill="#10b981" />
        <circle cx="450" cy="400" r="3.5" fill="#10b981" />
        <circle cx="500" cy="350" r="3.5" fill="#10b981" />
        <circle cx="650" cy="280" r="3.5" fill="#10b981" />
        <circle cx="670" cy="320" r="3.5" fill="#10b981" />
        <circle cx="300" cy="150" r="3.5" fill="#10b981" />
        <circle cx="480" cy="170" r="3.5" fill="#10b981" />
        <circle cx="200" cy="400" r="3.5" fill="#10b981" />
      </g>

      {/* Lysosomes — small circles */}
      <g
        style={glow("lysosomes", hoveredId, selectedId, "#db2777")}
        onMouseEnter={() => onHover("lysosomes")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("lysosomes")}
      >
        <circle cx="340" cy="420" r="12" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" />
        <circle cx="380" cy="390" r="10" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" />
        <circle cx="160" cy="260" r="11" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" />
      </g>

      {/* Peroxisomes — small circles */}
      <g
        style={glow("peroxisomes", hoveredId, selectedId, "#9333ea")}
        onMouseEnter={() => onHover("peroxisomes")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("peroxisomes")}
      >
        <circle cx="640" cy="380" r="10" fill="#f3e8ff" stroke="#a855f7" strokeWidth="2" />
        <circle cx="450" cy="480" r="9" fill="#f3e8ff" stroke="#a855f7" strokeWidth="2" />
      </g>

      {/* Vacuoles — small irregular shapes */}
      <g
        style={glow("vacuoles", hoveredId, selectedId, "#0d9488")}
        onMouseEnter={() => onHover("vacuoles")}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect("vacuoles")}
      >
        <path d="M590 440 Q600 425 615 435 Q625 445 615 460 Q605 470 590 460 Q580 450 590 440Z" fill="#ccfbf1" stroke="#14b8a6" strokeWidth="2" />
        <path d="M130" fill="none" />
        <ellipse cx="150" cy="170" rx="18" ry="14" fill="#ccfbf1" stroke="#14b8a6" strokeWidth="2" />
        <ellipse cx="680" cy="250" rx="15" ry="20" fill="#ccfbf1" stroke="#14b8a6" strokeWidth="2" />
      </g>

      {/* Labels */}
      <text x="400" y="35" textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--ink)" fontFamily="Fraunces, serif">
        Animal Cell
      </text>
    </svg>
  );
}
