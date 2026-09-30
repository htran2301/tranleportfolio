import { defineTool } from "@lovable.dev/mcp-js";

const CONTACT = {
  name: "Tran Le",
  email: "tranle2301.01@gmail.com",
  phone: "(206) 209-8181",
  location: "Atlanta, GA",
  linkedin: "https://www.linkedin.com/in/tranle2301",
  github: "https://github.com/htran2301",
  portfolio: "https://tranleportfolio.lovable.app",
  seeking:
    "A full-time role starting in January 2027 in Data Analytics, Data Science, and Data Engineering.",
};

export default defineTool({
  name: "get_contact",
  title: "Get contact info",
  description: "Return Tran Le's public contact information and current job-search focus.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(CONTACT, null, 2) }],
    structuredContent: CONTACT,
  }),
});