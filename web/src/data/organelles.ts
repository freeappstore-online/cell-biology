import type { Organelle, QuizQuestion } from "./types";

export const organelles: Organelle[] = [
  {
    id: "cell-membrane",
    name: "Cell Membrane",
    description:
      "A flexible, semi-permeable lipid bilayer that surrounds all cells. It controls what enters and leaves the cell, maintaining homeostasis. The membrane contains proteins that act as channels, receptors, and enzymes.",
    funFact:
      "If you could flatten out all the cell membranes in your body, they would cover an area of about 100 acres — roughly 60 football fields!",
    foundIn: ["animal", "plant", "prokaryote"],
    analogy:
      "The cell membrane is like a security fence with guarded gates — it decides who gets in and who stays out.",
    color: "#60a5fa",
    glowColor: "#3b82f6",
  },
  {
    id: "nucleus",
    name: "Nucleus",
    description:
      "The command center of the cell, enclosed by a double membrane called the nuclear envelope. It houses DNA organized into chromosomes and contains the nucleolus, where ribosomal RNA is made. It controls gene expression and cell division.",
    funFact:
      "The nucleus contains about 2 meters (6.5 feet) of DNA packed into a space just 6 micrometers across — like stuffing 40 km of thread into a tennis ball.",
    foundIn: ["animal", "plant"],
    analogy:
      "The nucleus is like city hall — it holds the master blueprints and issues orders for everything the cell builds.",
    color: "#8b5cf6",
    glowColor: "#7c3aed",
  },
  {
    id: "nucleolus",
    name: "Nucleolus",
    description:
      "A dense, round structure inside the nucleus responsible for producing ribosomal RNA (rRNA). It assembles the subunits of ribosomes, which then travel to the cytoplasm to build proteins.",
    funFact:
      "The nucleolus can make up to 10,000 ribosomes per minute in a rapidly dividing cell!",
    foundIn: ["animal", "plant"],
    analogy:
      "The nucleolus is like a factory within city hall that manufactures the machinery (ribosomes) other factories need.",
    color: "#6d28d9",
    glowColor: "#5b21b6",
  },
  {
    id: "rough-er",
    name: "Rough Endoplasmic Reticulum",
    description:
      "A network of membrane-enclosed channels studded with ribosomes on its surface. It synthesizes proteins destined for membranes, secretion, or organelles. Proteins fold into their 3D shapes here.",
    funFact:
      "The rough ER can occupy more than half the total membrane in a cell that secretes lots of proteins, like a pancreatic cell.",
    foundIn: ["animal", "plant"],
    analogy:
      "The rough ER is like an assembly line — workers (ribosomes) sit along it building and packaging products.",
    color: "#f59e0b",
    glowColor: "#d97706",
  },
  {
    id: "smooth-er",
    name: "Smooth Endoplasmic Reticulum",
    description:
      "A network of tubular membranes without ribosomes. It synthesizes lipids, metabolizes carbohydrates, detoxifies drugs and poisons, and stores calcium ions for cell signaling.",
    funFact:
      "Liver cells have extensive smooth ER because they detoxify alcohol, drugs, and metabolic waste — the more you drink, the more smooth ER your liver grows!",
    foundIn: ["animal", "plant"],
    analogy:
      "The smooth ER is like a chemical processing plant — it makes lipids, cleans up toxins, and stores important materials.",
    color: "#fbbf24",
    glowColor: "#f59e0b",
  },
  {
    id: "golgi",
    name: "Golgi Apparatus",
    description:
      "A stack of flattened membrane sacs (cisternae) that modifies, sorts, and packages proteins and lipids for transport. It adds sugar groups to proteins (glycosylation) and directs molecules to their final destinations.",
    funFact:
      "The Golgi apparatus was named after Camillo Golgi, who discovered it in 1898 using a silver staining technique he invented. He won the Nobel Prize in 1906.",
    foundIn: ["animal", "plant"],
    analogy:
      "The Golgi apparatus is like a post office — it receives packages, labels them, and ships them to the right address.",
    color: "#f97316",
    glowColor: "#ea580c",
  },
  {
    id: "mitochondria",
    name: "Mitochondria",
    description:
      "Double-membraned organelles that generate most of the cell's ATP through cellular respiration. The inner membrane folds into cristae to increase surface area for the electron transport chain. They also play roles in apoptosis and calcium signaling.",
    funFact:
      "Mitochondria have their own DNA and reproduce independently inside cells — evidence they were once free-living bacteria that were engulfed by ancient cells (endosymbiosis theory).",
    foundIn: ["animal", "plant"],
    analogy:
      "Mitochondria are like power plants — they burn fuel (glucose) and produce the energy currency (ATP) that runs everything.",
    color: "#ef4444",
    glowColor: "#dc2626",
  },
  {
    id: "ribosomes",
    name: "Ribosomes",
    description:
      "Tiny molecular machines made of rRNA and protein that translate mRNA into polypeptide chains. They can be free in the cytoplasm (making proteins for internal use) or bound to the rough ER (making proteins for export).",
    funFact:
      "A single bacterial cell contains about 20,000 ribosomes, making up roughly 25% of the cell's total mass!",
    foundIn: ["animal", "plant", "prokaryote"],
    analogy:
      "Ribosomes are like 3D printers — they read the instruction file (mRNA) and build a product (protein) one layer at a time.",
    color: "#10b981",
    glowColor: "#059669",
  },
  {
    id: "lysosomes",
    name: "Lysosomes",
    description:
      "Membrane-bound sacs containing digestive enzymes (hydrolases) that break down worn-out organelles, food particles, bacteria, and cellular debris. They maintain an acidic internal pH of about 4.5–5.0.",
    funFact:
      "If a lysosome burst inside a cell, its enzymes would digest the cell from the inside — but the neutral pH of the cytoplasm quickly inactivates them as a safety mechanism.",
    foundIn: ["animal"],
    analogy:
      "Lysosomes are like the recycling center and waste disposal — they break down old parts so the materials can be reused.",
    color: "#ec4899",
    glowColor: "#db2777",
  },
  {
    id: "centrosome",
    name: "Centrosome",
    description:
      "An organelle near the nucleus containing two centrioles made of microtubule triplets. It organizes the mitotic spindle during cell division and serves as the main microtubule organizing center (MTOC) of the cell.",
    funFact:
      "Plant cells can divide without centrosomes — they use a completely different mechanism to organize their spindle fibers!",
    foundIn: ["animal"],
    analogy:
      "The centrosome is like a traffic coordinator at a roundabout — it organizes the microtubule highways and directs chromosome traffic during division.",
    color: "#06b6d4",
    glowColor: "#0891b2",
  },
  {
    id: "cytoskeleton",
    name: "Cytoskeleton",
    description:
      "A dynamic network of protein filaments (microfilaments, intermediate filaments, and microtubules) that gives the cell its shape, enables movement, and provides tracks for organelle transport.",
    funFact:
      "The cytoskeleton is constantly being assembled and disassembled — microtubules can grow and shrink at rates of 1 micrometer per second!",
    foundIn: ["animal", "plant"],
    analogy:
      "The cytoskeleton is like the steel beams and railways inside a building — it provides structure and transportation routes.",
    color: "#64748b",
    glowColor: "#475569",
  },
  {
    id: "peroxisomes",
    name: "Peroxisomes",
    description:
      "Small, membrane-bound organelles that contain oxidative enzymes. They break down fatty acids through beta-oxidation and detoxify harmful substances like hydrogen peroxide, converting it to water and oxygen.",
    funFact:
      "Peroxisomes can replicate by dividing in two, similar to mitochondria, and a single liver cell can contain over 1,000 peroxisomes!",
    foundIn: ["animal", "plant"],
    analogy:
      "Peroxisomes are like hazmat cleanup crews — they neutralize dangerous chemicals and break down toxic waste.",
    color: "#a855f7",
    glowColor: "#9333ea",
  },
  {
    id: "vacuoles",
    name: "Vacuoles",
    description:
      "Membrane-bound sacs that store water, nutrients, waste products, and other materials. In animal cells, they are small and numerous. They help maintain turgor pressure and can participate in intracellular digestion.",
    funFact:
      "Some single-celled organisms like amoebas use food vacuoles to digest entire prey organisms they engulf!",
    foundIn: ["animal", "plant"],
    analogy:
      "Vacuoles are like storage closets — they keep supplies, waste, and water tucked away until needed.",
    color: "#14b8a6",
    glowColor: "#0d9488",
  },
  // Plant-specific
  {
    id: "cell-wall",
    name: "Cell Wall",
    description:
      "A rigid outer layer made primarily of cellulose that surrounds the cell membrane in plant cells. It provides structural support, protection, and prevents the cell from bursting when water enters by osmosis.",
    funFact:
      "Wood is mostly made of cell walls! When plant cells die, their tough cellulose walls remain, forming the wood we use for building.",
    foundIn: ["plant", "prokaryote"],
    analogy:
      "The cell wall is like a castle wall — it provides rigid protection and structure that the flexible membrane alone cannot.",
    color: "#84cc16",
    glowColor: "#65a30d",
  },
  {
    id: "chloroplasts",
    name: "Chloroplasts",
    description:
      "Double-membraned organelles that carry out photosynthesis, converting light energy, water, and CO2 into glucose and oxygen. They contain thylakoid membranes stacked into grana, where chlorophyll captures light.",
    funFact:
      "Like mitochondria, chloroplasts have their own DNA and were once free-living cyanobacteria — they were engulfed by ancient eukaryotic cells about 1.5 billion years ago.",
    foundIn: ["plant"],
    analogy:
      "Chloroplasts are like solar panels with built-in kitchens — they capture sunlight and use it to cook up food (glucose) for the plant.",
    color: "#22c55e",
    glowColor: "#16a34a",
  },
  {
    id: "central-vacuole",
    name: "Central Vacuole",
    description:
      "A very large, fluid-filled organelle that can occupy up to 90% of a plant cell's volume. It stores water, ions, and nutrients, maintains turgor pressure that keeps the plant rigid, and stores pigments and defensive compounds.",
    funFact:
      "When you see a wilted plant, it's because the central vacuoles have lost water and turgor pressure — watering it literally re-inflates millions of tiny cellular water balloons!",
    foundIn: ["plant"],
    analogy:
      "The central vacuole is like a giant water tower — it stores water under pressure to keep the whole structure standing tall.",
    color: "#38bdf8",
    glowColor: "#0ea5e9",
  },
  {
    id: "plasmodesmata",
    name: "Plasmodesmata",
    description:
      "Microscopic channels that traverse the cell wall, connecting the cytoplasm of adjacent plant cells. They allow direct cell-to-cell communication and transport of molecules, ions, and even some proteins and RNA.",
    funFact:
      "Plasmodesmata can open and close like valves — during viral infections, some viruses hijack these channels to spread from cell to cell!",
    foundIn: ["plant"],
    analogy:
      "Plasmodesmata are like tunnels between neighboring buildings — they let residents pass messages and share resources directly.",
    color: "#a3e635",
    glowColor: "#84cc16",
  },
  // Prokaryote-specific
  {
    id: "nucleoid",
    name: "Nucleoid Region",
    description:
      "An irregularly shaped region in prokaryotic cells where the circular DNA molecule is concentrated. Unlike a true nucleus, it has no surrounding membrane. The DNA is supercoiled and associated with proteins to fit in the small space.",
    funFact:
      "A single E. coli bacterium has a circular chromosome about 1.5 mm long — over 1,000 times the length of the cell itself!",
    foundIn: ["prokaryote"],
    analogy:
      "The nucleoid is like an open-plan office where the blueprints are spread out on tables — no walls, but everyone knows where to find the plans.",
    color: "#c084fc",
    glowColor: "#a855f7",
  },
  {
    id: "flagellum",
    name: "Flagellum",
    description:
      "A long, whip-like appendage that rotates like a propeller to move the bacterium through liquid environments. It is powered by a molecular motor at its base that can spin at up to 1,000 revolutions per second.",
    funFact:
      "The bacterial flagellar motor is one of the most efficient machines known — it can reverse direction in less than a millisecond!",
    foundIn: ["prokaryote"],
    analogy:
      "The flagellum is like an outboard motor on a boat — it spins to propel the cell through its watery environment.",
    color: "#f472b6",
    glowColor: "#ec4899",
  },
  {
    id: "pili",
    name: "Pili",
    description:
      "Short, hair-like protein appendages on the surface of bacteria. They help bacteria adhere to surfaces and other cells. Some specialized pili (sex pili) form bridges between bacteria to transfer DNA during conjugation.",
    funFact:
      "Pili are a major reason bacteria can cause infections — without them, many pathogenic bacteria cannot stick to your cells and are simply flushed away!",
    foundIn: ["prokaryote"],
    analogy:
      "Pili are like tiny grappling hooks — they let bacteria grab onto surfaces and hold on tight.",
    color: "#fb923c",
    glowColor: "#f97316",
  },
  {
    id: "plasmid",
    name: "Plasmid",
    description:
      "A small, circular piece of DNA separate from the main chromosome. Plasmids replicate independently and often carry genes for antibiotic resistance, toxin production, or other survival advantages. They can be transferred between bacteria.",
    funFact:
      "Scientists use plasmids as tools in genetic engineering — they insert genes into plasmids and introduce them into bacteria to produce insulin, growth hormones, and other medicines!",
    foundIn: ["prokaryote"],
    analogy:
      "Plasmids are like USB drives — small, portable packages of extra information that can be shared and copied between cells.",
    color: "#e879f9",
    glowColor: "#d946ef",
  },
  {
    id: "capsule",
    name: "Capsule",
    description:
      "A thick, gel-like polysaccharide layer outside the cell wall of some bacteria. It protects against phagocytosis by immune cells, prevents dehydration, and helps bacteria adhere to surfaces and form biofilms.",
    funFact:
      "The capsule is what makes some bacteria extra dangerous — Streptococcus pneumoniae without its capsule is harmless, but with it, it causes pneumonia!",
    foundIn: ["prokaryote"],
    analogy:
      "The capsule is like an invisible force field — it shields the bacterium from the body's immune defenses.",
    color: "#94a3b8",
    glowColor: "#64748b",
  },
];

