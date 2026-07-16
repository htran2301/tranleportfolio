import { defineTool } from "@lovable.dev/mcp-js";

const AWARDS = [
  { title: "AMCIS 2025 Reviewer", institution: "Americas Conference on Information Systems", period: "August 2025", type: "certificate" },
  { title: "Delta Analytics Scholars", institution: "Georgia State University Foundation", period: "Spring 2026", type: "scholarship" },
  { title: "Outstanding Work Recognition", institution: "Shepherd Center", period: "December 2025", type: "certificate" },
  { title: "Fall 2025 Analytics Sprint", institution: "Georgia State University & Shepherd Center", period: "December 2025", type: "certificate" },
  { title: "WIT Campus Graduate", institution: "Women in Technology", period: "2025", type: "certificate" },
  { title: "Undergraduate Research Fellow", institution: "J. Mack Robinson College of Business", period: "Spring 2024", type: "certificate" },
  { title: "Dean's List", institution: "Georgia State University", period: "Fall 2024, Spring 2023", type: "dean" },
  { title: "President's List", institution: "Georgia State University", period: "Spring 2025, Summer 2024", type: "president" },
];

export default defineTool({
  name: "list_awards",
  title: "List awards",
  description: "List Tran Le's academic and professional awards, honors, and certificates.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(AWARDS, null, 2) }],
    structuredContent: { awards: AWARDS },
  }),
});