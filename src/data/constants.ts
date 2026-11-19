// order = keycap layout, 6 per row
export enum SkillNames {
  JAVA = "java",
  SPRINGBOOT = "springboot",
  PYTHON = "python",
  JS = "js",
  REACT = "react",
  FASTAPI = "fastapi",
  NODEJS = "nodejs",
  HTML5 = "html5",
  CSS3 = "css3",
  MYSQL = "mysql",
  DOCKER = "docker",
  GIT = "git",
  GITHUB = "github",
  POSTMAN = "postman",
  N8N = "n8n",
  VERCEL = "vercel",
  GEMINI = "gemini",
  CLAUDE = "claude",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
  /** Optional local artwork for the 3D key; falls back to icon. */
  keyboardIcon?: string;
  /** Plastic color of the 3D keycap; independent of the HTML brand accent. */
  keyboardColor?: string;
  /** Browser KeyboardEvent.code, e.g. KeyJ. Defaults to the displayed key order. */
  shortcut?: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JAVA]: {
    id: 1,
    name: "java",
    label: "Java",
    shortDescription: "Core Java and JDBC. My main backend language.",
    color: "#0074BD",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    keyboardIcon: "/assets/keyboard/logos/java.svg",
    keyboardColor: "#0074BD",
  },
  [SkillNames.SPRINGBOOT]: {
    id: 2,
    name: "springboot",
    label: "Spring Boot",
    shortDescription: "REST APIs and database-backed backend apps.",
    color: "#6DB33F",
    icon: "https://cdn.simpleicons.org/springboot/6DB33F",
    keyboardIcon: "/assets/keyboard/logos/springboot.svg",
    keyboardColor: "#6DB33F",
  },
  [SkillNames.PYTHON]: {
    id: 3,
    name: "python",
    label: "Python",
    shortDescription: "FastAPI backends and AI/RAG work.",
    color: "#3776AB",
    icon: "https://cdn.simpleicons.org/python/3776AB",
    keyboardIcon: "/assets/keyboard/logos/python.svg",
    keyboardColor: "#008fd5",
  },
  [SkillNames.JS]: {
    id: 4,
    name: "js",
    label: "JavaScript",
    shortDescription: "Frontend logic and scripting.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    keyboardIcon: "/assets/keyboard/logos/js.svg",
    keyboardColor: "#ff9408",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Component-based UIs, used in Folio.ai.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    keyboardIcon: "/assets/keyboard/logos/react.svg",
    keyboardColor: "#00cce8",
  },
  [SkillNames.FASTAPI]: {
    id: 6,
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "Python backend for Folio.ai.",
    color: "#009688",
    icon: "https://cdn.simpleicons.org/fastapi/009688",
    keyboardIcon: "/assets/keyboard/logos/fastapi.svg",
    keyboardColor: "#009688",
  },
  [SkillNames.NODEJS]: {
    id: 7,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript runtime for scripts and REST services.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    keyboardIcon: "/assets/keyboard/logos/nodejs.svg",
    keyboardColor: "#00952c",
  },
  [SkillNames.HTML5]: {
    id: 8,
    name: "html5",
    label: "HTML5",
    shortDescription: "Semantic markup for responsive pages.",
    color: "#E34F26",
    icon: "https://cdn.simpleicons.org/html5/E34F26",
    keyboardIcon: "/assets/keyboard/logos/html5.svg",
    keyboardColor: "#E34F26",
  },
  [SkillNames.CSS3]: {
    id: 9,
    name: "css3",
    label: "CSS3",
    shortDescription: "Responsive layouts and styling.",
    color: "#663399",
    icon: "https://cdn.simpleicons.org/css/663399",
    keyboardIcon: "/assets/keyboard/logos/css3.svg",
    keyboardColor: "#663399",
  },
  [SkillNames.MYSQL]: {
    id: 10,
    name: "mysql",
    label: "MySQL",
    shortDescription: "Relational schemas and CRUD via JDBC.",
    color: "#4479A1",
    icon: "https://cdn.simpleicons.org/mysql/4479A1",
    keyboardIcon: "/assets/keyboard/logos/mysql.svg",
    keyboardColor: "#4479A1",
  },
  [SkillNames.DOCKER]: {
    id: 11,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerizing the Vaani n8n setup.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    keyboardIcon: "/assets/keyboard/logos/docker.svg",
    keyboardColor: "#009fe8",
  },
  [SkillNames.GIT]: {
    id: 12,
    name: "git",
    label: "Git",
    shortDescription: "Version control for all my projects.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    keyboardIcon: "/assets/keyboard/logos/git.svg",
    keyboardColor: "#ff4622",
  },
  [SkillNames.GITHUB]: {
    id: 13,
    name: "github",
    label: "GitHub",
    shortDescription: "Repo hosting and collaboration.",
    color: "#181717",
    icon: "https://cdn.simpleicons.org/github/181717",
    keyboardIcon: "/assets/keyboard/logos/github.svg",
    keyboardColor: "#24292e",
  },
  [SkillNames.POSTMAN]: {
    id: 14,
    name: "postman",
    label: "Postman",
    shortDescription: "Testing and debugging REST APIs.",
    color: "#FF6C37",
    icon: "https://cdn.simpleicons.org/postman/FF6C37",
    keyboardIcon: "/assets/keyboard/logos/postman.svg",
    keyboardColor: "#FF6C37",
  },
  [SkillNames.N8N]: {
    id: 15,
    name: "n8n",
    label: "n8n",
    shortDescription: "Workflow automation behind Vaani.",
    color: "#FF91AC",
    icon: "https://cdn.simpleicons.org/n8n/FF91AC",
    keyboardIcon: "/assets/keyboard/logos/n8n.svg",
    keyboardColor: "#FF91AC",
  },
  [SkillNames.VERCEL]: {
    id: 16,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Frontend deployment.",
    color: "#000000",
    icon: "https://cdn.simpleicons.org/vercel/FFFFFF",
    keyboardIcon: "/assets/keyboard/logos/vercel.svg",
    keyboardColor: "#171717",
  },
  [SkillNames.GEMINI]: {
    id: 17,
    name: "gemini",
    label: "Gemini",
    shortDescription: "Embeddings and LLM API in Folio.ai and Vaani.",
    color: "#8E75B2",
    icon: "https://cdn.simpleicons.org/googlegemini/8E75B2",
    keyboardIcon: "/assets/keyboard/logos/gemini.svg",
    keyboardColor: "#8E75B2",
  },
  [SkillNames.CLAUDE]: {
    id: 18,
    name: "claude",
    label: "Claude",
    shortDescription: "Claude Code for AI-assisted development.",
    color: "#d97757",
    icon: "https://cdn.simpleicons.org/claude/D97757",
    keyboardIcon: "/assets/keyboard/logos/claude.svg",
    keyboardColor: "#d97757",
  },
};

export type Experience = {
  id: number;
  // multiple periods = returning stint, avoids a duplicate card
  periods: { start: string; end: string }[];
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    periods: [{ start: "Aug 2026", end: "Present" }],
    title: "Java Full Stack Developer Intern",
    company: "TAP Academy",
    description: [
      "Building full-stack applications using Java, Spring Boot, REST APIs and MySQL.",
      "Developing backend logic, database connectivity and CRUD operations.",
      "Creating responsive interfaces with HTML, CSS and JavaScript, managed with Git and GitHub.",
    ],
    // TODO-LINK // TODO-IMAGE // TODO-TECH-LIST: tech list / skills field not provided in prompt; kept empty to match shape without inventing
    skills: [],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
