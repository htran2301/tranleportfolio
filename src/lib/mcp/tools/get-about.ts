import { defineTool } from "@lovable.dev/mcp-js";

const ABOUT = {
  name: "Tran Le",
  location: "Atlanta, GA",
  headline:
    "Graduate Research Assistant and M.S. student in Data Science and Analytics at Georgia State University.",
  bio: [
    "I'm a Graduate Research Assistant and Master's student in Data Science and Analytics at Georgia State University, with a strong foundation in data analytics, machine learning, and healthcare data. My research focuses on leveraging advanced analytics to support clinical decision-making and patient outcomes.",
    "Currently, I collaborate with the Shepherd Center on healthcare analytics projects, applying machine learning techniques to stroke patient rehabilitation data. My goal is to bridge the gap between complex data and meaningful insights that drive real-world impact.",
    "I'm currently seeking a full-time position/internship starting in Fall 2026 (August) and a full-time role in December 2026 in Data Analytics, Data Science, and Data Engineering.",
  ],
  education: [
    {
      degree: "M.S. in Data Science and Analytics",
      school: "Georgia State University",
      detail: "Concentration: Data Science in Business • GPA: 4.05",
      period: "Expected Dec 2026",
    },
    {
      degree: "B.B.A. in Computer Information Systems",
      school: "Georgia State University",
      detail: "Data Analytics Concentration • Magna Cum Laude",
      period: "May 2025",
    },
  ],
  values: [
    { title: "Analytical Rigor", description: "Methodical, evidence-based approaches in every analysis." },
    { title: "Reproducibility", description: "Transparent, well-documented work that can be validated and built upon." },
    { title: "Collaboration", description: "Working effectively with cross-functional teams to achieve shared goals." },
  ],
};

export default defineTool({
  name: "get_about",
  title: "Get about",
  description: "Return a short bio, education history, and personal values for Tran Le.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(ABOUT, null, 2) }],
    structuredContent: ABOUT,
  }),
});