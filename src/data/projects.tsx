import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  // Not in the thesvg registry — keep the existing custom logo.
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: brand("Firebase", "firebase-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  sanity: brand("Sanity", "sanity-mono.svg"),
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  hono: brand("Hono", "hono-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  // React Native reuses the React mark.
  reactNative: brand("React Native", "react-mono.svg"),
  betterAuth: brand("Better Auth", "better-auth-mono.svg"),
  // Not in the thesvg registry — keep the text marks.
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Zu</span>,
  },
  partykit: {
    title: "PartyKit",
    bg: "black",
    fg: "white",
    icon: <span className="text-base">🎈</span>,
  },
  hocuspocus: {
    title: "Hocuspocus",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Hp</span>,
  },
  // React Flow ships under the xyflow brand.
  reactFlow: brand("React Flow", "xyflow-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  // "Satori / sharp" — uses the sharp mark.
  satori: brand("Satori / sharp", "sharp-mono.svg"),
  turborepo: brand("Turborepo", "turborepo-mono.svg"),
  // Vercel AI SDK uses the Vercel mark.
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  electron: brand("Electron", "electron-mono.svg"),
  vite: brand("Vite", "vite-mono.svg"),
  astro: brand("Astro", "astro-mono.svg"),
  sqlite: brand("SQLite", "sqlite-mono.svg"),
  ffmpeg: brand("FFmpeg", "ffmpeg-mono.svg"),
  ollama: brand("Ollama", "ollama-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  nextIntl: {
    title: "next-intl",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">i18n</span>,
  },
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Expo</span>,
  },
  mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MCP</span>,
  },
  // Skills for Gowtham's projects
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/assets/keyboard/logos/fastapi.svg" title="FastAPI" />,
  },
  faiss: {
    title: "FAISS",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">FAISS</span>,
  },
  gemini: {
    title: "Gemini",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/assets/keyboard/logos/gemini.svg" title="Gemini" />,
  },
  groq: {
    title: "Groq",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Groq</span>,
  },
  n8n: {
    title: "n8n",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/assets/keyboard/logos/n8n.svg" title="n8n" />,
  },
  telegram: {
    title: "Telegram Bot API",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">TG</span>,
  },
  whisper: {
    title: "Whisper",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Whisper</span>,
  },
  googleCalendar: {
    title: "Google Calendar",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">GCal</span>,
  },
  googleSheets: {
    title: "Google Sheets",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Sheets</span>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/assets/keyboard/logos/java.svg" title="Java" />,
  },
  springboot: {
    title: "Spring Boot",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/assets/keyboard/logos/springboot.svg" title="Spring Boot" />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/assets/keyboard/logos/mysql.svg" title="MySQL" />,
  },
  apacheTika: {
    title: "Apache Tika",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Tika</span>,
  },
  todoStack: {
    title: "TODO-STACK",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">TODO</span>,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "folio-ai",
    category: "RAG Assistant",
    title: "CiteQuire - Multi-PDF RAG Assistant",
    // TODO-IMAGE: placeholder image
    src: `${BASE_PATH}/folio-ai-main.jpg`,
    // TODO-IMAGE: placeholder images
    screenshots: [
      "folio-ai-main.jpg",
      "folio-ai-detail-1.jpg",
      "folio-ai-detail-2.jpg",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.faiss,
        PROJECT_SKILLS.gemini,
        PROJECT_SKILLS.groq,
      ],
    },
    live: "https://citequire-ai-multi-pdf-rag-assistan.vercel.app/",
    github: "https://github.com/gowtham16122004/citequire-ai-multi-pdf-rag-assistant",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A RAG assistant for working across multiple PDFs. Text is extracted
            with PyPDF and split with recursive chunking. FAISS handles semantic
            search over Gemini embeddings, and answers use the Groq API with
            page-level citations. Supports cross-document analysis and generating
            study materials.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              // TODO-IMAGE: placeholder detail screenshot 1
              `${BASE_PATH}/folio-ai-detail-1.jpg`,
              // TODO-IMAGE: placeholder detail screenshot 2
              `${BASE_PATH}/folio-ai-detail-2.jpg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "vaani",
    category: "Voice AI Assistant",
    title: "Vaani - Voice-First AI Assistant (Tamil + English)",
    // TODO-IMAGE: placeholder image
    src: `${BASE_PATH}/vaani-main.jpg`,
    // TODO-IMAGE: placeholder images
    screenshots: [
      "vaani-main.jpg",
      "vaani-detail-1.jpg",
      "vaani-detail-2.jpg",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.telegram],
      backend: [
        PROJECT_SKILLS.n8n,
        PROJECT_SKILLS.whisper,
        PROJECT_SKILLS.gemini,
        PROJECT_SKILLS.googleCalendar,
        PROJECT_SKILLS.googleSheets,
        PROJECT_SKILLS.docker,
      ],
    },
    // TODO-LINK: placeholder demo URL
    live: "https://vercel.com",
    // TODO-LINK: placeholder repo URL
    github: "https://github.com/gowtham16122004",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A voice-first assistant on Telegram that works in Tamil and English.
            Voice notes are transcribed with Whisper and turned into reminders,
            expense logs and retrievable notes using Gemini, Google Calendar and
            Google Sheets. Built from 10+ n8n workflows and run in Docker.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              // TODO-IMAGE: placeholder detail screenshot 1
              `${BASE_PATH}/vaani-detail-1.jpg`,
              // TODO-IMAGE: placeholder detail screenshot 2
              `${BASE_PATH}/vaani-detail-2.jpg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "kairo",
    category: "Productivity App",
    title: "Kairo - Daily Routine & Productivity Tracker",
    // TODO-IMAGE: placeholder image
    src: `${BASE_PATH}/kairo-main.jpg`,
    // TODO-IMAGE: placeholder images
    screenshots: [
      "kairo-main.jpg",
      "kairo-detail-1.jpg",
      "kairo-detail-2.jpg",
    ],
    skills: {
      // TODO-STACK: stack not provided
      frontend: [PROJECT_SKILLS.todoStack],
      backend: [],
    },
    github: "https://github.com/gowtham16122004/Kairos",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A productivity app for tracking your daily routine. Includes a
            to-do list, text notes, deep work sessions and a habit tracker.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              // TODO-IMAGE: placeholder detail screenshot 1
              `${BASE_PATH}/kairo-detail-1.jpg`,
              // TODO-IMAGE: placeholder detail screenshot 2
              `${BASE_PATH}/kairo-detail-2.jpg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "resume-screener",
    category: "AI Screening Tool",
    // TODO-NAME: project name in progress
    title: "Resume Screener (In Progress)",
    // TODO-IMAGE: placeholder image
    src: `${BASE_PATH}/resume-screener-main.jpg`,
    // TODO-IMAGE: placeholder images
    screenshots: [
      "resume-screener-main.jpg",
      "resume-screener-detail-1.jpg",
      "resume-screener-detail-2.jpg",
    ],
    // TODO-VERIFY: planned stack, not confirmed
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.springboot,
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.apacheTika,
      ],
    },
    github: "https://github.com/gowtham16122004/AI-Resume-RAG-System",
    get content() {
      return (
        <div>
          {/* TODO-VERIFY: no feature claims until confirmed */}
          <TypographyP className="font-mono">
            An AI-assisted resume screening tool for shortlisting candidates.
            Currently in development.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              // TODO-IMAGE: placeholder detail screenshot 1
              `${BASE_PATH}/resume-screener-detail-1.jpg`,
              // TODO-IMAGE: placeholder detail screenshot 2
              `${BASE_PATH}/resume-screener-detail-2.jpg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "kairo-dev-tracker",
    category: "Learning Roadmap",
    title: "Kairo Dev Tracker - Java Full Stack Roadmap",
    // TODO-IMAGE: placeholder image
    src: `${BASE_PATH}/kairo-dev-tracker-main.jpg`,
    // TODO-IMAGE: placeholder images
    screenshots: [
      "kairo-dev-tracker-main.jpg",
      "kairo-dev-tracker-detail-1.jpg",
      "kairo-dev-tracker-detail-2.jpg",
    ],
    skills: {
      // TODO-STACK: stack not provided
      frontend: [PROJECT_SKILLS.todoStack],
      backend: [],
    },
    live: "https://kairodevtrack.netlify.app/",
    github: "https://github.com/gowthampogala/Kairo-Dev-Track",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A hosted web app that lays out a Java Full Stack learning roadmap.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              // TODO-IMAGE: placeholder detail screenshot 1
              `${BASE_PATH}/kairo-dev-tracker-detail-1.jpg`,
              // TODO-IMAGE: placeholder detail screenshot 2
              `${BASE_PATH}/kairo-dev-tracker-detail-2.jpg`,
            ]}
          />
        </div>
      );
    },
  },
];

export default projects;