export function getOrganellesForCell(
  cellType: "animal" | "plant" | "prokaryote",
): Organelle[] {
  return organelles.filter((o) => o.foundIn.includes(cellType));
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Which organelle is known as the 'powerhouse of the cell'?",
    correctAnswer: "Mitochondria",
    choices: ["Nucleus", "Mitochondria", "Chloroplasts", "Golgi Apparatus"],
  },
  {
    question: "Where does photosynthesis take place?",
    correctAnswer: "Chloroplasts",
    choices: [
      "Mitochondria",
      "Nucleus",
      "Chloroplasts",
      "Endoplasmic Reticulum",
    ],
  },
  {
    question:
      "Which structure is responsible for packaging and shipping proteins?",
    correctAnswer: "Golgi Apparatus",
    choices: [
      "Ribosomes",
      "Golgi Apparatus",
      "Lysosomes",
      "Smooth Endoplasmic Reticulum",
    ],
  },
  {
    question: "What organelle contains digestive enzymes?",
    correctAnswer: "Lysosomes",
    choices: ["Peroxisomes", "Vacuoles", "Lysosomes", "Ribosomes"],
  },
  {
    question: "Which structure is found in plant cells but NOT in animal cells?",
    correctAnswer: "Cell Wall",
    choices: ["Cell Membrane", "Cell Wall", "Ribosomes", "Mitochondria"],
  },
  {
    question: "What fills most of the volume of a mature plant cell?",
    correctAnswer: "Central Vacuole",
    choices: ["Nucleus", "Chloroplasts", "Central Vacuole", "Cytoplasm"],
  },
  {
    question: "Which organelle makes proteins?",
    correctAnswer: "Ribosomes",
    choices: ["Lysosomes", "Golgi Apparatus", "Ribosomes", "Peroxisomes"],
  },
  {
    question:
      "Where is DNA located in a prokaryotic cell?",
    correctAnswer: "Nucleoid Region",
    choices: ["Nucleus", "Nucleoid Region", "Plasmid", "Ribosome"],
  },
  {
    question: "What structure helps bacteria swim?",
    correctAnswer: "Flagellum",
    choices: ["Pili", "Capsule", "Flagellum", "Plasmid"],
  },
  {
    question:
      "Which organelle has its own DNA and was likely once a free-living organism?",
    correctAnswer: "Mitochondria",
    choices: ["Nucleus", "Golgi Apparatus", "Lysosomes", "Mitochondria"],
  },
  {
    question:
      "What channels connect adjacent plant cells through the cell wall?",
    correctAnswer: "Plasmodesmata",
    choices: [
      "Gap Junctions",
      "Plasmodesmata",
      "Pili",
      "Smooth ER",
    ],
  },
  {
    question:
      "Which organelle breaks down fatty acids and detoxifies hydrogen peroxide?",
    correctAnswer: "Peroxisomes",
    choices: ["Lysosomes", "Peroxisomes", "Smooth ER", "Mitochondria"],
  },
  {
    question: "What gives a plant cell its rigid shape?",
    correctAnswer: "Cell Wall",
    choices: [
      "Cell Membrane",
      "Cytoskeleton",
      "Cell Wall",
      "Central Vacuole",
    ],
  },
  {
    question:
      "What small circular DNA molecules can bacteria share between each other?",
    correctAnswer: "Plasmid",
    choices: ["Chromosome", "Plasmid", "Nucleoid", "Ribosome"],
  },
  {
    question: "Which organelle organizes the mitotic spindle during cell division?",
    correctAnswer: "Centrosome",
    choices: ["Nucleus", "Centrosome", "Golgi Apparatus", "Cytoskeleton"],
  },
];
