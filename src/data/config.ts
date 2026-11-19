const config = {
  title: "Gowtham Pogala | Java Full Stack & AI Developer",
  description: {
    long: "Portfolio of Gowtham Pogala, a Java full stack developer and B.Tech AI & Data Science graduate. Explore my projects in RAG, LLM applications, n8n automation and Spring Boot.",
    short:
      "Gowtham Pogala is a Java full stack developer building AI applications, including RAG assistants and automation workflows.",
  },
  keywords: [
    "Gowtham Pogala",
    "Java Full Stack Developer",
    "Spring Boot",
    "React",
    "RAG",
    "AI Developer",
    "n8n automation",
    "portfolio",
  ],
  author: "Gowtham Pogala",
  email: "contactgowthamph@gmail.com",
  // Production domain: defaults to VERCEL_PROJECT_PRODUCTION_URL / NEXT_PUBLIC_SITE_URL or localhost for dev
  site:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),

  // for github stars button
  githubUsername: "gowtham16122004",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/gowtham-p-h-a782b3279",
    instagram: "https://www.instagram.com/gowthxm_ph",
    github: "https://github.com/gowtham16122004",
  },
};
export { config };
