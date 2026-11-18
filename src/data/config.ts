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
  // TODO: Update to production domain after deployment
  site: "http://localhost:3000",

  // for github stars button
  githubUsername: "gowtham16122004",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    // Retained placeholders because hero.tsx and social-media-icons.tsx require these properties
    twitter: "https://x.com",
    linkedin: "https://www.linkedin.com/in/gowtham-ph",
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    github: "https://github.com/gowtham16122004",
  },
};
export { config };
