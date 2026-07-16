import { defineTool } from "@lovable.dev/mcp-js";

const EXPERIENCE = [
  {
    role: "Researcher Intern",
    organization: "Yamaha Motor Corporation, USA",
    period: "May 2026 – August 2026",
    current: false,
    highlights: [
      "Analyzed 100,000+ customer survey records with Excel, Python, SQL, and Power BI to identify trends, validate data quality, and support decisions.",
      "Collected 100,000+ records from the web using Python and structured them via crosstab data entry.",
      "Built data processing and reporting workflows that turned large-scale datasets into insights for cross-functional stakeholders.",
      "Used pandas and NumPy to clean, analyze, and visualize complex datasets while maintaining data integrity.",
    ],
  },
  {
    role: "Data Science Researcher",
    organization: "FanDuel",
    period: "January 2026 – May 2026",
    current: false,
    highlights: [
      "Built an LLM-powered semantic retrieval and knowledge engineering pipeline over 8,000+ Confluence pages for ontology-driven data governance.",
      "Applied Sentence-BERT, TF-IDF, and cosine similarity to retrieve business context and generate standardized data definitions.",
      "Integrated documentation, schema metadata, and Databricks lineage into a unified Generative AI framework for governance and knowledge retrieval.",
      "Delivered production-ready ontology and enterprise data dictionary assets to FanDuel.",
    ],
  },
  {
    role: "Graduate Research Assistant",
    organization: "Institute for Insight Department",
    period: "August 2025 – Present",
    current: true,
    highlights: [
      "Collaborating with faculty, peers, and industry partners (Shepherd Center, Truist Bank, Better Business Bureau) on real-world data science and ML projects.",
      "Performing data cleaning, EDA, and feature engineering using Python, SQL, RStudio, and AI tools.",
      "Building and evaluating predictive models using linear regression, classification, and ensemble methods.",
      "Contributing to technical documentation, code, and stakeholder presentations.",
    ],
  },
  {
    role: "Data Analytics",
    organization: "Shepherd Center, Atlanta, Georgia",
    period: "August 2025 – December 2025",
    current: true,
    highlights: [
      "Analyzed stroke patient data to support precision rehabilitation and treatment planning.",
      "Applied linear regression, logistic regression, KNN, and Random Forest to identify effective treatment strategies.",
      "Performed data cleaning, EDA, feature engineering, and model evaluation in Python, SQL, and RStudio.",
      "Delivered technical documentation, reproducible code, and stakeholder presentations.",
    ],
  },
  {
    role: "Research Assistant",
    organization: "Dr. Xinyu Fu, Computer Information System Department",
    period: "August 2024 – Present",
    current: true,
    highlights: [
      "Synthesized literature reviews into comprehensive reports across multiple research papers.",
      "Presented findings in written reports and oral presentations.",
      "Aligned research progress with goals via weekly meetings with supervisor and PhD candidates.",
    ],
  },
  {
    role: "Learning Assistant",
    organization: "Mathematics and Statistics Department",
    period: "August 2023 – May 2025",
    current: false,
    highlights: [
      "Supported 1,000+ students in solving problems, completing assignments, and preparing for exams.",
      "Coordinated with professors weekly to identify student needs.",
      "Provided one-on-one and group tutoring, improving student performance.",
    ],
  },
  {
    role: "Undergraduate Research Fellow",
    organization: "J. Mack Robinson College of Business",
    period: "January 2024 – April 2024",
    current: false,
    highlights: [
      "Conducted in-depth business research to enhance decision-making processes.",
      "Developed and refined research questions targeting real business challenges.",
      "Represented team in meetings, conferences, and workshops.",
    ],
  },
];

export default defineTool({
  name: "list_experience",
  title: "List experience",
  description: "List Tran Le's professional and research experience in reverse-chronological order.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(EXPERIENCE, null, 2) }],
    structuredContent: { experience: EXPERIENCE },
  }),
});